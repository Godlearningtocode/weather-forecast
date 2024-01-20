const placeInput = document.querySelector('#placeInput');
const searchButton = document.querySelector('#searchButton');
const result = document.querySelector('#result');
const city = document.querySelector('.place');
const country = document.querySelector('.country');
const temperatureC = document.querySelector('.temperatureC');
const temperatureF = document.querySelector('.temperatureF');
const lastUpdated = document.querySelector('.lastUpdated');
const weather = document.querySelector('.weather');

let london = 'https://api.weatherapi.com/v1/current.json?key=3e35ba5437334148ad0101139241501&q=london';

async function getWeather() {
    try {
        let place = 'https://api.weatherapi.com/v1/current.json?key=3e35ba5437334148ad0101139241501&q=' + placeInput.value;
        let response = await fetch(place, {mode: 'cors'});
        let responseData = await response.json();
        let placeDetails = {
            name: responseData.location.name,
            country: responseData.location.country,
            lastUpdated: responseData.current.last_updated,
            temperatureC: responseData.current.temp_c,
            temperatureF: responseData.current.temp_f,
            weather: responseData.current.condition.text
        }
        city.textContent = 'City: ' + placeDetails.name;
        country.textContent = 'Country: ' + placeDetails.country;
        temperatureC.textContent = 'Temperature in C: ' + placeDetails.temperatureC;
        temperatureF.textContent = 'Temperature in F: ' + placeDetails.temperatureF;
        lastUpdated.textContent = 'Last updated: ' + placeDetails.lastUpdated;
        weather.textContent = 'weather: ' + placeDetails.weather;
        console.log(placeDetails);
    } catch (error) {
        alert(error);
    }
}

searchButton.addEventListener('click', () => {
    getWeather();
})