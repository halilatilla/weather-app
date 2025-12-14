# **Weather App** 🎮⛈️

A retro 90s-themed weather application built with Next.js, TypeScript, and styled-components. This app brings back the nostalgia of Windows 95 era computing while providing real-time weather information — now featuring an AI-powered weather announcer!

<img width="2115" height="1358" alt="CleanShot 2025-12-14 at 21 13 39" src="https://github.com/user-attachments/assets/3db75522-6a48-4c3c-86c5-acaa1e84f7b0" />


## **Features**

- 🔍 Search for weather by city name
- 🌡️ Display current temperature (toggle between °C/°F), humidity, wind speed, sunrise time, and weather description
- 📱 Responsive design that works on mobile, tablet, and desktop devices
- 🔗 URL-based search functionality for easy sharing
- 🔒 Server-side API route to securely handle API requests
- 🎨 Dynamic backgrounds that change based on weather conditions
- 🤖 **AI Weather Announcer "Chip"** - Ask questions about the weather!
- 🎙️ **Pixel-art TV Studio** - Interactive news anchor with speech bubble

## **Meet Chip Forecast 🎙️**

Chip is your friendly 90s-style TV weather announcer! This pixel-art character:

- 📺 Lives in a retro CRT TV studio with scanlines and studio lights
- 💬 Announces weather updates with a typewriter effect
- 🤖 **AI-Powered Chat** - Ask Chip anything about the weather!
- 🎯 Uses GPT-4o-mini for smart, contextual responses
- ⚡ Rate-limited to 10 requests/minute per user
- 📱 Minimizable widget that stays out of your way

## **90s Retro Theme**

This app features an authentic 90s aesthetic including:

- **Windows 95-style UI** - Classic title bar ("WEATHER.EXE"), sharp borders, and 3D box shadows
- **CRT Scanlines** - Horizontal scanline overlay for that authentic CRT monitor feel
- **Pixel Font** - "Press Start 2P" font throughout for retro gaming vibes
- **Neon Color Palette** - Cyan, magenta, neon green, teal, and purple accents
- **Retro Interactions** - Button hover/active states with classic depth effects
- **TV Studio Widget** - Pixel-art news anchor with animated expressions

## **Technologies Used**

- Next.js 14 (App Router)
- TypeScript
- Styled-components
- SWR (for data fetching)
- OpenWeatherMap API
- OpenAI GPT-4o-mini (for AI chat)
- Upstash Redis (for rate limiting)
- Press Start 2P (Google Fonts)

## **Prerequisites**

Before you begin, ensure you have met the following requirements:

- Node.js (v18 or later)
- npm or yarn
- An OpenWeatherMap API key
- An OpenAI API key (for AI chat feature)
- Upstash Redis credentials (optional, for production rate limiting)

## **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/halilatilla/weather-app.git
   cd weather-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a **`.env.local`** file in the root directory and add your API keys:

   ```
   OPENWEATHERMAP_API_KEY=your_openweathermap_api_key_here
   OPENAI_API_KEY=your_openai_api_key_here
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url_here
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token_here
   ```

   > **Note:** Upstash Redis is optional. Without it, the app uses in-memory rate limiting (suitable for development).

## **Usage**

To run the development server:

```bash
npm run dev
```

Open [**http://localhost:3000**](http://localhost:3000/) with your browser to see the result.

To build the app for production:

```bash
npm run build
npm start
```

## **Theme Customization**

The retro theme is fully customizable via the theme file located at `src/app/styles/theme.ts`. You can modify:

- Color palette (primary, secondary, backgrounds, etc.)
- Typography
- Breakpoints for responsive design

Dynamic backgrounds based on weather conditions are configured in `src/lib/getBackgroundColor.ts`.

## **AI Chat Feature**

The AI chat feature uses OpenAI's GPT-4o-mini model to provide contextual weather responses. Chip's personality is that of a fun, enthusiastic 90s TV weather announcer who:

- Uses 90s slang ("radical", "totally", "awesome")
- Gives practical weather advice
- Makes weather puns and jokes
- Keeps responses short for the speech bubble UI

### Rate Limiting

- **Production:** Uses Upstash Redis with a sliding window (10 requests/minute per IP)
- **Development:** Falls back to in-memory rate limiting

---

_Built with 💾 and nostalgia_
