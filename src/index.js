function handleSearchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#city");

  city.innerHTML = searchInput.value;
}

function searchLocation(city) {
  let apiKey = "60o969fa37bedcb0t842da02274e8c33";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  console.log(apiUrl);
}

let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", handleSearchCity);
