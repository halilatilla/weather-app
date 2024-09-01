"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import useGetWeatherByCityName from "./hooks/useGetWeatherByCityName";
import Weather from "./components/Weather/Weather";
import Card from "./ui/Card/Card";
import Input from "./ui/Input/Input";
import Button from "./ui/Button/Button";
import {
  Container,
  Title,
  SearchContainer,
  DynamicBackground,
} from "./ui/CommonStyled";

function SearchParamsHandler({
  onCityChange,
}: {
  onCityChange: (city: string) => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const cityParam = searchParams.get("city");
    if (cityParam) {
      onCityChange(cityParam);
    }
  }, [searchParams, onCityChange]);

  return null;
}

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
    setFetchCity(newCity);
  };

  const handleSearch = () => {
    if (city.trim()) {
      setFetchCity(city);
      setCity("");
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
      <Suspense fallback={null}>
        <SearchParamsHandler onCityChange={handleCityChange} />
      </Suspense>
    </DynamicBackground>
  );
}
