const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weather = document.getElementById('weather');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const loading = document.getElementById('loading');
const weatherInfo = document.querySelector('.weather-info');

const clearBtn = document.getElementById('clearBtn');

// Event listener for clicking the clear button
clearBtn.addEventListener('click', () => {
    clearWeatherDisplay();
});

// Event listener for clicking the Search button
searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    }
    clearWeatherDisplay();
});

// Event listener for pressing Enter key in the city input field
cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Check if the Enter key was pressed
        const city = cityInput.value;
        if (city) {
            fetchWeather(city);
        }
    }
});

async function fetchWeather(city) {
    const url = `https://wttr.in/${city}?format=j1`;

    try {
        loading.style.display = 'block';
        const response = await fetch(url);
    
        if (!response.ok) {
            // If the city is not found, the API might not return 200 OK status
            throw new Error('City not found');
        }

        const data = await response.json();
        
        // Check if the data has valid weather information
        if (!data.current_condition || data.current_condition.length === 0) {
            throw new Error('City not found');
        }

        displayWeather(data);
        loading.style.display = 'none';
    } catch (error) {
        // Check if the error is a "City not found" error
        if (error.message === 'City not found') {
            loading.innerHTML = `${city} <br> City not found. Please try a different city.`;
            cityInput.value = '';
        } else {
            loading.innerHTML = 'Something went wrong, try again later';
        }
        console.log(error.message);
    }
}


function displayWeather(data) {
    const currentCondition = data.current_condition[0];
    cityName.textContent = `${data.nearest_area[0].areaName[0].value} - ${data.nearest_area[0].country[0].value}`;
    temperature.textContent = `Temperature: ${currentCondition.temp_C}°C`; //alt+0176 and release alt = °
    weather.textContent = `Weather: ${currentCondition.weatherDesc[0].value}`;
    humidity.textContent = `Humidity: ${currentCondition.humidity}%`;
    wind.textContent = `Wind Speed: ${currentCondition.windspeedKmph}km/h`;
    weatherInfo.style.display = 'block';
    clearBtn.style.display = 'block';
    cityInput.value = '';
}

function clearWeatherDisplay() {
    cityName.textContent = '';
    temperature.textContent = '';
    weather.textContent = '';
    humidity.textContent = '';
    wind.textContent = '';
    weatherInfo.style.display = 'none'; // Hide the weather info section
    clearBtn.style.display = 'none';
}