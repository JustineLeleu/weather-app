// Form to give a city name and search the weather

import { getWeather } from './fetchWeather'

document.querySelector('#form').innerHTML = `
  <div id="formContainer" class="fixed top-0 left-0 right-0 h-full backdrop-blur-sm flex justify-center items-center">
    <div class="bg-weatherLightGray text-weatherBlack p-10 pt-16 rounded-lg shadow-weatherWhite shadow relative">
        <button id="closeButton" class="absolute right-5 top-2 bg-weatherGray text-weatherWhite px-1 rounded text-xs lg:text-sm hover:bg-weatherWhite hover:text-weatherGray">X</button>
        <form id="form" class="flex-col space-y-5">
            <div class="flex space-x-4 text-sm md:text-base lg:text-xl">
                <label for="cityInput">City:</label>
                <input id="cityInput" type="text" required>
            </div>
            <input type="submit" value="SEARCH" class="bg-weatherGray text-weatherWhite p-2 rounded text-xs md:text-sm lg:text-lg hover:bg-weatherWhite hover:text-weatherGray">
        </form>
      </div>
    </div>
`

const closeButton = document.getElementById("closeButton");
const formDisplay = document.getElementById("formContainer");
const cityInput = document.getElementById("cityInput");

closeButton.addEventListener("click", closeForm);

export function closeForm()
{
    if (localStorage.getItem("weatherCity") != null)
    {
        formDisplay.classList.remove("flex");
        formDisplay.classList.add("hidden");
    }
    else alert("You must enter a city first !")
}

export function showForm()
{
    formDisplay.classList.remove("hidden");
    formDisplay.classList.add("flex");
}

let submit = document.getElementById('form');
submit.addEventListener('submit', searchCity);

function searchCity(event)
{
    event.preventDefault();

    getWeather(cityInput.value);
}