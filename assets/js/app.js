let weatherForm = document.querySelector(".weather__form");
let inputCity = document.querySelector(".weather__city");
let apiDataContainer = document.querySelector(".weather__data");

let apiUrl =
  "https://api.weatherapi.com/v1/current.json?key=8da6b9c86b1c4721bcf131252230104&aqi=yes&q=";

weatherForm.addEventListener("submit", (event) => {
  let city = inputCity.value;
  let fullApiUrl = apiUrl + city;

  fetch(fullApiUrl)
    .then((response) => response.json())
    .then((dataFromApi) => {
      // console.log(dataFromApi.current.temp_c);
      let view = ``;
      // view += `In ${dataFromApi.location.name} today is ${dataFromApi.current.temp_c} degrees Celcius.`;

      view += `<div class="weather__info">`;
      //icon
      view += `<div class="weather__icon"><img src="${dataFromApi.current.condition.icon}" alt="${dataFromApi.current.condition.text}"></div>`;

      view += `</div>`;

      apiDataContainer.innerHTML = view;
    });

  event.preventDefault();
});
