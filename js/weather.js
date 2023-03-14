const API_KEY = "7ec1c2dd14326835f5bc227fb2e13733";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;


    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pic = document.querySelector(" #wicon");
            const city = document.querySelector(" #city");
            const weather = document.querySelector(" #temp");
            let iconcode = data.weather[0].icon;
            let iconurl = "https://openweathermap.org/img/wn/" + iconcode + "@2x.png";


            city.innerText = data.name;
            weather.innerText = `${data.main.temp}℃`;
            pic.src = iconurl;
            // ${data.weather[0].description}
        });


}
function onGeoError() {
    alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);