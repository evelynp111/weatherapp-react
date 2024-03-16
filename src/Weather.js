import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Los Angeles",
    date: "Friday",
    time: "11:45",
    temperature: 73,
    description: "Sunny",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    humidity: 21,
    wind: 4,
  };
  return (
    <div className="Weather">
      <div className="weather-app">
        <form id="search-form" className="d-flex justify-content-end mb-3">
          <div className="row">
            <div className="searchBar col-8">
              <input
                type="search"
                placeholder="Type a city name..."
                className="form-control"
                id="city-input"
                autocomplete="off"
              />
            </div>
            <div className="searchBar col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary w-80"
              />
            </div>
          </div>
        </form>

        {/* City and date/time */}

        <div className="overview">
          <h1 id="city">{weatherData.city}</h1>
          <ul>
            <li id="date">
              {weatherData.date} | {weatherData.time}
            </li>
          </ul>
        </div>

        {/* Current weather conditions */}

        <div className="row current-conditions">
          <div className="col-7">
            <div className="d-flex weather-temperature">
              {/* icon url for image */}
              <img
                src={weatherData.imgUrl}
                alt="cloudy weather image"
                id="icon"
              />
              <div>
                <strong id="temperature">{weatherData.temperature}</strong>
                <span className="units">
                  {/* Fahrenheit link */}
                  <a href="#" id="fahrenheit-link" class="active">
                    °F
                  </a>
                  |{/* Celsius link */}
                  <a href="#" id="celsius-link">
                    °C
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="col-5">
            <ul className="weather-description">
              <li id="description">{weatherData.description}</li>
              <li>
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{weatherData.wind}</span> mp/h
              </li>
            </ul>
          </div>
        </div>

        {/* 5-day forecast */}

        <div className="weather-forecast" id="forecast"></div>
      </div>
      <span className="project-author">
        This project was coded by:
        <a href="https://github.com/evelynp111" target="_blank">
          Evelyn
        </a>
        , is open-sourced on
        <a
          href="https://github.com/evelynp111/WeatherApp-Project"
          target="_blank"
        >
          GitHub
        </a>
        and is hosted on
        <a href="https://keen-biscochitos-fbc596.netlify.app/" target="_blank">
          Netlify
        </a>
        .
      </span>
    </div>
  );
}
