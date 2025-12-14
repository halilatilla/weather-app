"use client";

import { useMemo } from "react";
import {
  StudioContainer,
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

// Get clothing/activity advice based on weather
const getWeatherAdvice = (temp: number, condition: string): string => {
  // Temperature-based advice
  if (temp < 0) {
    return "Bundle up! It's freezing!";
  } else if (temp < 10) {
    return "Don't forget your jacket!";
  } else if (temp < 18) {
    return "A light sweater will do!";
  } else if (temp < 25) {
    return "Perfect weather outside!";
  } else if (temp < 32) {
    return "Stay cool and hydrated!";
  } else {
    return "Extreme heat warning!";
  }
};

// Generate the full announcement text
const generateAnnouncement = (
  weatherData: WeatherData,
  isCelsius: boolean
): string => {
  const temp = isCelsius
    ? Math.round(weatherData.main.temp)
    : Math.round((weatherData.main.temp * 9) / 5 + 32);
  const unit = isCelsius ? "C" : "F";
  const description = weatherData.weather[0]?.description || "clear sky";
  const city = weatherData.name;

  return `Today in ${city}, expect ${description}. Temperature around ${temp}°${unit}. ${getWeatherAdvice(weatherData.main.temp, weatherData.weather[0]?.main || "")}`;
};

// Generate ticker headlines
const generateTickerText = (weatherData: WeatherData | null): string => {
  if (!weatherData) {
    return "★★★ WEATHER CHANNEL LIVE ★★★ ENTER A CITY TO GET THE LATEST FORECAST ★★★ POWERED BY RETRO WEATHER SYSTEMS ★★★";
  }

  const city = weatherData.name.toUpperCase();
  const temp = Math.round(weatherData.main.temp);
  const description = weatherData.weather[0]?.description.toUpperCase() || "CLEAR";
  const humidity = weatherData.main.humidity;
  const wind = weatherData.wind.speed;

  return `★★★ LIVE FROM ${city} ★★★ CURRENT CONDITIONS: ${description} ★★★ TEMPERATURE: ${temp}°C ★★★ HUMIDITY: ${humidity}% ★★★ WIND SPEED: ${wind} M/S ★★★ WEATHER ADVISORY IN EFFECT ★★★`;
};

export default function WeatherAnnouncer({
  weatherData,
  loading = false,
  isCelsius = true,
}: WeatherAnnouncerProps) {
  const announcement = useMemo(() => {
    if (!weatherData) return null;
    return generateAnnouncement(weatherData, isCelsius);
  }, [weatherData, isCelsius]);

  const weatherEmoji = useMemo(() => {
    if (!weatherData) return "🌤️";
    return getWeatherEmoji(weatherData.weather[0]?.main || "");
  }, [weatherData]);

  const tickerText = useMemo(() => {
    return generateTickerText(weatherData);
  }, [weatherData]);

  return (
    <StudioContainer>
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
            <Face />
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

      {/* Speech Bubble - Only show when there's data or loading */}
      {(weatherData || loading) && (
        <SpeechBubbleContainer>
          <SpeechBubble>
            <BubbleHeader>
              <WeatherEmoji>{weatherEmoji}</WeatherEmoji>
              WEATHER REPORT
            </BubbleHeader>
            <BubbleText>
              {loading ? (
                <>
                  LOADING FORECAST
                  <LoadingText />
                </>
              ) : (
                announcement
              )}
            </BubbleText>
          </SpeechBubble>
        </SpeechBubbleContainer>
      )}

      {/* Waiting message when no data */}
      {!weatherData && !loading && (
        <WaitingMessage>
          AWAITING CITY INPUT
          <span>Enter a city name above</span>
        </WaitingMessage>
      )}
    </StudioContainer>
  );
}
