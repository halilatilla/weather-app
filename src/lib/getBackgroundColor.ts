export default function getBackgroundColor(weatherCondition: string) {
  switch (weatherCondition) {
    case "Clear":
      return "linear-gradient(to bottom right, #87CEEB, #E0F6FF, #87CEFA, #4682B4)"; // Enhanced sky blue gradient with deeper blue tones
    case "Rain":
    case "Drizzle":
      return "linear-gradient(to bottom right, #708090, #A9A9A9, #778899, #C0C0C0)"; // Slate gray with darker and lighter grays
    case "Clouds":
      return "linear-gradient(to bottom right, #B0C4DE, #D3D3D3, #E6E6FA, #A9A9A9)"; // Light steel blue with soft gray and lavender
    case "Snow":
      return "linear-gradient(to bottom right, #F0F8FF, #E6E6FA, #DCDCDC, #F5F5F5)"; // Alice blue with soft white and light gray tones
    case "Thunderstorm":
      return "linear-gradient(to bottom right, #4B0082, #6A5ACD, #8A2BE2, #191970)"; // Indigo with deep purples and midnight blue
    case "Mist":
    case "Fog":
      return "linear-gradient(to bottom right, #D3D3D3, #F0F0F0, #BEBEBE, #C0C0C0)"; // Light gray with soft misty white and gray tones
    default:
      return "linear-gradient(to bottom right, #F0F8FF, #F5F5F5, #E6E6FA, #DCDCDC)"; // Default light background with subtle gray tones
  }
}
