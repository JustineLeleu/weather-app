// Function to set the cards with the weather of each hours for today and display them

import { findIcon } from "./findWeatherIcon";

const cards = document.querySelectorAll(".todayCard");

export function setTodayCards(data)
{
  for (let i = 0; i < cards.length; i++)
  {
    let temp = Math.round(data.list[i].main.temp);
    let weather = data.list[i].weather[0].main;
    let icon = findIcon(weather);
    let time = data.list[i].dt_txt.split(' ')[1].split(':', 2);

    setCard(cards[i], temp, icon, time);
  }
}

function setCard(card, temp, icon, time)
{
  card.innerHTML = `
  <div class="rounded-xl md:2xl lg:rounded-3xl w-10 md:w-16 lg:w-20 p-2 bg-weatherBlack shadow shadow-weatherGray text-weatherWhite font-Dosis text-center flex-col my-5">
    <div class="temp text-xs lg:text-sm">${temp}°C</div>
    <img class="icon object-contain w-10 lg:w-20" src="${icon}" alt="sun"/>
    <div class="time text-xs lg:text-sm">${time[0]}:${time[1]}</div>
  </div>
  `
}