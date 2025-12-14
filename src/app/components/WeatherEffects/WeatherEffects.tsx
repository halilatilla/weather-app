"use client";

import { useState, useEffect, useMemo } from "react";
import {
  WeatherEffectsContainer,
  RainContainer,
  RainDrop,
  SnowContainer,
  Snowflake,
  CloudContainer,
  Cloud,
  LightningContainer,
  LightningBolt,
  FogContainer,
  FogLayer,
  SunContainer,
  SunRays,
} from "./WeatherEffects.styles";

interface WeatherEffectsProps {
  condition: string;
}

// Generate random rain drops
const generateRainDrops = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    left: Math.random() * 100,
    duration: 0.5 + Math.random() * 0.5,
  }));
};

// Generate random snowflakes
const generateSnowflakes = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    left: Math.random() * 100,
    size: 4 + Math.random() * 8,
    duration: 5 + Math.random() * 5,
  }));
};

// Generate clouds
const generateClouds = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: 5 + Math.random() * 25,
    duration: 30 + Math.random() * 30,
    delay: Math.random() * 20,
    size: 100 + Math.random() * 100,
  }));
};

// Generate fog layers
const generateFogLayers = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: 20 + i * 25,
    delay: i * 3,
    opacity: 0.2 + Math.random() * 0.2,
  }));
};

export default function WeatherEffects({ condition }: WeatherEffectsProps) {
  const [lightningActive, setLightningActive] = useState(false);
  const [lightningPosition, setLightningPosition] = useState(50);

  // Memoize generated elements to prevent re-renders
  const rainDrops = useMemo(() => generateRainDrops(50), []);
  const snowflakes = useMemo(() => generateSnowflakes(40), []);
  const clouds = useMemo(() => generateClouds(5), []);
  const fogLayers = useMemo(() => generateFogLayers(4), []);

  // Lightning effect for thunderstorms
  useEffect(() => {
    if (condition.toLowerCase() === "thunderstorm") {
      const triggerLightning = () => {
        setLightningPosition(20 + Math.random() * 60);
        setLightningActive(true);
        setTimeout(() => setLightningActive(false), 500);
      };

      // Random lightning strikes
      const interval = setInterval(() => {
        if (Math.random() > 0.7) {
          triggerLightning();
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [condition]);

  const normalizedCondition = condition.toLowerCase();

  return (
    <WeatherEffectsContainer>
      {/* Clear/Sunny - Sun rays */}
      {normalizedCondition === "clear" && (
        <SunContainer>
          <SunRays />
        </SunContainer>
      )}

      {/* Clouds */}
      {(normalizedCondition === "clouds" ||
        normalizedCondition === "rain" ||
        normalizedCondition === "drizzle" ||
        normalizedCondition === "thunderstorm") && (
        <CloudContainer>
          {clouds.map((cloud) => (
            <Cloud
              key={cloud.id}
              $top={cloud.top}
              $duration={cloud.duration}
              $delay={cloud.delay}
              $size={cloud.size}
            />
          ))}
        </CloudContainer>
      )}

      {/* Rain */}
      {(normalizedCondition === "rain" ||
        normalizedCondition === "drizzle") && (
        <RainContainer>
          {rainDrops.map((drop) => (
            <RainDrop
              key={drop.id}
              $delay={drop.delay}
              $left={drop.left}
              $duration={drop.duration}
            />
          ))}
        </RainContainer>
      )}

      {/* Thunderstorm - Rain + Lightning */}
      {normalizedCondition === "thunderstorm" && (
        <>
          <RainContainer>
            {rainDrops.map((drop) => (
              <RainDrop
                key={drop.id}
                $delay={drop.delay}
                $left={drop.left}
                $duration={drop.duration * 0.7} // Faster rain during storm
              />
            ))}
          </RainContainer>
          <LightningContainer $isActive={lightningActive}>
            {lightningActive && <LightningBolt $left={lightningPosition} />}
          </LightningContainer>
        </>
      )}

      {/* Snow */}
      {normalizedCondition === "snow" && (
        <SnowContainer>
          {snowflakes.map((flake) => (
            <Snowflake
              key={flake.id}
              $delay={flake.delay}
              $left={flake.left}
              $size={flake.size}
              $duration={flake.duration}
            />
          ))}
        </SnowContainer>
      )}

      {/* Fog/Mist/Haze */}
      {(normalizedCondition === "mist" ||
        normalizedCondition === "fog" ||
        normalizedCondition === "haze" ||
        normalizedCondition === "smoke") && (
        <FogContainer>
          {fogLayers.map((layer) => (
            <FogLayer
              key={layer.id}
              $top={layer.top}
              $delay={layer.delay}
              $opacity={layer.opacity}
            />
          ))}
        </FogContainer>
      )}
    </WeatherEffectsContainer>
  );
}
