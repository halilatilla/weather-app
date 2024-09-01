import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

function useCityFromSearchParams(onCityChange: (city: string) => void) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const cityParam = searchParams.get("city");
    if (cityParam) {
      onCityChange(cityParam);
    }
  }, [searchParams, onCityChange]);
}

export default useCityFromSearchParams;
