import getLocationByIp from "./getLocation";
import getWeatherByLocation from "./getWeatherByLocation";
import { weatherImages } from "./constants";

window.addEventListener("DOMContentLoaded", async () => {
  let locationData = await getLocationByIp();
  let weatherData = await getWeatherByLocation(locationData);

  let tempCurrent = document.querySelector("#tempCurrent"),
    tempMin = document.querySelector("#tempMin"),
    tempMax = document.querySelector("#tempMax"),
    cityOutput = document.querySelector("#city"),
    weatherMain = document.querySelector("#weatherMain"),
    weatherDescr = document.querySelector("#weatherDescr"),
    weatherIcon = document.querySelector('.weather-icon');

  function render(
    tempCurrValue,
    tempMinValue,
    tempMaxValue,
    cityValue,
    weatherMainValue,
    weatherDescrValue,
    imageCodeValue
  ) 
  {
    let temperatureSign = tempCurrValue < 0 ? '-' : '+';
    let imageUrl = weatherImages[imageCodeValue];
    
    weatherIcon.src = imageUrl;
    tempCurrent.innerHTML = temperatureSign + Math.round(tempCurrValue);
    tempMin.innerHTML = temperatureSign + Math.round(tempMinValue) + "&deg;C";
    tempMax.innerHTML = temperatureSign + Math.round(tempMaxValue) + "&deg;C";
    cityOutput.textContent = cityValue;
    weatherMain.textContent = weatherMainValue;
    weatherDescr.textContent = weatherDescrValue;
  }

  render(
    weatherData.main.temp,
    weatherData.main.temp_min,
    weatherData.main.temp_max,
    locationData,
    weatherData.weather[0].main,
    weatherData.weather[0].description,
    weatherData.weather[0].id
  );


});
