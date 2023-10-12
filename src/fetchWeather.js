// Function to call to fetch the weather for the next 5 days based on a city

import { closeForm } from "./form";
import { setGraphData } from "./graphChart";
import { setMainCard } from "./mainCard";
import { setTodayCards } from "./todayCard";
import { setWeekCards } from "./weekCard";

const key = import.meta.env.VITE_WEATHER_API_KEY;

export function getWeather(city) 
{
    fetchWeather(city);
}

function fetchWeather(city) 
{
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`)
    .then((response) => response.json())
    .then((json) => {
        if(json.message == "city not found") alert("City not found, try again!");
        else
        {
            localStorage.setItem("weatherCity", JSON.stringify(json.city.name));
            console.log(json);
            closeForm();
            setMainCard(json);
            setTodayCards(json);
            setWeekCards(json);
            setGraphData(json);
        }
    })
    .catch((error) => 
    {
        console.log("There was an error!" + error);
    })
}