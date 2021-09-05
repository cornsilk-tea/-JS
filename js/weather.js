// const API_KEY = "22f63f43649f877985cbfd6714b3b6dc";

// function onGeoOK(position){
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     console.log("You live in", lat, lon);
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//     fetch(url).then(response => response.json()).then(data=> {
//         const weather = document.querySelector("#weather span:first-child");
//         const city = document.querySelector("#weather span:last-child");
//         city.innerText = data.name;
//         weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
//     });

// }

// function onGeoError(){
//     alert("Can't find you");
// }


// navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "bed1a4d8820ac8776efce5eb56dd1256";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
