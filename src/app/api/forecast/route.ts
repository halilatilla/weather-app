import { NextResponse } from "next/server";

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!city && (!lat || !lon)) {
    return NextResponse.json(
      { error: "City or coordinates are required" },
      { status: 400 }
    );
  }

  try {
    let url: string;

    if (lat && lon) {
      url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
        city!
      )}&appid=${API_KEY}&units=metric`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Forecast not found");
    }

    const data = await response.json();

    // Process to get one forecast per day (noon time)
    const dailyForecasts = data.list
      .reduce((acc: any[], item: any) => {
        const date = new Date(item.dt * 1000).toDateString();
        const existingDay = acc.find(
          (d) => new Date(d.dt * 1000).toDateString() === date
        );

        // Pick the forecast closest to noon (12:00)
        const hour = new Date(item.dt * 1000).getHours();
        if (!existingDay && hour >= 11 && hour <= 14) {
          acc.push(item);
        } else if (!existingDay && acc.length < 5) {
          // Fallback: if no noon forecast, take first available
          const hasDay = acc.some(
            (d) => new Date(d.dt * 1000).toDateString() === date
          );
          if (!hasDay) {
            acc.push(item);
          }
        }

        return acc;
      }, [])
      .slice(0, 5);

    return NextResponse.json({
      city: data.city,
      forecasts: dailyForecasts,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching forecast data" },
      { status: 500 }
    );
  }
}
