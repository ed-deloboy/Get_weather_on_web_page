const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "450cfc6fe3c5e81e1717f2d1bab2ec0d",
    "lang": "ru"
}
let dateNow = new Date().toLocaleDateString();
let newSelectContainer = document.querySelector('.newselect');

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}&lang=${param.lang}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}
// вывод данных
function showWeather(data) {
    console.log(data);

    document.querySelector('.cityname').textContent = data.name;
    document.querySelector('.windweather').textContent = data.weather[0].description;
    document.querySelector('#temperaturecity').textContent = Math.round(data.main.temp);
    document.querySelector('#weatheimage').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('#windwspeed').textContent = Math.round(data.wind.speed);
    // date
    document.querySelector('#weather-hero__time').textContent = dateNow;
    var newSelect = document.createElement("select");
    newSelect.innerHTML = "<option>Привет!</option>";
    newSelectContainer.appendChild(newSelect);


}


getWeather();
document.querySelector('#city').onchange = getWeather;