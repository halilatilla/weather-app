"use client";

import { useState, Suspense } from "react";
import useGetWeatherByCityName from "./hooks/useGetWeatherByCityName";
import Weather from "./components/Weather/Weather";
import WeatherAnnouncer from "./components/WeatherAnnouncer";
import Input from "./ui/Input/Input";
import Button from "./ui/Button/Button";
import {
  Container,
  Title,
  SearchContainer,
  DynamicBackground,
  WindowTitleBar,
  WindowTitle,
  WindowButtons,
  WindowButton,
  WindowContent,
  RetroStripe,
} from "./ui/CommonStyled";

import SearchParamsHandler from "./components/SearchParamsHandler";

export default function Home() {
  const [city, setCity] = useState("");
  const [fetchCity, setFetchCity] = useState("");
  const {
    data: weatherData,
    error,
    isValidating,
  } = useGetWeatherByCityName(fetchCity);

  const handleCityChange = (newCity: string) => {
    setCity(newCity);
  };

  const handleSearch = () => {
    if (city.trim()) {
      setFetchCity(city);
      window.history.pushState({}, "", `?city=${encodeURIComponent(city)}`);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const weatherCondition = weatherData?.weather[0]?.main || "default";

  return (
    <DynamicBackground $weatherCondition={weatherCondition}>
      <Container>
        <WindowTitleBar>
          <WindowTitle>⛅ WEATHER.EXE</WindowTitle>
          <WindowButtons>
            <WindowButton>_</WindowButton>
            <WindowButton>□</WindowButton>
            <WindowButton>×</WindowButton>
          </WindowButtons>
        </WindowTitleBar>
        <WindowContent>
          <Title>Weather App</Title>
          <RetroStripe />
          <SearchContainer>
            <Input
              type="text"
              placeholder="ENTER CITY NAME..."
              value={city}
              onChange={(e) => handleCityChange(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button
              onClick={handleSearch}
              disabled={!city.trim() || isValidating}
            >
              {isValidating ? "LOADING..." : "SEARCH"}
            </Button>
          </SearchContainer>

          <Weather
            weatherData={weatherData}
            error={error ? "ERROR: CITY NOT FOUND" : null}
            loading={isValidating}
          />
        </WindowContent>
      </Container>
      <WeatherAnnouncer
        weatherData={weatherData ?? null}
        loading={isValidating}
        isCelsius={true}
      />
      <Suspense fallback={null}>
        <SearchParamsHandler onCityChange={setFetchCity} />
      </Suspense>
    </DynamicBackground>
  );
}
