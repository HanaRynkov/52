const API_KEY = 'fa1e72ff893c6a4a5ed4077327e855b4';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const locationInput = document.getElementById('locationInput');
const getWeatherButton = document.getElementById('getWeatherButton');
const weatherContainer = document.getElementById('weatherContainer');

document.addEventListener('DOMContentLoaded', () => {
    // console.log('Страница загружена');

    getWeatherButton.addEventListener('click', () => {
        const location = locationInput.value.trim();
        if (location) {
            const apiUrl = `${API_BASE_URL}?q=${location}&appid=${API_KEY}`;

            fetch(apiUrl)
                .then(response => response.json())
                // .then(data => console.log(data))
                .then(data => displayWeather(data))
                .catch(err => {
                    console.log(err);
                    weatherContainer.innerHTML = 'Failed to fetch weather data';
                });

        };
    });

    function displayWeather(weatherData) {
        // Деструктуризация в объекте
        // name = weatherData.name...
        const { name, sys, main, weather, wind, visibility } = weatherData;
        
        // Деструктуризация в массиве. 
        // const arr = [1, 2, 3];
        // const [one, two, three] = arr;

        const temperature = Math.round(main.temp - 273.15);
        const weatherMain = weather[0].main;
        const weatherDescription = weather[0].description;
        const humidity = main.humidity;
        const windSpeed = wind.speed;
        const visibilityDistance = visibility / 1000; // Дистанция в км

        const weatherCard = document.createElement('div');
        weatherCard.classList.add('weather-card');

        weatherCard.innerHTML = `
            <h2>${name}, ${sys.country}</h2>
            <p>Temperature: ${temperature}</p>
            <p>Weather: ${weatherMain}</p>
            <p>Description: ${weatherDescription}</p>
            <p>Humidity: ${humidity}</p>
            <p>Wind Speed: ${windSpeed}</p>
            <p>Visibility: ${visibilityDistance}</p>
        `;

        weatherContainer.innerHTML = '';
        locationInput.value='';
        weatherContainer.append(weatherCard);
    }
})