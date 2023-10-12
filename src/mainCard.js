// Function to display the main card with weather data

import { fetchPhoto } from "./fetchPhoto";
import { findDay } from "./findDay";
import { findMonth } from "./findMonth";
import { findIcon } from "./findWeatherIcon";

document.querySelector('#mainCard').innerHTML = `
  <div class="rounded-3xl w-5/6 mx-auto p-8 bg-weatherBlack shadow-lg shadow-weatherGray text-weatherWhite flex justify-between font-Dosis items-center">
    <div class="flex-col space-y-2">
        <div id="date" class="text-base md:text-xl lg:text-3xl">Tuesday, 14 May</div>
        <div id="city" class="text-sm md:text-lg lg:text-2xl">Los Angeles</div>
        <div id="temp" class="text-2xl md:text-5xl lg:text-8xl">29°C</div>
        <div id="weather" class="text-xs md:text-sm lg:text-lg">sunny clouds</div>
    </div>
    <img id="icon" class="object-contain w-20 md:w-40 lg:w-60" src="/images/icon-clear.png" alt="sun--v1"/>
    <img id="cityPhoto" class="object-contain w-20 md:w-40 lg:w-60" src="https://img.icons8.com/clouds/100/city-buildings.png" alt="city picture">
  </div>
`

const dateDisplay = document.getElementById("date");
const cityDisplay = document.getElementById("city");
const tempDisplay = document.getElementById("temp");
const weatherDisplay = document.getElementById("weather");
const iconDisplay = document.getElementById("icon");
const cityPhotoDisplay = document.getElementById("cityPhoto");

export function setMainCard(data)
{
  let date = new Date();
  let city = data.city.name;
  let temp = Math.round(data.list[0].main.temp);
  let weather = data.list[0].weather[0].main;

  fetchPhoto(cityPhotoDisplay, city);

  setData(date, city, temp, weather);
}

function setData(date, city, temp, weather)
{
  let day = findDay(date.getDay());
  let dayDate = date.getDate();
  let month = findMonth(date.getMonth());

  dateDisplay.textContent = `${day}, ${dayDate} ${month}`;
  cityDisplay.textContent = city;
  tempDisplay.textContent = `${temp}°C`
  weatherDisplay.textContent = weather;
  iconDisplay.setAttribute("src", findIcon(weather));
}