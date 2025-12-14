"use client";

import Image from "next/image";
import { useState } from "react";
import {
  WeatherCard,
  CityName,
  HeroSection,
  HeroTemp,
  HeroInfo,
  WeatherIconWrapper,
  WeatherDescription,
  FeelsLike,
  WeatherGrid,
  WeatherItem,
  ItemIcon,
  ItemValue,
  ItemLabel,
  ErrorMessage,
  TemperatureToggle,
  MarqueeContainer,
  MarqueeText,
  StatusBar,
  StatusItem,
} from "./Weather.styles";
import { Wind, Droplets, Sunrise, Cpu, HardDrive, Eye } from "lucide-react";

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
  const temp = convertTemperature(weatherData.main.temp, isCelsius);
  const feelsLike = convertTemperature(weatherData.main.feels_like, isCelsius);
  const unit = getTemperatureUnit(isCelsius);

  return (
    <WeatherCard>
      <CityName>{weatherData.name}</CityName>

      <MarqueeContainer>
        <MarqueeText>
          ★★★ LIVE WEATHER DATA ★★★{" "}
          {weatherData.weather[0].description.toUpperCase()} ★★★ HUMIDITY:{" "}
          {weatherData.main.humidity}% ★★★ WIND: {weatherData.wind.speed} M/S
          ★★★
        </MarqueeText>
      </MarqueeContainer>

      {/* Hero Section with Big Temperature */}
      <HeroSection>
        <HeroInfo>
          <WeatherIconWrapper>
            <Image
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              width={80}
              height={80}
              style={{ display: "block" }}
            />
          </WeatherIconWrapper>
          <WeatherDescription>
            {weatherData.weather[0].description}
          </WeatherDescription>
        </HeroInfo>

        <HeroTemp>
          {temp}
          <span>°{unit}</span>
        </HeroTemp>

        <HeroInfo>
          <FeelsLike>
            Feels like {feelsLike}°{unit}
          </FeelsLike>
        </HeroInfo>
      </HeroSection>

      {/* Compact Stats Grid */}
      <WeatherGrid>
        <WeatherItem>
          <ItemIcon>
            <Droplets size={18} />
          </ItemIcon>
          <ItemValue>{weatherData.main.humidity}%</ItemValue>
          <ItemLabel>Humidity</ItemLabel>
        </WeatherItem>

        <WeatherItem>
          <ItemIcon>
            <Wind size={18} />
          </ItemIcon>
          <ItemValue>{weatherData.wind.speed}</ItemValue>
          <ItemLabel>Wind m/s</ItemLabel>
        </WeatherItem>

        <WeatherItem>
          <ItemIcon>
            <Sunrise size={18} />
          </ItemIcon>
          <ItemValue>{formatSunriseTime(weatherData.sys.sunrise)}</ItemValue>
          <ItemLabel>Sunrise</ItemLabel>
        </WeatherItem>

        <WeatherItem>
          <ItemIcon>
            <Eye size={18} />
          </ItemIcon>
          <ItemValue>{Math.round(weatherData.visibility / 1000)}</ItemValue>
          <ItemLabel>Vis. km</ItemLabel>
        </WeatherItem>
      </WeatherGrid>

      <TemperatureToggle onClick={toggleTemperature}>
        [ SWITCH TO °{getTemperatureUnit(!isCelsius)} ]
      </TemperatureToggle>

      <StatusBar>
        <StatusItem>
          <Cpu size={10} /> READY
        </StatusItem>
        <StatusItem>
          <HardDrive size={10} /> OK
        </StatusItem>
        <StatusItem>{new Date().toLocaleTimeString()}</StatusItem>
      </StatusBar>
    </WeatherCard>
  );
}
