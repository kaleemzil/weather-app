async function getWeather() {
  const cityInput = document.getElementById('city-input').value;
  const apiKey = '1e293232dd6c599bc4780de8892b9f66'; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat} & lon={lon} &q=${cityInput}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    const weatherResults = document.getElementById('weather-results');
    weatherResults.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <div>Temperature: ${data.main.temp}°C</div>
      <div>Weather: ${data.weather[0].description}</div>
      <div>Humidity: ${data.main.humidity}%</div>
      <div>Wind Speed: ${data.wind.speed} m/s</div>
    `;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
