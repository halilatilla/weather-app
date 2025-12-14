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
  MarqueeContainer,
  MarqueeText,
  StatusBar,
  StatusItem,
} from "./Weather.styles";
import { Cloud, Wind, Droplets, Thermometer, Sunrise, Cpu, HardDrive } from "lucide-react";

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
      
      <MarqueeContainer>
        <MarqueeText>
          ★★★ WEATHER DATA LOADED SUCCESSFULLY ★★★ CURRENT CONDITIONS FOR {weatherData.name.toUpperCase()} ★★★ {weatherData.weather[0].description.toUpperCase()} ★★★
        </MarqueeText>
      </MarqueeContainer>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        margin: '16px 0',
        filter: 'brightness(1.3) saturate(1.5)',
        imageRendering: 'auto'
      }}>
        <Image
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
          width={100}
          height={100}
          style={{
            display: "block",
            filter: "drop-shadow(0 0 10px #00FFFF)",
          }}
        />
      </div>

      <WeatherGrid>
        <WeatherItem>
          <IconWrapper>
            <Thermometer size={20} />
          </IconWrapper>
          {convertTemperature(weatherData.main.temp, isCelsius)}°
          {getTemperatureUnit(isCelsius)}
        </WeatherItem>
        <WeatherItem>
          <IconWrapper>
            <Cloud size={20} />
          </IconWrapper>
          {weatherData.weather[0].description}
        </WeatherItem>
        <WeatherItem>
          <IconWrapper>
            <Droplets size={20} />
          </IconWrapper>
          {weatherData.main.humidity}% HUMID
        </WeatherItem>
        <WeatherItem>
          <IconWrapper>
            <Wind size={20} />
          </IconWrapper>
          {weatherData.wind.speed} M/S WIND
        </WeatherItem>
        <WeatherItem>
          <IconWrapper>
            <Thermometer size={20} />
          </IconWrapper>
          FEELS: {convertTemperature(weatherData.main.feels_like, isCelsius)}°
          {getTemperatureUnit(isCelsius)}
        </WeatherItem>
        <WeatherItem>
          <IconWrapper>
            <Sunrise size={20} />
          </IconWrapper>
          RISE: {formatSunriseTime(weatherData.sys.sunrise)}
        </WeatherItem>
      </WeatherGrid>

      <TemperatureToggle onClick={toggleTemperature}>
        [ SWITCH TO {getTemperatureUnit(!isCelsius)} ]
      </TemperatureToggle>

      <StatusBar>
        <StatusItem>
          <Cpu size={12} /> READY
        </StatusItem>
        <StatusItem>
          <HardDrive size={12} /> DATA OK
        </StatusItem>
        <StatusItem>
          {new Date().toLocaleTimeString()}
        </StatusItem>
      </StatusBar>
    </WeatherCard>
  );
}
