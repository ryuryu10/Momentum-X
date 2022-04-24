const today_weather = document.querySelector(".location");
const my_location = document.querySelector(".today_weather");
const temperature = document.querySelector(".temperature");
const API_KEY = "4eb7b5ce7b007578b8e975d803b55f03";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            today_weather.innerText = data.name;
            my_location.innerText = data.weather[0].main;
            temperature.innerText = data.main.temp+'°';
            console.log(data.name,`${data.weather[0].main} / ${data.main.temp}`);
        });
}
function onGeoError() {
    alert("어디지??");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);