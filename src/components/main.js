import React, { useState } from "react"
import axios from 'axios';


function Main(){
const [data, setData] = useState({
description:" ",
name:'',
feels_like:0,
humidity: 0,
temp: 0,
temp_max: 0,
temp_min: 0,
speed:0,
country: " "

})
const [location, setLocation] = useState('')

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=90b2758cd194d8d0c658a51f81a7706f`

const Search = () => {
    axios.get(url).then((response) => {
    setData({description:response.data.weather[0].description,
    feels_like:response.data.main.feels_like,
    humidity: response.data.main.humidity,
    temp: response.data.main.temp,
    temp_max: response.data.main.temp_max,
    temp_min: response.data.main.temp_min,
    name:response.data.name,
    speed:response.data.wind.speed,
    country:response.data.sys.country})
    console.log(response.data)
  }).catch(error => {
    console.log('failed',error)
  })
};

    return(
        <>
        <div className="overlay">
        <div className="main-container">
          <div>
            <input placeholder="Enter Location" type='text'
            value={location}
            onChange = {event => setLocation(event.target.value)}/>
            <button className="btn" type='submit' onClick={Search}>Search</button>

          </div>
          <div className="content">
          <h1>{data.name}</h1>
          <p>{data.temp.toFixed()}°C</p>
          <h3>{data.description}</h3>
          </div>

          <div className="bottom">
          <div className="feels-like item">
            <p>{data.feels_like.toFixed()}°C</p>
            <p>Feels Like</p>
          </div>
          <div className="humid item">
            <p>{data.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind item">
            <p>{data.speed}Km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>

        </div>
        </div>
        </>
    );
};

export default Main;