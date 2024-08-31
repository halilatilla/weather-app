import useSWR from "swr";
import { WeatherData } from "../types";
import { fetcher } from "@/lib/fetcher";

const useGetWeatherByCityName = (fetchCity: string) => {
  return useSWR<WeatherData>(
    fetchCity ? `/api/weather?city=${fetchCity}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
};

export default useGetWeatherByCityName;
