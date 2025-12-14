"use client";

import { useMemo, useState, useEffect, useRef, FormEvent } from "react";
import {
  StudioContainer,
  ToggleButton,
  MinimizedContent,
  LiveIndicator,
  LiveDot,
  LiveText,
  StudioBackground,
  StudioLight,
  NewsDesk,
  Microphone,
  CharacterContainer,
  PixelCharacter,
  Head,
  Face,
  Body,
  Tie,
  Arms,
  Hands,
  Paper,
  NewsTicker,
  TickerLabel,
  TickerContent,
  TickerText,
  SpeechBubbleContainer,
  SpeechBubble,
  BubbleHeader,
  BubbleText,
  WeatherEmoji,
  LoadingText,
  WaitingMessage,
  ChatContainer,
  ChatInputWrapper,
  ChatInput,
  ChatSendButton,
  AIBadge,
} from "./WeatherAnnouncer.styles";

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
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

interface WeatherAnnouncerProps {
  weatherData: WeatherData | null;
  loading?: boolean;
  isCelsius?: boolean;
}

// Custom hook for typewriter effect
const useTypewriter = (text: string | null, speed: number = 30) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const previousTextRef = useRef<string | null>(null);

  useEffect(() => {
    // Reset when text changes
    if (text !== previousTextRef.current) {
      previousTextRef.current = text;
      setDisplayedText("");

      if (!text) {
        setIsTyping(false);
        return;
      }

      setIsTyping(true);
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }
  }, [text, speed]);

  return { displayedText, isTyping };
};

// Get weather emoji based on condition
const getWeatherEmoji = (condition: string): string => {
  switch (condition.toLowerCase()) {
    case "clear":
      return "☀️";
    case "clouds":
      return "☁️";
    case "rain":
    case "drizzle":
      return "🌧️";
    case "thunderstorm":
      return "⛈️";
    case "snow":
      return "❄️";
    case "mist":
    case "fog":
    case "haze":
      return "🌫️";
    default:
      return "🌤️";
  }
};

// Generate ticker headlines
const generateTickerText = (weatherData: WeatherData | null): string => {
  if (!weatherData) {
    return "★★★ WEATHER CHANNEL LIVE ★★★ ASK CHIP ANYTHING ABOUT THE WEATHER! ★★★ POWERED BY AI ★★★";
  }

  const city = weatherData.name.toUpperCase();
  const temp = Math.round(weatherData.main.temp);
  const description =
    weatherData.weather[0]?.description.toUpperCase() || "CLEAR";

  return `★★★ LIVE FROM ${city} ★★★ ${description} AT ${temp}°C ★★★ ASK CHIP YOUR WEATHER QUESTIONS! ★★★ AI-POWERED FORECAST ★★★`;
};

// Generate short text for minimized view
const generateMinimizedText = (
  weatherData: WeatherData | null,
  loading: boolean
): string => {
  if (loading) return "📡 LOADING...";
  if (!weatherData) return "🤖 ASK CHIP!";
  const temp = Math.round(weatherData.main.temp);
  const emoji = getWeatherEmoji(weatherData.weather[0]?.main || "");
  return `${emoji} ${weatherData.name}: ${temp}°C`;
};

// Get weather advice based on conditions
const getWeatherAdvice = (temp: number, condition: string): string => {
  const conditionLower = condition.toLowerCase();

  if (conditionLower.includes("rain") || conditionLower.includes("drizzle")) {
    return "Don't forget your umbrella!";
  }
  if (conditionLower.includes("snow")) {
    return "Bundle up warm out there!";
  }
  if (conditionLower.includes("thunder")) {
    return "Stay safe indoors!";
  }

  if (temp < 0) return "Bundle up! It's freezing!";
  if (temp < 10) return "Grab a warm jacket!";
  if (temp < 18) return "A light sweater will do!";
  if (temp < 25) return "Perfect weather outside!";
  if (temp < 32) return "Stay cool and hydrated!";
  return "Extreme heat - stay cool!";
};

// Generate static fallback report (when AI is unavailable)
const generateStaticReport = (weatherData: WeatherData): string => {
  const temp = Math.round(weatherData.main.temp);
  const feelsLike = Math.round(weatherData.main.feels_like);
  const description = weatherData.weather[0]?.description || "clear sky";
  const condition = weatherData.weather[0]?.main || "Clear";
  const city = weatherData.name;
  const advice = getWeatherAdvice(temp, condition);

  return `Hey ${city}! Currently ${temp}°C (feels like ${feelsLike}°C) with ${description}. ${advice}`;
};

// Fetch AI weather report
const fetchAIWeatherReport = async (
  weatherData: WeatherData
): Promise<string> => {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Give me a fun weather report for this city!",
      weatherData: weatherData,
      isInitialReport: true,
    }),
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  return data.response;
};

export default function WeatherAnnouncer({
  weatherData,
  loading = false,
  isCelsius = true,
}: WeatherAnnouncerProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [aiReport, setAiReport] = useState<string | null>(null);
  const [aiChatResponse, setAiChatResponse] = useState<string | null>(null);
  const [isReportLoading, setIsReportLoading] = useState(false);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [isChatMode, setIsChatMode] = useState(false);

  // Track previous city to detect changes
  const prevCityRef = useRef<string | null>(null);

  // Fetch AI report when weather data changes
  useEffect(() => {
    const fetchReport = async () => {
      if (!weatherData) {
        setAiReport(null);
        return;
      }

      // Check if city changed
      if (weatherData.name !== prevCityRef.current) {
        prevCityRef.current = weatherData.name;
        setIsChatMode(false);
        setAiChatResponse(null);
        setIsReportLoading(true);
        setAiReport(null);

        try {
          const report = await fetchAIWeatherReport(weatherData);
          setAiReport(report);
        } catch (error) {
          // Fallback to static report if AI fails (API error, credits exhausted, etc.)
          console.log("AI unavailable, using static report:", error);
          setAiReport(generateStaticReport(weatherData));
        } finally {
          setIsReportLoading(false);
        }
      }
    };

    fetchReport();
  }, [weatherData]);

  // Current text to display
  const currentText = isChatMode ? aiChatResponse : aiReport;

  // Typewriter effect
  const { displayedText, isTyping } = useTypewriter(currentText, 25);

  const weatherEmoji = useMemo(() => {
    if (!weatherData) return "🤖";
    return getWeatherEmoji(weatherData.weather[0]?.main || "");
  }, [weatherData]);

  const tickerText = useMemo(() => {
    return generateTickerText(weatherData);
  }, [weatherData]);

  const minimizedText = useMemo(() => {
    return generateMinimizedText(weatherData, loading || isReportLoading);
  }, [weatherData, loading, isReportLoading]);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Handle chat submission
  const handleChatSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatLoading) return;

    setIsChatLoading(true);
    setIsChatMode(true);
    setAiChatResponse(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: chatInput,
          weatherData: weatherData,
        }),
      });

      const data = await response.json();

      if (data.error) {
        // Check if it's a rate limit or quota error
        if (
          data.error.includes("quota") ||
          data.error.includes("rate") ||
          data.error.includes("Too many")
        ) {
          setAiChatResponse("Whoa! AI is taking a break. Check back soon!");
        } else {
          setAiChatResponse("Oops! My weather radar is fuzzy. Try again!");
        }
      } else {
        setAiChatResponse(data.response);
      }
    } catch (error) {
      // Network error or API unavailable - give helpful static response
      if (weatherData) {
        const temp = Math.round(weatherData.main.temp);
        setAiChatResponse(
          `AI offline! But it's ${temp}°C in ${weatherData.name} right now!`
        );
      } else {
        setAiChatResponse("AI is offline. Search a city to see the weather!");
      }
    } finally {
      setIsChatLoading(false);
      setChatInput("");
    }
  };

  const isAnyLoading = loading || isReportLoading || isChatLoading;

  // Character talks only while typing (typewriter effect active)
  const isTalking = isTyping;

  return (
    <StudioContainer $isMinimized={isMinimized}>
      {/* Toggle Button */}
      <ToggleButton
        onClick={toggleMinimize}
        title={isMinimized ? "Expand" : "Minimize"}
      >
        {isMinimized ? "+" : "−"}
      </ToggleButton>

      {isMinimized ? (
        /* Minimized View */
        <MinimizedContent>{minimizedText}</MinimizedContent>
      ) : (
        /* Full View */
        <>
          {/* Live Indicator */}
          <LiveIndicator>
            <LiveDot />
            <LiveText>LIVE</LiveText>
          </LiveIndicator>

          {/* Studio Background with Lights */}
          <StudioBackground>
            <StudioLight $position="left" />
            <StudioLight $position="right" />
          </StudioBackground>

          {/* Pixel Art News Anchor Character */}
          <CharacterContainer>
            <PixelCharacter>
              <Head>
                <Face $isTalking={isTalking} />
              </Head>
              <Body />
              <Tie />
              <Arms />
              <Hands />
              <Paper />
            </PixelCharacter>
          </CharacterContainer>

          {/* Microphone */}
          <Microphone />

          {/* News Desk */}
          <NewsDesk />

          {/* News Ticker */}
          <NewsTicker>
            <TickerLabel>WEATHER</TickerLabel>
            <TickerContent>
              <TickerText>{tickerText}</TickerText>
            </TickerContent>
          </NewsTicker>

          {/* Speech Bubble */}
          {(weatherData || isAnyLoading || currentText) && (
            <SpeechBubbleContainer>
              <SpeechBubble>
                <BubbleHeader>
                  <WeatherEmoji>{weatherEmoji}</WeatherEmoji>
                  {isChatMode ? "CHIP SAYS" : "WEATHER REPORT"}
                  <AIBadge>AI</AIBadge>
                </BubbleHeader>
                <BubbleText $isTyping={isTyping || isAnyLoading}>
                  {isAnyLoading ? (
                    <>
                      {isChatLoading
                        ? "THINKING"
                        : isReportLoading
                        ? "GENERATING REPORT"
                        : "LOADING FORECAST"}
                      <LoadingText />
                    </>
                  ) : (
                    displayedText
                  )}
                </BubbleText>
              </SpeechBubble>
            </SpeechBubbleContainer>
          )}

          {/* Waiting message when no data */}
          {!weatherData && !isAnyLoading && !currentText && (
            <WaitingMessage>
              HI, I&apos;M CHIP!
              <span>Search a city & ask me anything!</span>
            </WaitingMessage>
          )}

          {/* Chat Input */}
          <ChatContainer>
            <ChatInputWrapper onSubmit={handleChatSubmit}>
              <ChatInput
                type="text"
                placeholder="Ask Chip about the weather..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                disabled={isAnyLoading}
              />
              <ChatSendButton
                type="submit"
                disabled={isAnyLoading || !chatInput.trim()}
              >
                {isChatLoading ? "..." : "ASK"}
              </ChatSendButton>
            </ChatInputWrapper>
          </ChatContainer>
        </>
      )}
    </StudioContainer>
  );
}
