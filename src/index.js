function handleSearchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
console.log(searchFormElement);
searchFormElement.addEventListener("submit", handleSearchCity);
