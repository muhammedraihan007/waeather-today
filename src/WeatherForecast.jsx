// src/WeatherForecast.js
import React from 'react';

const WeatherForecast = ({ data }) => {
  return (
    <div className="weather-forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-list">
        {data.map((forecast, index) => (
          <div key={index} className="forecast-item">
            <p>Date: {new Date(forecast.dt * 1000).toLocaleDateString()}</p>
            <p>Temperature: {Math.round(forecast.main.temp - 273.15)}°C</p>
            <p>Condition: {forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
