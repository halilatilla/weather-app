import styled, { keyframes } from "styled-components";

const neonFlicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 
      0 0 5px #00FFFF,
      0 0 10px #00FFFF,
      0 0 20px #00FFFF;
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
`;

const tempGlow = keyframes`
  0%, 100% { 
    text-shadow: 0 0 20px var(--accent, #00FFFF), 0 0 40px var(--accent, #00FFFF);
    filter: brightness(1);
  }
  50% { 
    text-shadow: 0 0 30px var(--accent, #00FFFF), 0 0 60px var(--accent, #00FFFF);
    filter: brightness(1.1);
  }
`;

const marqueeScroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

export const WeatherCard = styled.div`
  background: linear-gradient(180deg, #0a0a1a 0%, #0d1a1a 100%);
  border: 3px solid;
  border-color: var(--window-border-dark, #808080)
    var(--window-border-light, #ffffff) var(--window-border-light, #ffffff)
    var(--window-border-dark, #808080);
  padding: 1.25rem;
  position: relative;
  overflow: hidden;

  /* CRT screen curvature effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      transparent 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const CityName = styled.h2`
  text-align: center;
  color: var(--accent, #00ffff);
  margin: 0;
  font-size: 1.1rem;
  font-family: var(--font-primary, "Press Start 2P", cursive);
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${neonFlicker} 4s infinite;
  /* Improve contrast with text stroke */
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.8);
  text-stroke: 1px rgba(0, 0, 0, 0.8);
  filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.8));

  @media (max-width: 600px) {
    font-size: 0.85rem;
    letter-spacing: 1px;
  }
`;

/* Hero Temperature Section */
export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 20px 0;
  padding: 16px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  border: 1px solid rgba(0, 255, 255, 0.2);

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const HeroTemp = styled.div`
  font-family: var(--font-primary, "Press Start 2P", cursive);
  font-size: 4rem;
  color: var(--accent, #00ffff);
  animation: ${tempGlow} 3s ease-in-out infinite;
  display: flex;
  align-items: flex-start;
  line-height: 1;
  /* Improve contrast with text stroke and stronger glow */
  -webkit-text-stroke: 2px rgba(0, 0, 0, 0.9);
  text-stroke: 2px rgba(0, 0, 0, 0.9);
  filter: drop-shadow(0 0 12px rgba(0, 255, 255, 1));

  span {
    font-size: 1.5rem;
    margin-top: 8px;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.9);
    text-stroke: 1px rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 600px) {
    font-size: 3rem;

    span {
      font-size: 1.2rem;
      margin-top: 4px;
    }
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const WeatherIconWrapper = styled.div`
  filter: drop-shadow(0 0 15px var(--accent, #00ffff));
`;

export const WeatherDescription = styled.div`
  font-family: var(--font-secondary, "VT323", monospace);
  font-size: 20px;
  color: #ffffff;
  text-transform: capitalize;
  text-align: center;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

export const FeelsLike = styled.div`
  font-family: var(--font-secondary, "VT323", monospace);
  font-size: 16px;
  color: var(--text-secondary, #cccccc);
  text-align: center;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
`;

/* Stats Grid - Compact */
export const WeatherGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const WeatherItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(26, 26, 46, 0.8);
  border: 2px solid;
  border-color: var(--window-border-dark, #808080)
    var(--window-border-light, #ffffff) var(--window-border-light, #ffffff)
    var(--window-border-dark, #808080);
  padding: 10px 8px;
  gap: 4px;
`;

export const ItemIcon = styled.div`
  /* Use bright cyan for better contrast */
  color: #00ffff;
  filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.9))
    drop-shadow(0 0 4px rgba(0, 255, 255, 0.6))
    drop-shadow(0 0 2px rgba(0, 0, 0, 0.8));
  display: flex;
  align-items: center;
`;

export const ItemValue = styled.div`
  font-family: var(--font-secondary, "VT323", monospace);
  font-size: 18px;
  /* Use bright cyan for better contrast on dark background */
  color: #00ffff;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.9), 0 0 4px rgba(0, 255, 255, 0.6),
    1px 1px 3px rgba(0, 0, 0, 0.95), 0 0 2px rgba(0, 0, 0, 0.8);

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const ItemLabel = styled.div`
  font-family: var(--font-secondary, "VT323", monospace);
  font-size: 12px;
  /* Use brighter grey for better contrast */
  color: #e0e0e0;
  text-transform: uppercase;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.4), 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

export const IconWrapper = styled.div`
  margin-right: 8px;
  color: var(--secondary, #ff00ff);
  filter: drop-shadow(0 0 5px var(--secondary, #ff00ff));
  display: flex;
  align-items: center;
`;

export const ErrorMessage = styled.div`
  color: var(--error, #ff0000);
  text-align: center;
  font-family: var(--font-primary, "Press Start 2P", cursive);
  font-size: 10px;
  margin-top: 20px;
  padding: 16px;
  background: #000000;
  border: 3px solid;
  border-color: var(--window-border-dark, #808080)
    var(--window-border-light, #ffffff) var(--window-border-light, #ffffff)
    var(--window-border-dark, #808080);
  text-shadow: 0 0 10px var(--error, #ff0000);
  animation: ${neonFlicker} 2s infinite;

  &::before {
    content: "⚠ ";
  }

  &::after {
    content: " ⚠";
  }
`;

export const TemperatureToggle = styled.button`
  background: var(--button-background, #c0c0c0);
  border: 3px solid;
  border-color: var(--button-border-light, #ffffff)
    var(--button-border-dark, #808080) var(--button-border-dark, #808080)
    var(--button-border-light, #ffffff);
  color: var(--text-accent, #000080);
  font-family: var(--font-primary, "Press Start 2P", cursive);
  font-size: 8px;
  cursor: pointer;
  margin-top: 12px;
  width: 100%;
  padding: 10px;
  text-transform: uppercase;
  transition: all 0.1s;

  &:hover {
    background: var(--button-hover, #dfdfdf);
  }

  &:active {
    border-color: var(--button-border-dark, #808080)
      var(--button-border-light, #ffffff) var(--button-border-light, #ffffff)
      var(--button-border-dark, #808080);
  }
`;

export const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  font-size: 4rem;
  color: #ffff00;
  filter: drop-shadow(0 0 10px #ffff00);

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

/* Marquee ticker */
export const MarqueeContainer = styled.div`
  overflow: hidden;
  background: #000000;
  border: 2px solid;
  border-color: var(--window-border-dark, #808080)
    var(--window-border-light, #ffffff) var(--window-border-light, #ffffff)
    var(--window-border-dark, #808080);
  padding: 3px 0;
  margin: 10px 0;
`;

export const MarqueeText = styled.div`
  white-space: nowrap;
  color: #ffff00;
  font-family: var(--font-secondary, "VT323", monospace);
  font-size: 12px;
  animation: ${marqueeScroll} 15s linear infinite;
  text-shadow: 0 0 4px rgba(255, 255, 0, 0.8), 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const PixelWeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  filter: drop-shadow(0 0 10px currentColor);

  img {
    image-rendering: pixelated;
    filter: brightness(1.2) saturate(1.5);
  }
`;

export const StatusBar = styled.div`
  background: var(--button-background, #c0c0c0);
  border: 2px solid;
  border-color: var(--window-border-dark, #808080)
    var(--window-border-light, #ffffff) var(--window-border-light, #ffffff)
    var(--window-border-dark, #808080);
  padding: 3px 8px;
  font-family: var(--font-secondary, "VT323", monospace);
  font-size: 12px;
  color: var(--text, #000000);
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  /* Ensure good contrast on light backgrounds */
  svg {
    color: var(--text, #000000);
    filter: none;
  }
`;

export const StatusItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;
