# **Weather App** 🎮⛈️

A retro 90s-themed weather application built with Next.js, TypeScript, and styled-components. This app brings back the nostalgia of Windows 95 era computing while providing real-time weather information.

<img width="893" height="914" alt="CleanShot 2025-12-14 at 14 05 53" src="https://github.com/user-attachments/assets/db9d7032-a551-475b-8bad-ab9819d91ee1" />



## **Features**

- 🔍 Search for weather by city name
- 🌡️ Display current temperature (toggle between °C/°F), humidity, wind speed, sunrise time, and weather description
- 📱 Responsive design that works on mobile, tablet, and desktop devices
- 🔗 URL-based search functionality for easy sharing
- 🔒 Server-side API route to securely handle API requests
- 🎨 Dynamic backgrounds that change based on weather conditions

## **90s Retro Theme**

This app features an authentic 90s aesthetic including:

- **Windows 95-style UI** - Classic title bar ("WEATHER.EXE"), sharp borders, and 3D box shadows
- **CRT Scanlines** - Horizontal scanline overlay for that authentic CRT monitor feel
- **Pixel Font** - "Press Start 2P" font throughout for retro gaming vibes
- **Neon Color Palette** - Cyan, magenta, neon green, teal, and purple accents
- **Retro Interactions** - Button hover/active states with classic depth effects

## **Technologies Used**

- Next.js 13+ (App Router)
- TypeScript
- Styled-components
- SWR (for data fetching)
- OpenWeatherMap API
- Press Start 2P (Google Fonts)

## **Prerequisites**

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- An OpenWeatherMap API key

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

3. Create a **`.env.local`** file in the root directory and add your OpenWeatherMap API key:

   ```
   OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

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

---

*Built with 💾 and nostalgia*
