const API_KEY = "57b4879f7abbdbbf941c59866c71e06e"


function onGeoOk(position) {
    console.log(position);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}
function onGeoError() {
    alert("Can't find you. No weather for you");
}




navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 해당 function의 첫번째 argument 일반적인 함수 실행이고 두번째는 에러가 나면 실행되는 함수다.