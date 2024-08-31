# **Weather App**

A modern, responsive weather application built with Next.js, TypeScript, and styled-components. This app allows users to search for weather information by city name and displays current weather conditions.

## **Features**

- Search for weather by city name
- Display current temperature, humidity, wind speed, and weather description
- Responsive design that works on mobile, tablet, and desktop devices
- URL-based search functionality for easy sharing
- Server-side API route to securely handle API requests

## **Technologies Used**

- Next.js 13+ (App Router)
- TypeScript
- styled-components
- OpenWeatherMap API

## **Prerequisites**

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- An OpenWeatherMap API key

## **Installation**

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Create a **`.env.local`** file in the root directory and add your OpenWeatherMap API key:

   ```
   OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

## **Usage**

To run the development server:

```
npm run dev
```

Open [**http://localhost:3000**](http://localhost:3000/) with your browser to see the result.

To build the app for production:

```
npm run build
npm start
```
