export default function getBackgroundColor(weatherCondition: string) {
  switch (weatherCondition) {
    case "Clear":
      // Vaporwave sunset gradient
      return "linear-gradient(180deg, #FF6B6B 0%, #FF00FF 25%, #8B00FF 50%, #4400FF 75%, #000080 100%)";
    case "Rain":
    case "Drizzle":
      // Dark cyberpunk rain
      return "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #1a1a2e 100%)";
    case "Clouds":
      // Moody purple retrowave
      return "linear-gradient(180deg, #2d1b69 0%, #4a1c6e 25%, #6b2c7b 50%, #8b3a8b 75%, #2d1b69 100%)";
    case "Snow":
      // Cool ice blue with pink tints
      return "linear-gradient(180deg, #e0e7ff 0%, #c7d2fe 25%, #a5b4fc 50%, #818cf8 75%, #6366f1 100%)";
    case "Thunderstorm":
      // Electric storm - dark with neon accents
      return "linear-gradient(180deg, #0d0221 0%, #1a0a3e 25%, #240b4a 50%, #3d1a5c 75%, #0d0221 100%)";
    case "Mist":
    case "Fog":
      // Mysterious foggy synthwave
      return "linear-gradient(180deg, #2c3e50 0%, #3498db 25%, #9b59b6 50%, #8e44ad 75%, #2c3e50 100%)";
    default:
      // Classic Windows 95 blue with vaporwave twist
      return "linear-gradient(180deg, #000080 0%, #0000CD 25%, #4169E1 50%, #6495ED 75%, #000080 100%)";
  }
}
