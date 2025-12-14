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

const pulseGlow = keyframes`
  0%, 100% { box-shadow: inset 2px 2px 4px #404040, 0 0 5px rgba(0, 255, 255, 0.3); }
  50% { box-shadow: inset 2px 2px 4px #404040, 0 0 15px rgba(0, 255, 255, 0.5); }
`;

const marqueeScroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

export const WeatherCard = styled.div`
  /* Windows 95 sunken panel */
  background: linear-gradient(180deg, #000000 0%, #001a1a 100%);
  border: 3px solid;
  border-color: #808080 #FFFFFF #FFFFFF #808080;
  box-shadow: inset 2px 2px 4px #000000;
  padding: 1.5rem;
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
      rgba(0, 0, 0, 0.2) 100%
    );
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const CityName = styled.h2`
  text-align: center;
  color: #00FFFF;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 1.5rem;
  font-family: 'Press Start 2P', cursive;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: ${neonFlicker} 4s infinite;

  @media (max-width: 600px) {
    font-size: 1rem;
    letter-spacing: 2px;
  }
`;

export const WeatherGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const WeatherItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a2e;
  border: 2px solid;
  border-color: #808080 #FFFFFF #FFFFFF #808080;
  box-shadow: inset 2px 2px 4px #000000;
  padding: 12px;
  font-family: 'VT323', monospace;
  font-size: 18px;
  color: #00FF00;
  text-shadow: 0 0 5px #00FF00;
  text-transform: uppercase;
  animation: ${pulseGlow} 3s ease-in-out infinite;

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 10px;
  }
`;

export const IconWrapper = styled.div`
  margin-right: 8px;
  color: #FF00FF;
  filter: drop-shadow(0 0 5px #FF00FF);
  display: flex;
  align-items: center;
`;

export const ErrorMessage = styled.div`
  color: #FF0000;
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  font-size: 12px;
  margin-top: 20px;
  padding: 16px;
  background: #000000;
  border: 3px solid;
  border-color: #808080 #FFFFFF #FFFFFF #808080;
  text-shadow: 0 0 10px #FF0000;
  animation: ${neonFlicker} 2s infinite;

  &::before {
    content: "⚠ ";
  }

  &::after {
    content: " ⚠";
  }
`;

export const TemperatureToggle = styled.button`
  background: #C0C0C0;
  border: 3px solid;
  border-color: #FFFFFF #808080 #808080 #FFFFFF;
  box-shadow: inset 1px 1px 0 #DFDFDF, inset -1px -1px 0 #404040;
  color: #000080;
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  cursor: pointer;
  margin-top: 16px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;
  transition: all 0.1s;

  &:hover {
    background: #DFDFDF;
  }

  &:active {
    border-color: #808080 #FFFFFF #FFFFFF #808080;
    box-shadow: inset 2px 2px 4px #404040;
  }
`;

export const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  font-size: 4rem;
  color: #FFFF00;
  filter: drop-shadow(0 0 10px #FFFF00);

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

/* New retro elements */
export const MarqueeContainer = styled.div`
  overflow: hidden;
  background: #000000;
  border: 2px solid;
  border-color: #808080 #FFFFFF #FFFFFF #808080;
  padding: 4px 0;
  margin: 12px 0;
`;

export const MarqueeText = styled.div`
  white-space: nowrap;
  color: #FFFF00;
  font-family: 'VT323', monospace;
  font-size: 14px;
  animation: ${marqueeScroll} 15s linear infinite;
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
  background: #C0C0C0;
  border: 2px solid;
  border-color: #808080 #FFFFFF #FFFFFF #808080;
  padding: 4px 8px;
  font-family: 'VT323', monospace;
  font-size: 14px;
  color: #000000;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const StatusItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;
