import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = 'b83c8b7ee9e421f02f99ed520f3b50a5'; 

  const fetchWeather = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch(() => {
        setWeatherData(null); 
        alert('Error fetching weather data. Please try again.'); 
      });
  };

  return (
    <div className="weather-app">
      <h1 className="title">TODAY'S WEATHER DISPLAY</h1>

      <div className="search">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="search-input"
        />
        <button onClick={fetchWeather} className="search-button">
          Get Weather
        </button>
      </div>

      {weatherData && (
        <div className="weather-info">
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <div className="weather-icon">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </div>
          <p className="temperature">Temperature: {weatherData.main.temp}°C</p>
          <p className="description">Condition: {weatherData.weather[0].description}</p>
          <p>Feels like: {weatherData.main.feels_like}°C</p>
          <p>Min temp: {weatherData.main.temp_min}°C</p>
          <p>Max temp: {weatherData.main.temp_max}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
