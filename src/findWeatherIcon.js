// Function to call to find an icon based on the weather

export function findIcon(weather)
{
  switch (weather) {
    case "Thunderstorm":
      return "/images/icon-storm.png";

    case "Drizzle":
      return "/images/icon-drizzle.png";

    case "Rain":
      return "/images/icon-rain.png";
      
    case "Snow":
      return "/images/icon-snow.png";

    case "Mist":
      return "/images/icon-fog.png";

    case "Smoke":
      return "/images/icon-fog.png";

    case "Haze":
      return "/images/icon-fog.png";

    case "Dust":
      return "/images/icon-fog.png";

    case "Fog":
      return "/images/icon-fog.png";

    case "Sand":
      return "/images/icon-fog.png";

    case "Dust":
      return "/images/icon-fog.png";

    case "Ash":
      return "/images/icon-fog.png";

    case "Squall":
      return "/images/icon-fog.png";

    case "Tornado":
      return "/images/icon-tornado.png";

    case "Clear":
      return "/images/icon-clear.png";

    case "Clouds":
      return "/images/icon-cloud.png";
  
    default:
      return "/images/icon-clear.png";
  }
}