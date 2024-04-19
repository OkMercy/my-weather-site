function updateWeather(response) {
  let temperature = response.data.temperature.current;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(temperature);

  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;

  let description = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;

  let wind = document.querySelector("#wind");
  wind.innerHTML = `${response.data.wind.speed}km/h`;

  let currentTime = document.querySelector("#currentTime");
  let date = new Date(response.data.time * 1000);
  currentTime.innerHTML = formatDate(date);

  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}"
                    class="weather-icon"></img>`;

  getForecast(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function searchLocation(city) {
  let apiKey = "60o969fa37bedcb0t842da02274e8c33";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchLocation(searchInput.value);
}

function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[date.getDay()];
}

function getForecast(city) {
  let apiKey = "60o969fa37bedcb0t842da02274e8c33";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {

  let forecastHTML = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `<div class="weather-forecast">
                <div class="row">
                    <div class="col-2">
                        <div class="forecast-date">
                            ${formatDay(day.time)}
                        </div><br>
                        <img src="${day.condition.icon_url}" width="60"/>
                    </div>
                    <div class="forecast-temperature">
                        <span class="forecast-weather-max">
                           ${Math.round(day.temperature.maximum)}° 
                        </span>

                        <span class="forecast-weather-min">
                             ${Math.round(day.temperature.minimum)}°
                        </span>
                    </div>
                     
                </div>
            </div>`;
    }
  });
  let forecast = document.querySelector("#forecast");
  forecast.innerHTML = forecastHTML;
}
let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", handleSearchCity);

searchLocation("Lagos");


