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

// Get clothing/activity advice based on weather
const getWeatherAdvice = (temp: number): string => {
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

  return `Today in ${city}, expect ${description}. Temperature around ${temp}°${unit}. ${getWeatherAdvice(
    weatherData.main.temp
  )}`;
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

export default function WeatherAnnouncer({
  weatherData,
  loading = false,
  isCelsius = true,
}: WeatherAnnouncerProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isAiMode, setIsAiMode] = useState(false);

  // Default announcement from weather data
  const defaultAnnouncement = useMemo(() => {
    if (!weatherData) return null;
    return generateAnnouncement(weatherData, isCelsius);
  }, [weatherData, isCelsius]);

  // Current text to display (AI response or default)
  const currentText = isAiMode ? aiResponse : defaultAnnouncement;

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
    return generateMinimizedText(weatherData, loading);
  }, [weatherData, loading]);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Handle chat submission
  const handleChatSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isAiLoading) return;

    setIsAiLoading(true);
    setIsAiMode(true);
    setAiResponse(null);

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
        setAiResponse("Oops! My weather radar is fuzzy. Try again!");
      } else {
        setAiResponse(data.response);
      }
    } catch (error) {
      setAiResponse("Technical difficulties! Even weather tech has bad days!");
    } finally {
      setIsAiLoading(false);
      setChatInput("");
    }
  };

  // Reset to default mode when weather data changes (new city searched)
  const prevWeatherDataRef = useRef<WeatherData | null>(null);
  useEffect(() => {
    // Check if city has changed
    if (weatherData?.name !== prevWeatherDataRef.current?.name) {
      setIsAiMode(false);
      setAiResponse(null);
      prevWeatherDataRef.current = weatherData;
    }
  }, [weatherData]);

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
          {(weatherData || loading || isAiLoading || aiResponse) && (
            <SpeechBubbleContainer>
              <SpeechBubble>
                <BubbleHeader>
                  <WeatherEmoji>{isAiMode ? "🤖" : weatherEmoji}</WeatherEmoji>
                  {isAiMode ? "CHIP SAYS" : "WEATHER REPORT"}
                  {isAiMode && <AIBadge>AI</AIBadge>}
                </BubbleHeader>
                <BubbleText $isTyping={isTyping || isAiLoading}>
                  {loading || isAiLoading ? (
                    <>
                      {isAiLoading ? "THINKING" : "LOADING FORECAST"}
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
          {!weatherData && !loading && !isAiLoading && !aiResponse && (
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
                disabled={isAiLoading}
              />
              <ChatSendButton
                type="submit"
                disabled={isAiLoading || !chatInput.trim()}
              >
                {isAiLoading ? "..." : "ASK"}
              </ChatSendButton>
            </ChatInputWrapper>
          </ChatContainer>
        </>
      )}
    </StudioContainer>
  );
}
