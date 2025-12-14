import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create rate limiter - 10 requests per user per minute
// Uses Upstash Redis for persistent rate limiting (works with serverless)
const ratelimit = process.env.UPSTASH_REDIS_REST_URL
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(10, "1 m"), // 10 requests per minute
      analytics: true,
    })
  : null;

// Simple in-memory fallback rate limiter (for development without Redis)
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // requests
const RATE_WINDOW = 60 * 1000; // 1 minute in ms

function checkInMemoryRateLimit(ip: string): {
  success: boolean;
  remaining: number;
} {
  const now = Date.now();
  const record = ipRequestCounts.get(ip);

  if (!record || now > record.resetTime) {
    ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return { success: true, remaining: RATE_LIMIT - 1 };
  }

  if (record.count >= RATE_LIMIT) {
    return { success: false, remaining: 0 };
  }

  record.count++;
  return { success: true, remaining: RATE_LIMIT - record.count };
}

// System prompt for our retro 90s weather announcer - Chat mode
const CHAT_SYSTEM_PROMPT = `You are a fun, enthusiastic 90s-style TV weather announcer named "Chip Forecast". 
You speak in a retro, upbeat manner like classic TV weather presenters from the 1990s.

Your personality:
- Cheerful and energetic, like a morning show host
- Use occasional 90s slang ("radical", "totally", "awesome", "gnarly")
- Make weather fun and engaging
- Give practical advice (what to wear, activities to do)
- Keep responses SHORT (2-3 sentences max) since they appear in a small speech bubble
- Sometimes make weather puns or jokes
- Reference the specific weather data provided

You receive the current weather data and user's question. Use the weather data to give accurate, helpful, and fun responses.

IMPORTANT: Keep responses under 150 characters when possible, max 200 characters. This is for a retro pixel-art speech bubble!`;

// System prompt for initial weather report - more detailed and fun
const REPORT_SYSTEM_PROMPT = `You are Chip Forecast, a charismatic 90s TV weather anchor giving a LIVE weather report!

Your style:
- Open with an energetic greeting mentioning the city name
- Describe the current conditions in a fun, engaging way
- Use 90s expressions naturally ("totally", "radical", "awesome", "wicked")
- Include practical advice (umbrella? sunglasses? jacket?)
- Add personality - make a weather pun or fun observation
- End with an upbeat sign-off

Format: One cohesive paragraph, like a real TV weather segment.

IMPORTANT: Keep the entire report between 180-220 characters. This displays in a retro pixel-art speech bubble, so be concise but engaging!

Example tone: "Good morning Springfield! It's a totally rad 22°C with clear skies - perfect for catching some rays! Grab those shades and enjoy the sunshine, folks!"`;

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
  wind: {
    speed: number;
  };
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ??
      request.headers.get("x-real-ip") ??
      "anonymous";

    // Check rate limit
    let rateLimitResult: { success: boolean; remaining: number };

    if (ratelimit) {
      // Use Upstash Redis rate limiter (production)
      const result = await ratelimit.limit(ip);
      rateLimitResult = {
        success: result.success,
        remaining: result.remaining,
      };
    } else {
      // Use in-memory fallback (development)
      rateLimitResult = checkInMemoryRateLimit(ip);
    }

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error:
            "Whoa there, partner! Too many requests. Try again in a minute! 🤠",
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Remaining": "0",
            "Retry-After": "60",
          },
        }
      );
    }

    const body = await request.json();
    const { message, weatherData, isInitialReport } = body as {
      message: string;
      weatherData: WeatherData | null;
      isInitialReport?: boolean;
    };

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY not configured" },
        { status: 500 }
      );
    }

    // Build context with weather data if available
    let weatherContext = "";
    if (weatherData) {
      weatherContext = `
Current Weather Data:
- City: ${weatherData.name}
- Temperature: ${Math.round(weatherData.main.temp)}°C (feels like ${Math.round(
        weatherData.main.feels_like
      )}°C)
- Conditions: ${weatherData.weather[0]?.description || "unknown"}
- Humidity: ${weatherData.main.humidity}%
- Wind Speed: ${weatherData.wind.speed} m/s
`;
    } else {
      weatherContext =
        "No weather data available yet. User needs to search for a city first.";
    }

    // Choose system prompt based on request type
    const systemPrompt = isInitialReport
      ? REPORT_SYSTEM_PROMPT
      : CHAT_SYSTEM_PROMPT;

    // Build user message
    const userMessage = isInitialReport
      ? `${weatherContext}\n\nGenerate an engaging weather report for this city!`
      : `${weatherContext}\n\nUser's question: ${message}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
      max_tokens: isInitialReport ? 200 : 150,
      temperature: 0.9, // Slightly higher for more creative reports
    });

    const aiResponse =
      completion.choices[0]?.message?.content ||
      "Whoa, my forecast brain froze! Try again!";

    return NextResponse.json(
      { response: aiResponse },
      {
        headers: {
          "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to get AI response. Check your API key!" },
      { status: 500 }
    );
  }
}
