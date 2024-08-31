"use client";

import Image from "next/image";
import { useState } from "react";
import {
  WeatherCard,
  CityName,
  WeatherGrid,
  WeatherItem,
  IconWrapper,
  ErrorMessage,
  TemperatureToggle,
} from "./Weather.styles";
import { Cloud, Wind, Droplets, Thermometer, Sunrise } from "lucide-react";

import convertTemperature from "@/lib/convertTemperature";
import formatSunriseTime from "@/lib/formatSunriseTime";
import SkeletonWeather from "./SkeletonWeather";
import getTemperatureUnit from "@/lib/getTemperatureUnit";
import { WeatherProps } from "../../types";

export default function Weather({ weatherData, error, loading }: WeatherProps) {
  const [isCelsius, setIsCelsius] = useState(true);

  if (loading) {
    return <SkeletonWeather />;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!weatherData) {
    return null;
  }

  const toggleTemperature = () => setIsCelsius(!isCelsius);

  return (
    <WeatherCard>
      <CityName>{weatherData.name}</CityName>
      <Image
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
        width={100}
        height={100}
        style={{
          display: "block",
          margin: "0 auto",
        }}
      />
      <WeatherGrid>
        <WeatherItem>
          <IconWrapper>
            <Thermometer size={24} />
          </IconWrapper>
          {convertTemperature(weatherData.main.temp, isCelsius)}°
          {getTemperatureUnit(isCelsius)}
        </WeatherItem>
        <WeatherItem>
          <IconWrapper>
            <Cloud size={24} />
          </IconWrapper>
          {weatherData.weather[0].description}
        </WeatherItem>
        <WeatherItem>
          <IconWrapper>
            <Droplets size={24} />
          </IconWrapper>
          {weatherData.main.humidity}% Humidity
        </WeatherItem>
        <WeatherItem>
          <IconWrapper>
            <Wind size={24} />
          </IconWrapper>
          {weatherData.wind.speed} m/s Wind
        </WeatherItem>
        <WeatherItem>
          <IconWrapper>
            <Thermometer size={24} />
          </IconWrapper>
          Feels like:{" "}
          {convertTemperature(weatherData.main.feels_like, isCelsius)}°
          {getTemperatureUnit(isCelsius)}
        </WeatherItem>
        <WeatherItem>
          <IconWrapper>
            <Sunrise size={24} />
          </IconWrapper>
          Sunrise: {formatSunriseTime(weatherData.sys.sunrise)}
        </WeatherItem>
      </WeatherGrid>

      <TemperatureToggle onClick={toggleTemperature}>
        Switch to {getTemperatureUnit(!isCelsius)}
      </TemperatureToggle>
    </WeatherCard>
  );
}
