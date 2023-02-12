let bannerText = document.getElementById("bannerStoormy");
let bannerSun = document.getElementById("bannerSun");
const apiKey = '083031722d58a80991953887126d78bb';
const dateNow = new Date();
if(dateNow.getHours() > 20 || dateNow.getHours() < 6){
    document.getElementById("bannerSun").src = "image/moon.png";
}
const form = document.querySelector('#searchForm');
const urlRzeszow = `https://api.openweathermap.org/data/2.5/weather?q=Rzeszów&appid=${apiKey}&units=metric`;
const urlChicago = `https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=${apiKey}&units=metric`;
const urlBarcelona = `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=${apiKey}&units=metric`;
let tempMetric;
celciusValue();
function celciusValue(){
    tempMetric = 'C';
    fetch(urlRzeszow)
        .then(response => response.json())
        .then(data => {
            const {main, name, wind, sys, weather} = data
            document.getElementById("rzeszowTemp").innerText = main.temp.toFixed(0) + '°C';
            document.getElementById("rzeszowPressure").innerText = main.pressure.toFixed(0) + ' hPa';
            document.getElementById("rzeszowWind").innerText = wind.speed.toFixed(0) + ' Km/h';
            document.getElementById("rzeszowMaxTemp").innerText = main.temp_max.toFixed(0) + '°C';
            document.getElementById("rzeszowMinTemp").innerText = main.temp_min.toFixed(0) + '°C';
            document.getElementById("rzeszowWeatherImage").src = `image/${weather[0].icon}.png`;
        })
    fetch(urlChicago)
        .then(response => response.json())
        .then(data => {
            const {main, name, wind, sys, weather} = data
            document.getElementById("chicagoTemp").innerText = main.temp.toFixed(0) + '°C';
            document.getElementById("chicagoPressure").innerText = main.pressure.toFixed(0) + ' hPa';
            document.getElementById("chicagoWind").innerText = wind.speed.toFixed(0) + ' Km/h';
            document.getElementById("chicagoMaxTemp").innerText = main.temp_max.toFixed(0) + '°C';
            document.getElementById("chicagoMinTemp").innerText = main.temp_min.toFixed(0) + '°C';
            document.getElementById("chicagoWeatherImage").src = `image/${weather[0].icon}.png`;
        })
    fetch(urlBarcelona)
        .then(response => response.json())
        .then(data => {
            const {main, name, wind, sys, weather} = data
            document.getElementById("barcelonaTemp").innerText = main.temp.toFixed(0) + '°C';
            document.getElementById("barcelonaPressure").innerText = main.pressure.toFixed(0) + ' hPa';
            document.getElementById("barcelonaWind").innerText = wind.speed.toFixed(0) + ' Km/h';
            document.getElementById("barcelonaMaxTemp").innerText = main.temp_max.toFixed(0) + '°C';
            document.getElementById("barcelonaMinTemp").innerText = main.temp_min.toFixed(0) + '°C';
            document.getElementById("barcelonaWeatherImage").src = `image/${weather[0].icon}.png`;
    })
}
const farenheitButton = document.getElementById("farenheitButton");
const celciusButton = document.getElementById("celciusButton");
farenheitButton.addEventListener('click',function(){
    if(tempMetric == 'C'){
        farenheitButton.style.backgroundColor = '#545E76';
        celciusButton.style.backgroundColor = '#7E8CAF';
        tempMetric = 'F';
        fetch(urlRzeszow)
            .then(response => response.json())
            .then(data => {
                const {main, name, wind, sys, weather} = data
                document.getElementById("rzeszowTemp").innerText = ((main.temp * 1.8) + 32).toFixed(0) + 'F';
                document.getElementById("rzeszowMaxTemp").innerText = ((main.temp_max * 1.8) + 32).toFixed(0) + 'F';
                document.getElementById("rzeszowMinTemp").innerText = ((main.temp_min * 1.8) + 32).toFixed(0) + 'F';
        })
        fetch(urlChicago)
            .then(response => response.json())
            .then(data => {
                const {main, name, wind, sys, weather} = data
                document.getElementById("chicagoTemp").innerText = ((main.temp * 1.8) + 32).toFixed(0) + 'F';
                document.getElementById("chicagoMaxTemp").innerText = ((main.temp_max * 1.8) + 32).toFixed(0) + 'F';
                document.getElementById("chicagoMinTemp").innerText = ((main.temp_min * 1.8) + 32).toFixed(0) + 'F';
        })
        fetch(urlBarcelona)
            .then(response => response.json())
            .then(data => {
                const {main, name, wind, sys, weather} = data
                document.getElementById("barcelonaTemp").innerText = ((main.temp * 1.8) + 32).toFixed(0) + 'F';
                document.getElementById("barcelonaMaxTemp").innerText = ((main.temp_max * 1.8) + 32).toFixed(0) + 'F';
                document.getElementById("barcelonaMinTemp").innerText = ((main.temp_min * 1.8) + 32).toFixed(0) + 'F';
        })
    }
});

celciusButton.addEventListener('click',function(){
    if(tempMetric == 'F'){
        farenheitButton.style.backgroundColor = '#7E8CAF';
        celciusButton.style.backgroundColor = '#545E76';
        tempMetric = 'C';
        fetch(urlRzeszow)
            .then(response => response.json())
            .then(data => {
                const {main, name, wind, sys, weather} = data
                document.getElementById("rzeszowTemp").innerText = main.temp.toFixed(0) + '°C';
                document.getElementById("rzeszowMaxTemp").innerText = main.temp_max.toFixed(0) + '°C';
                document.getElementById("rzeszowMinTemp").innerText = main.temp_min.toFixed(0) + '°C';
        })
        fetch(urlChicago)
            .then(response => response.json())
            .then(data => {
                const {main, name, wind, sys, weather} = data
                document.getElementById("chicagoTemp").innerText = main.temp.toFixed(0) + '°C';
                document.getElementById("chicagoMaxTemp").innerText = main.temp_max.toFixed(0) + '°C';
                document.getElementById("chicagoMinTemp").innerText = main.temp_min.toFixed(0) + '°C';
        })
        fetch(urlBarcelona)
            .then(response => response.json())
            .then(data => {
                const {main, name, wind, sys, weather} = data
                document.getElementById("barcelonaTemp").innerText = main.temp.toFixed(0) + '°C';
                document.getElementById("barcelonaMaxTemp").innerText = main.temp_max.toFixed(0) + '°C';
                document.getElementById("barcelonaMinTemp").innerText = main.temp_min.toFixed(0) + '°C';
        })
    }
});
let addNewLocationButton = document.getElementById("addNewLocationButton");
addNewLocationButton.addEventListener('click',function(){
    const city = document.getElementById("searchForm").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            if(data.cod == '404'){
                alert('Wrong City')
            }else{
                const {main, name, wind, sys, weather} = data
                const markup = `<div class="bg-[#5B6E9E] rounded-lg mt-5 mb-5 shadow-lg mx-2">
                    <img src="image/${weather[0].icon}.png" class="px-3 pt-3">
                    <p class="text-center text-4xl font-geek text-white">${city}</p>
                    <p class="text-center text-6xl font-geek mb-4 text-white">${main.temp.toFixed(0)}°C</p>
                    </div>`
                let addPlace = document.getElementById('firstValue')
                addPlace.innerHTML += markup;
            }
        })
});
