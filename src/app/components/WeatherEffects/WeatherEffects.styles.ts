import styled, { keyframes, css } from "styled-components";

// ============ RAIN ANIMATIONS ============

const rainFall = keyframes`
  0% {
    transform: translateY(-100vh) translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(20px);
    opacity: 0.3;
  }
`;

const rainSplash = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

// ============ SNOW ANIMATIONS ============

const snowFall = keyframes`
  0% {
    transform: translateY(-10vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0.6;
  }
`;

const snowSway = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
`;

// ============ CLOUD ANIMATIONS ============

const cloudFloat = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100vw);
  }
`;

// ============ LIGHTNING ANIMATIONS ============

const lightningFlash = keyframes`
  0%, 100% {
    opacity: 0;
  }
  10%, 30% {
    opacity: 1;
  }
  20%, 40% {
    opacity: 0;
  }
`;

const thunderShake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-2px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(2px);
  }
`;

// ============ FOG/MIST ANIMATIONS ============

const fogDrift = keyframes`
  0% {
    transform: translateX(-50%) translateY(0);
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(50%) translateY(10px);
    opacity: 0.3;
  }
`;

// ============ CONTAINERS ============

export const WeatherEffectsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`;

// ============ RAIN ELEMENTS ============

export const RainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const RainDrop = styled.div<{
  $delay: number;
  $left: number;
  $duration: number;
}>`
  position: absolute;
  width: 2px;
  height: 20px;
  background: linear-gradient(to bottom, transparent, #88ccff, #4488ff);
  left: ${({ $left }) => $left}%;
  top: -20px;
  animation: ${rainFall} ${({ $duration }) => $duration}s linear infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  opacity: 0.6;
  border-radius: 0 0 2px 2px;

  /* Pixel effect */
  image-rendering: pixelated;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background: #88ccff;
    border-radius: 50%;
    animation: ${rainSplash} 0.3s ease-out infinite;
    animation-delay: ${({ $duration, $delay }) => $duration + $delay}s;
  }
`;

// ============ SNOW ELEMENTS ============

export const SnowContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Snowflake = styled.div<{
  $delay: number;
  $left: number;
  $size: number;
  $duration: number;
}>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: #ffffff;
  left: ${({ $left }) => $left}%;
  top: -10px;
  animation: ${snowFall} ${({ $duration }) => $duration}s linear infinite,
    ${snowSway} 3s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  opacity: 0.8;
  border-radius: 50%;
  box-shadow: 0 0 5px #ffffff, 0 0 10px rgba(255, 255, 255, 0.5);

  /* Pixel snowflake pattern */
  &::before {
    content: "❄";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${({ $size }) => $size * 1.5}px;
    color: #ffffff;
    text-shadow: 0 0 5px #00ffff;
  }
`;

// ============ CLOUD ELEMENTS ============

export const CloudContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

export const Cloud = styled.div<{
  $top: number;
  $duration: number;
  $delay: number;
  $size: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top}%;
  left: -200px;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size * 0.6}px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: ${cloudFloat} ${({ $duration }) => $duration}s linear infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  filter: blur(2px);

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
  }

  &::before {
    width: ${({ $size }) => $size * 0.6}px;
    height: ${({ $size }) => $size * 0.6}px;
    top: -30%;
    left: 20%;
  }

  &::after {
    width: ${({ $size }) => $size * 0.5}px;
    height: ${({ $size }) => $size * 0.5}px;
    top: -20%;
    right: 20%;
  }
`;

// ============ LIGHTNING ELEMENTS ============

export const LightningContainer = styled.div<{ $isActive: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0);
  animation: ${({ $isActive }) =>
    $isActive
      ? css`
          ${lightningFlash} 0.5s ease-out
        `
      : "none"};

  /* Screen shake effect */
  ${({ $isActive }) =>
    $isActive &&
    css`
      animation: ${lightningFlash} 0.5s ease-out,
        ${thunderShake} 0.3s ease-in-out 0.2s;
    `}
`;

export const LightningBolt = styled.div<{ $left: number }>`
  position: absolute;
  top: 0;
  left: ${({ $left }) => $left}%;
  width: 4px;
  height: 150px;
  background: linear-gradient(to bottom, #ffff00, #ffffff, #ffff00);
  clip-path: polygon(
    50% 0%,
    60% 30%,
    80% 30%,
    55% 50%,
    70% 50%,
    45% 100%,
    50% 55%,
    30% 55%,
    55% 35%,
    40% 35%
  );
  filter: drop-shadow(0 0 10px #ffff00) drop-shadow(0 0 20px #ffffff);
  transform: scaleY(2);
`;

// ============ FOG/MIST ELEMENTS ============

export const FogContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const FogLayer = styled.div<{
  $top: number;
  $delay: number;
  $opacity: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top}%;
  left: 0;
  width: 200%;
  height: 100px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(200, 200, 200, ${({ $opacity }) => $opacity}) 25%,
    rgba(200, 200, 200, ${({ $opacity }) => $opacity}) 75%,
    transparent 100%
  );
  animation: ${fogDrift} 20s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  filter: blur(20px);
`;

// ============ SUN RAYS (for clear weather) ============

const sunPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
`;

export const SunContainer = styled.div`
  position: absolute;
  top: 5%;
  right: 10%;
  width: 80px;
  height: 80px;
`;

export const SunRays = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 0, 0.8) 0%,
    rgba(255, 200, 0, 0.4) 40%,
    transparent 70%
  );
  border-radius: 50%;
  animation: ${sunPulse} 4s ease-in-out infinite;
  box-shadow: 0 0 40px rgba(255, 255, 0, 0.5), 0 0 80px rgba(255, 200, 0, 0.3);
`;
