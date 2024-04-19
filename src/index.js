function updateWeather(response) {
  let temperature = response.data.temperature.current;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(temperature);

  let city = document.querySelector("#city");

  city.innerHTML = response.data.city;
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

let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", handleSearchCity);

searchLocation("Lagos");
