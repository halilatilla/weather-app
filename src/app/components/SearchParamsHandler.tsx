"use client";

import useCityFromSearchParams from "../hooks/useCityFromSearchParams";

interface SearchParamsHandlerProps {
  onCityChange: (city: string) => void;
}

export default function SearchParamsHandler({
  onCityChange,
}: SearchParamsHandlerProps) {
  useCityFromSearchParams(onCityChange);
  return null;
}
