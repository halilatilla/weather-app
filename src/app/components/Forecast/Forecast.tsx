"use client";

import { useState } from "react";
import { ForecastData, ForecastItem } from "../../types";
import {
  ForecastContainer,
  ForecastTitle,
  ForecastGrid,
  FloppyDisk,
  DiskLabel,
  DayName,
  DiskTemp,
  DiskIcon,
  DiskHole,
  LoadingDisk,
  WeatherCondition,
  DetailOverlay,
  DetailPopup,
  DetailTitleBar,
  DetailTitle,
  DetailCloseButton,
  DetailContent,
  DetailHeader,
  DetailEmoji,
  DetailHeaderText,
  DetailDate,
  DetailDescription,
  DetailGrid,
  DetailItem,
  DetailLabel,
  DetailValue,
} from "./Forecast.styles";

interface ForecastProps {
  forecastData: ForecastData | null;
  loading: boolean;
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

// Get day name from timestamp
const getDayName = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === today.toDateString()) {
    return "TODAY";
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return "TOMORROW";
  }

  return date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
};

// Get full date string
const getFullDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
};

export default function Forecast({
  forecastData,
  loading,
  isCelsius = true,
}: ForecastProps) {
  const [selectedForecast, setSelectedForecast] = useState<ForecastItem | null>(
    null
  );

  const handleCardClick = (forecast: ForecastItem) => {
    setSelectedForecast(forecast);
  };

  const handleClosePopup = () => {
    setSelectedForecast(null);
  };

  // Handle click outside to close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClosePopup();
    }
  };

  if (loading) {
    return (
      <ForecastContainer>
        <ForecastTitle>5-DAY FORECAST</ForecastTitle>
        <ForecastGrid>
          {[0, 1, 2, 3, 4].map((i) => (
            <LoadingDisk key={i} $delay={i}>
              <DiskHole />
            </LoadingDisk>
          ))}
        </ForecastGrid>
      </ForecastContainer>
    );
  }

  if (!forecastData || forecastData.forecasts.length === 0) {
    return null;
  }

  // Get converted temperature
  const getTemp = (temp: number) =>
    isCelsius ? Math.round(temp) : Math.round((temp * 9) / 5 + 32);
  const unit = isCelsius ? "°C" : "°F";

  return (
    <ForecastContainer>
      <ForecastTitle>5-DAY FORECAST</ForecastTitle>
      <ForecastGrid>
        {forecastData.forecasts.map((forecast, index) => {
          const temp = getTemp(forecast.main.temp);
          const condition = forecast.weather[0]?.main || "Clear";
          const description = forecast.weather[0]?.description || "";

          return (
            <FloppyDisk
              key={forecast.dt}
              $delay={index}
              onClick={() => handleCardClick(forecast)}
            >
              <DiskHole />
              <DiskIcon>{getWeatherEmoji(condition)}</DiskIcon>
              <DiskLabel>
                <DayName>{getDayName(forecast.dt)}</DayName>
                <DiskTemp>
                  {temp}
                  {unit}
                </DiskTemp>
                <WeatherCondition>{description}</WeatherCondition>
              </DiskLabel>
            </FloppyDisk>
          );
        })}
      </ForecastGrid>

      {/* Detail Popup */}
      {selectedForecast && (
        <DetailOverlay onClick={handleOverlayClick}>
          <DetailPopup>
            <DetailTitleBar>
              <DetailTitle>📋 FORECAST.DAT</DetailTitle>
              <DetailCloseButton onClick={handleClosePopup}>
                ×
              </DetailCloseButton>
            </DetailTitleBar>
            <DetailContent>
              <DetailHeader>
                <DetailEmoji>
                  {getWeatherEmoji(selectedForecast.weather[0]?.main || "")}
                </DetailEmoji>
                <DetailHeaderText>
                  <DetailDate>{getFullDate(selectedForecast.dt)}</DetailDate>
                  <DetailDescription>
                    {selectedForecast.weather[0]?.description || "Clear sky"}
                  </DetailDescription>
                </DetailHeaderText>
              </DetailHeader>
              <DetailGrid>
                <DetailItem>
                  <DetailLabel>🌡️ TEMP</DetailLabel>
                  <DetailValue>
                    {getTemp(selectedForecast.main.temp)}
                    {unit}
                  </DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>🤒 FEELS</DetailLabel>
                  <DetailValue>
                    {getTemp(selectedForecast.main.feels_like)}
                    {unit}
                  </DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>💧 HUMID</DetailLabel>
                  <DetailValue>{selectedForecast.main.humidity}%</DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>💨 WIND</DetailLabel>
                  <DetailValue>{selectedForecast.wind.speed} m/s</DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>⬇️ MIN</DetailLabel>
                  <DetailValue>
                    {getTemp(selectedForecast.main.temp_min)}
                    {unit}
                  </DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>⬆️ MAX</DetailLabel>
                  <DetailValue>
                    {getTemp(selectedForecast.main.temp_max)}
                    {unit}
                  </DetailValue>
                </DetailItem>
              </DetailGrid>
            </DetailContent>
          </DetailPopup>
        </DetailOverlay>
      )}
    </ForecastContainer>
  );
}
