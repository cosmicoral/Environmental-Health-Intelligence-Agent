export async function getClimateRisk() {
  const latitude = 51.5072;
  const longitude = -0.1276;

  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,relative_humidity_2m,wind_speed_10m` +
    `&hourly=uv_index` +
    `&timezone=Europe%2FLondon`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Open-Meteo failed: ${res.status}`);

  const data = await res.json();

  const temperature = data.current.temperature_2m;
  const humidity = data.current.relative_humidity_2m;
  const windSpeed = data.current.wind_speed_10m;
  const uvIndex = data.hourly?.uv_index?.[0] ?? 0;

  let riskLevel = 1;
  let safetyAdvice = "Normal conditions. Monitor local weather updates.";

  if (temperature >= 35 || uvIndex >= 8) {
    riskLevel = 5;
    safetyAdvice = "Extreme heat or UV risk. Avoid outdoor activity during peak hours.";
  } else if (temperature >= 30 || uvIndex >= 6) {
    riskLevel = 4;
    safetyAdvice = "High heat or UV risk. Reduce prolonged outdoor exposure.";
  } else if (temperature >= 26 || uvIndex >= 4) {
    riskLevel = 3;
    safetyAdvice = "Moderate heat risk. Stay hydrated and check vulnerable groups.";
  } else if (temperature >= 22) {
    riskLevel = 2;
    safetyAdvice = "Mild heat risk. Continue normal precautions.";
  }

  return {
    city: "London",
    temperature,
    humidity,
    windSpeed,
    uvIndex,
    riskLevel,
    safetyAdvice,
    source: "Open-Meteo API",
    status: "Climate module prototype",
  };
}