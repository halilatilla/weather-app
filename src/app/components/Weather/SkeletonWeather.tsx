import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { WeatherCard, WeatherGrid, WeatherItem } from "./Weather.styles";

const SkeletonWeather = () => (
  <WeatherCard>
    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      <Skeleton width={150} height={36} />
    </div>
    <div
      style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}
    >
      <Skeleton circle={true} width={80} height={80} />
    </div>
    <WeatherGrid>
      {[...Array(6)].map((_, index) => (
        <WeatherItem key={index}>
          <Skeleton width={150} height={24} />
        </WeatherItem>
      ))}
    </WeatherGrid>
    <div style={{ marginTop: "1rem" }}>
      <Skeleton width="100%" height={36} />
    </div>
  </WeatherCard>
);

export default SkeletonWeather;
