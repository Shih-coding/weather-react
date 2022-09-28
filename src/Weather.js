import axios from "axios";
import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import "./App.css"
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates:response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
   
  }

  function search() {
 const apiKey = "601d6d06ce387ac1305b54eb7df93ac7";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchLocation(position) {
    let apiKey = "601d6d06ce387ac1305b54eb7df93ac7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if (weatherData.ready) {
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-8">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control border-secondary border border-2 mb-2 "
              autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-2">
            <button className="search-btn" onClick={handleSubmit}>
              <FontAwesomeIcon icon={solid("magnifying-glass")} />
            </button>
          </div>
          <div class="col-2">
            <button
              className="current-location-btn"
              onClick={getCurrentLocation}
            >
              <FontAwesomeIcon icon={solid("street-view")} />
            </button>
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} />
    </div>
  );
} else {
    search();
    return "Loading...";
}
}
