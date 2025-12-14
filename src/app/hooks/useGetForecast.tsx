import useSWR from "swr";
import { ForecastData } from "../types";
import { fetcher } from "@/lib/fetcher";

const useGetForecast = (city: string) => {
  return useSWR<ForecastData>(
    city ? `/api/forecast?city=${city}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
};

export default useGetForecast;
