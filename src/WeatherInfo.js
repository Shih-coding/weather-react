import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";


export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
     <span className="date">
          <FormattedDate date={props.data.date} />
    </span>
      <div className="row mt-3">
        <div className="col-sm-7">
          <div className="float-left current-weather-icon">
            <WeatherIcon code={props.data.icon} size={60} />
            <span className="text-capitalize weather-description">{props.data.description}</span>
          </div>
          <div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-sm-5 weather-extra">
          <ul>
            <li>
              {" "}
              <FontAwesomeIcon
                icon={solid("droplet")}
                size="xl"
                className="drop"
              />{" "}
              <span>Humidity:</span> {props.data.humidity}%
            </li>
            <li>
              <FontAwesomeIcon
                icon={solid("wind")}
                size="lg"
                className="wind"
              />{" "}
              <span> Wind:</span> {props.data.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
