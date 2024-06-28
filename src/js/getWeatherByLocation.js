import { openWeatherToken } from "./constants";

async function getWeatherByLocation(location) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${openWeatherToken}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok!");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error('Fetch error: ', e);
    return null;
  }
}

export default getWeatherByLocation;