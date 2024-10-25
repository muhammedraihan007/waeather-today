const CurrentWeather = ({ data }) => {
    return (
      <div className="current-weather">
        <h2>Weather in {data.name}</h2>
        <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
        <p>Condition: {data.weather[0].description}</p>
        <p>Humidity: {data.main.humidity}%</p>
      </div>
    );
  };
  
  export default CurrentWeather;
  