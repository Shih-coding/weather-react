import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
   function minTemperature() {
     let temperature = Math.round(props.data.temp.min);
     return `${temperature}°`;
  }
  
  return (
    <div>
  <div className="WeatherForecastDay">
               {props.data[0].dt}
          </div>
          <WeatherIcon code={props.data[0].weather[0].icon} size={36} />
          <div className="WeatherForecast-temperatures">
               <span className="WeatherForecast-temperature-max">{maxTemperature()}°</span>
               <span className="WeatherForecast-temperature-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}