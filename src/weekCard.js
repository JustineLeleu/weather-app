// Function to call to display the cards of next days weather

import { findDay } from "./findDay";
import { findIcon } from "./findWeatherIcon";

const cards = document.querySelectorAll(".weekCard");

export function setWeekCards(data)
{
  let date = new Date();
  let startIndex = findStartIndex(data.list, date);

  for (let i = 0; i < cards.length; i++)
  {
    let day = findDayName(i, date).slice(0, 3);
    let icon = findIcon(findAverageWeather(data.list, startIndex, 8 * i));
    let temp = findAverageTemp(data.list, startIndex, 8 * i);

    setCard(cards[i], temp, icon, day);
  }
}

// find the index of the list for the first day to display at time 00:00
function findStartIndex(list, date)
{
  for (let i = 0; i < list.length; i++) 
  {
    if (list[i].dt_txt.split(' ')[0].split('-')[2] == date.getDate()+1)
    {
      return i;
    }
  }
}

// find the name of the day
function findDayName(index, date)
{
  if (date.getDay() + index + 1 > 6) return findDay((date.getDay() + index + 1) - 6);
  else return findDay(date.getDay() + index + 1);
}

// find the average temperature for a day
function findAverageTemp(list, startIndex, offset)
{
  let temp = 0;

  for (let i = 0; i < 8; i++) 
  {
    let newTemp = Math.round(list[i + (startIndex + offset)].main.temp);
    temp += newTemp;
  }

  return Math.round(temp / 8);
}

// find the average weather for a day to display the icon
function findAverageWeather(list, startIndex, offset)
{
  let weathers = [];

  for (let i = 0; i < 8; i++)
  {
    let newWeather = list[i + (startIndex + offset)].weather[0].main;
    if (weathers.some(row => row.includes(newWeather)))
    {
      let index = weathers.findIndex(arr => arr.includes(newWeather));
      weathers[index][0] += 1;
    }
    else weathers.push([1, newWeather]);
  }

  let max = 0;
  let weather;

  weathers.forEach(element => {
    if (element[0] > max)
    {
      max = element[0];
      weather = element[1];
    }
  });

  return weather;
}

// set and display card for a day
function setCard(card, temp, icon, day)
{
  card.innerHTML = `
  <div class="rounded-2xl lg:rounded-3xl w-10 md:w-16 lg:w-20 p-2 bg-weatherBlack shadow shadow-weatherGray text-weatherWhite font-Dosis text-center flex-col my-5">
      <div class="text-xs lg:text-sm">${day}</div>
      <img class="object-contain w-10 lg:w-20" src="${icon}" alt="sun"/>
      <div class="text-xs lg:text-sm">${temp}°C</div>
    </div>
  `
}