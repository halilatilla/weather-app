# **Weather App** 🎮⛈️

A retro 90s-themed weather application built with Next.js, TypeScript, and styled-components. This app brings back the nostalgia of Windows 95 era computing while providing real-time weather information — now featuring an AI-powered weather announcer, multiple retro themes, and animated weather effects!

<img width="2045" height="1364" alt="CleanShot 2025-12-14 at 21 50 08" src="https://github.com/user-attachments/assets/bfb1b0ef-2c9c-4a02-9bf6-423352e1b700" />

## **Features**

### 🌤️ **Core Weather Features**

- 🔍 **City Search** - Search for weather by city name with URL-based sharing
- 🌡️ **Current Weather** - Hero temperature display with toggle between °C/°F
- 📊 **Weather Stats** - Humidity, wind speed, sunrise time, visibility, and more
- 📅 **5-Day Forecast** - Interactive floppy disk cards with detailed popups
- 🎨 **Animated Weather Effects** - Dynamic backgrounds and particle effects based on conditions
  - ☔ Rain animations for rainy weather
  - ❄️ Snowflakes for snowy conditions
  - ⛈️ Lightning flashes for thunderstorms
  - ☁️ Floating clouds for cloudy skies
  - 🌫️ Fog effects for misty weather
  - ☀️ Sun rays for clear skies

### 🤖 **AI-Powered Features**

- **AI Weather Announcer "Chip"** - Your friendly 90s-style TV weather presenter
  - 📺 Lives in a retro CRT TV studio with scanlines and studio lights
  - 💬 **AI-Generated Weather Reports** - Automatic initial reports when weather loads
  - 🗣️ **Interactive Chat** - Ask Chip anything about the weather!
  - 🎯 Uses GPT-4o-mini for smart, contextual responses
  - ⚡ Rate-limited to 10 requests/minute per user
  - 📱 Minimizable widget that stays out of your way
  - 🎭 Animated pixel-art character with mouth movements
  - 💾 Static fallback messages when AI is unavailable

### 🎨 **Retro Theme System**

- **4 Authentic Retro Themes** with theme switcher:
  - 🪟 **Windows 95** (Default) - Classic gray interface with neon accents
  - 💾 **Windows 98** - Blue gradient title bars and softer colors
  - 🍎 **Mac OS 9** - Platinum gray with purple accents
  - 💻 **MS-DOS** - Green-on-black terminal aesthetic with CRT effects
- **Theme Persistence** - Your theme choice is saved in localStorage
- **Dynamic CSS Variables** - All components adapt to the selected theme
- **Theme-Aware Components** - Buttons, inputs, and UI elements match each theme

### 🎯 **UI/UX Features**

- 📱 **Fully Responsive** - Works beautifully on mobile, tablet, and desktop
- 🎨 **Hero Temperature Display** - Large, glowing temperature as the centerpiece
- 📁 **Retro Forecast Cards** - Floppy disk-styled cards with click-to-expand details
- 🎬 **Smooth Animations** - Retro-style transitions and effects
- ♿ **WCAG AA Compliant** - High contrast ratios for accessibility
- 🔗 **URL-Based Search** - Shareable weather links via query parameters
- ⚡ **Fast Loading** - SWR caching for instant data updates

## **Meet Chip Forecast 🎙️**

Chip is your friendly 90s-style TV weather announcer! This pixel-art character:

- 📺 Lives in a retro CRT TV studio with scanlines and studio lights
- 💬 Announces weather updates with a typewriter effect
- 🤖 **AI-Powered Chat** - Ask Chip anything about the weather!
- 🎯 Uses GPT-4o-mini for smart, contextual responses
- ⚡ Rate-limited to 10 requests/minute per user
- 📱 Minimizable widget that stays out of your way
- 🎭 Animated expressions and mouth movements
- 📰 Live news ticker with weather updates

### **AI Features**

- **Initial Weather Reports** - Chip automatically generates a fun, personalized weather report when you search for a city
- **Interactive Chat** - Ask questions like "Should I bring an umbrella?" or "What's the best time to go outside?"
- **90s Personality** - Uses retro slang ("radical", "totally", "awesome") and makes weather puns
- **Smart Fallbacks** - Static messages when AI is unavailable (rate limits, network issues, etc.)

## **90s Retro Aesthetic**

This app features an authentic 90s aesthetic including:

- **Windows 95-style UI** - Classic title bar ("WEATHER.EXE"), sharp borders, and 3D box shadows
- **CRT Scanlines** - Horizontal scanline overlay for that authentic CRT monitor feel
- **Pixel Fonts** - "Press Start 2P" and "VT323" fonts throughout for retro gaming vibes
- **Neon Color Palette** - Cyan, magenta, neon green, teal, and purple accents
- **Retro Interactions** - Button hover/active states with classic depth effects
- **TV Studio Widget** - Pixel-art news anchor with animated expressions
- **Floppy Disk Forecast** - 5-day forecast displayed as retro floppy disk cards
- **Marquee Ticker** - Scrolling text ticker with weather updates

## **Technologies Used**

### **Frontend**

- Next.js 14 (App Router)
- TypeScript
- React 18
- Styled-components 6
- SWR (for data fetching and caching)
- Lucide React (icons)

### **Backend & APIs**

- Next.js API Routes
- OpenWeatherMap API (weather data)
- OpenAI GPT-4o-mini (AI chat and reports)
- Upstash Redis (rate limiting)

### **Fonts**

- Press Start 2P (Google Fonts) - Primary pixel font
- VT323 (Google Fonts) - Secondary monospace font

## **Prerequisites**

Before you begin, ensure you have met the following requirements:

- Node.js (v18 or later)
- npm, yarn, or pnpm
- An OpenWeatherMap API key ([Get one here](https://openweathermap.org/api))
- An OpenAI API key ([Get one here](https://platform.openai.com/api-keys)) - Optional but recommended for AI features
- Upstash Redis credentials (optional, for production rate limiting) - [Get one here](https://upstash.com/)

## **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/halilatilla/weather-app-styled.git
   cd weather-app-styled
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Create a **`.env.local`** file in the root directory and add your API keys:

   ```env
   OPENWEATHERMAP_API_KEY=your_openweathermap_api_key_here
   OPENAI_API_KEY=your_openai_api_key_here
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url_here
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token_here
   ```

   > **Note:**

   - `OPENWEATHERMAP_API_KEY` is **required** for weather data
   - `OPENAI_API_KEY` is **optional** but recommended for AI features (Chip will use static messages if not provided)
   - `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are **optional** - without them, the app uses in-memory rate limiting (suitable for development)

## **Usage**

### Development

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [**http://localhost:3000**](http://localhost:3000/) with your browser to see the result.

### Production

To build the app for production:

```bash
npm run build
npm start
```

## **Project Structure**

```
weather-app-styled/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── chat/         # AI chat endpoint
│   │   │   ├── forecast/     # 5-day forecast endpoint
│   │   │   └── weather/      # Current weather endpoint
│   │   ├── components/       # React components
│   │   │   ├── Forecast/     # 5-day forecast component
│   │   │   ├── ThemeSwitcher/ # Theme selector
│   │   │   ├── Weather/      # Main weather display
│   │   │   ├── WeatherAnnouncer/ # Chip AI announcer
│   │   │   └── WeatherEffects/ # Animated weather effects
│   │   ├── context/          # React Context (Theme)
│   │   ├── hooks/            # Custom React hooks
│   │   ├── styles/           # Theme configurations
│   │   └── ui/               # Reusable UI components
│   └── lib/                  # Utility functions
├── public/                    # Static assets
└── package.json
```

## **Theme Customization**

The app includes 4 pre-configured retro themes. Themes are defined in `src/app/styles/themes.ts` and can be customized by modifying:

- Color palettes (primary, secondary, backgrounds, borders, etc.)
- Typography (fonts)
- Effects (scanlines, CRT flicker, shadows)
- Window styling

Themes are managed via React Context and CSS custom properties (variables), making it easy to add new themes or customize existing ones.

## **AI Chat Feature**

The AI chat feature uses OpenAI's GPT-4o-mini model to provide contextual weather responses. Chip's personality is that of a fun, enthusiastic 90s TV weather announcer who:

- Uses 90s slang ("radical", "totally", "awesome", "gnarly")
- Gives practical weather advice (what to wear, activities to do)
- Makes weather puns and jokes
- Keeps responses short for the speech bubble UI (150-200 characters)
- Provides detailed initial weather reports (180-220 characters)

### Rate Limiting

- **Production:** Uses Upstash Redis with a sliding window (10 requests/minute per IP)
- **Development:** Falls back to in-memory rate limiting if Redis is not configured
- **Fallback:** Static messages when AI is unavailable or rate-limited

## **Accessibility**

The app is designed with accessibility in mind:

- ✅ **WCAG AA Compliant** - All text meets minimum contrast ratios (4.5:1 for normal text, 3:1 for large text)
- ✅ **High Contrast Mode** - Bright colors with text shadows for readability
- ✅ **Keyboard Navigation** - Full keyboard support for all interactive elements
- ✅ **Screen Reader Friendly** - Semantic HTML and ARIA labels where needed

## **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

## **License**

This project is open source and available under the [MIT License](LICENSE).

---

_Built with 💾 and nostalgia_
