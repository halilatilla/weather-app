import styled, { keyframes } from "styled-components";
import { WeatherCard, WeatherGrid, WeatherItem } from "./Weather.styles";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.5; }
`;

const RetroSkeleton = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "24px"};
  background: linear-gradient(
    90deg,
    #1a1a2e 0%,
    #00FF00 50%,
    #1a1a2e 100%
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border: 2px solid;
  border-color: #808080 #FFFFFF #FFFFFF #808080;
`;

const LoadingText = styled.div`
  font-family: 'Press Start 2P', cursive;
  font-size: 12px;
  color: #00FF00;
  text-align: center;
  text-shadow: 0 0 10px #00FF00;
  animation: ${blink} 1s infinite;
  margin-bottom: 16px;
`;

const LoadingBar = styled.div`
  background: #000000;
  border: 2px solid;
  border-color: #808080 #FFFFFF #FFFFFF #808080;
  padding: 4px;
  margin: 16px 0;
`;

const LoadingProgress = styled.div`
  height: 16px;
  background: repeating-linear-gradient(
    90deg,
    #00FF00 0px,
    #00FF00 10px,
    #008800 10px,
    #008800 20px
  );
  animation: ${shimmer} 2s linear infinite;
  box-shadow: 0 0 10px #00FF00;
`;

const SkeletonWeather = () => (
  <WeatherCard>
    <LoadingText>LOADING WEATHER DATA...</LoadingText>
    
    <LoadingBar>
      <LoadingProgress style={{ width: "75%" }} />
    </LoadingBar>

    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      <RetroSkeleton width="200px" height="40px" style={{ margin: "0 auto" }} />
    </div>
    
    <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}>
      <RetroSkeleton width="80px" height="80px" />
    </div>
    
    <WeatherGrid>
      {[...Array(6)].map((_, index) => (
        <WeatherItem key={index}>
          <RetroSkeleton width="120px" height="20px" />
        </WeatherItem>
      ))}
    </WeatherGrid>
    
    <div style={{ marginTop: "1rem" }}>
      <RetroSkeleton height="44px" />
    </div>
  </WeatherCard>
);

export default SkeletonWeather;
