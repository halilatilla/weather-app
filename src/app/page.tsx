"use client";

import { useState, KeyboardEvent, useEffect } from "react";
import useGetWeatherByCityName from "./hooks/useGetWeatherByCityName";
import Weather from "./components/Weather/Weather";

import { useSearchParams } from "next/navigation";

import Card from "./ui/Card/Card";
import Input from "./ui/Input/Input";
import Button from "./ui/Button/Button";

import {
  Container,
  Title,
  SearchContainer,
  DynamicBackground,
} from "./ui/CommonStyled";

export default function Home() {
  const [city, setCity] = useState("");
  const [fetchCity, setFetchCity] = useState("");
  const searchParams = useSearchParams();
  const {
    data: weatherData,
    error,
    isValidating,
  } = useGetWeatherByCityName(fetchCity);
  useEffect(() => {
    const cityParam = searchParams.get("city");
    if (cityParam) {
      setCity(cityParam);
      setFetchCity(cityParam);
    }
  }, [searchParams]);

  const handleSearch = () => {
    if (city.trim()) {
      setFetchCity(city);
      setCity("");
      window.history.pushState({}, "", `?city=${encodeURIComponent(city)}`);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const weatherCondition = weatherData?.weather[0]?.main || "default";

  return (
    <DynamicBackground weatherCondition={weatherCondition}>
      <Container>
        <Card>
          <Title>Weather App</Title>
          <SearchContainer>
            <Input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button
              onClick={handleSearch}
              disabled={!city.trim() || isValidating}
            >
              {isValidating ? "Searching..." : "Search"}
            </Button>
          </SearchContainer>

          <Weather
            weatherData={weatherData}
            error={error ? "Failed to fetch weather data" : null}
            loading={isValidating}
          />
        </Card>
      </Container>
    </DynamicBackground>
  );
}
