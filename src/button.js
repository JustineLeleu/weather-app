// Button to search for the weather of an other city

import { showForm } from "./form";

document.querySelector('#button').innerHTML = `
  <div class="my-6 mx-6">
    <button id="searchButton" class="border-solid border-2 border-weatherLightGray-400 rounded-md p-2 text-weatherGray font-Dosis text-sm lg:text-xl hover:bg-weatherLightGray hover:text-weatherWhite">Search Location</button>
  </div>
`

const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", showForm);