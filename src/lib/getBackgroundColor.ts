export default function getBackgroundColor(weatherCondition: string) {
  switch (weatherCondition) {
    case "Clear":
      return "linear-gradient(to bottom right, #87CEEB, #E0F6FF)"; // Sky blue for sunny
    case "Rain":
    case "Drizzle":
      return "linear-gradient(to bottom right, #708090, #C0C0C0)"; // Slate gray for rainy
    case "Clouds":
      return "linear-gradient(to bottom right, #B0C4DE, #E6E6FA)"; // Light steel blue for cloudy
    case "Snow":
      return "linear-gradient(to bottom right, #F0F8FF, #E6E6FA)"; // Alice blue for snowy
    case "Thunderstorm":
      return "linear-gradient(to bottom right, #4B0082, #8A2BE2)"; // Indigo for thunderstorms
    case "Mist":
    case "Fog":
      return "linear-gradient(to bottom right, #D3D3D3, #F0F0F0)"; // Light gray for misty conditions
    default:
      return "linear-gradient(to bottom right, #F0F8FF, #F5F5F5)"; // Default light background
  }
}
