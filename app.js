const APIKEY = '28ebbde1fa97fd73973ad0cd5de09c7d';

const apiCall = function (city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=${APIKEY}&units=metric`;

    fetch(url).then((response) => 
    response.json().then((data) => {
        console.log(data);
        const city = document.querySelector('#city');
        const temp = document.querySelector('#temp');
        const humidity = document.querySelector('#humidity');
        const wind = document.querySelector('#wind');

        city.innerHTML = '<i class="fa-solid fa-city"></i>' + data.name;
        temp.innerHTML = '<i class="fa-solid fa-temperature-three-quarters"></i>' + data.main.temp + '°C';
        humidity.innerHTML = '<i class="fa-solid fa-droplet"></i>' + data.main.humidity + ' %';
        wind.innerHTML = '<i class="fa-solid fa-wind"></i>' + data.wind.speed + ' Km/h';
    }));
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apiCall(ville);
})

apiCall('Montpellier');
