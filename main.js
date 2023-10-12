import './style.css'
import './src/mainCard.js'
import './src/todaySection.js'
import './src/todayCard.js'
import './src/weekSection.js'
import './src/weekCard.js'
import './src/button.js'
import './src/graphChart.js'
import './src/form.js'
import { getWeather } from './src/fetchWeather'

if (localStorage.getItem("weatherCity") != null)
{
    console.log(JSON.parse(localStorage.getItem("weatherCity")));
    getWeather(JSON.parse(localStorage.getItem("weatherCity")));
}