(async function app () {
const WEATHER_API_KEY = '725ed430cd124a0b82f165834200912';
const WEATHER_API_URL = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}`;
const DOGS_PLACES_API_URL = `https://data.stad.gent/api/records/1.0/search/?dataset=hondentoilletten-gent&q=&rows=5000&facet=soort&facet=bestaand`;

const $weather = document.querySelector('.weather');
const $dogsAntiShitTileAmount = document.querySelector('.dogs-anti-shit-tile__amount');

// Fetch weather data for a certain city
  const URL = `${WEATHER_API_URL}&q='Ghent'`;
  const response = await fetch(URL, { method: 'GET', mode: 'cors' });
  const data = await response.json();
  
  $weather.innerHTML =  `
  <div class="current">
    <div class="current__temp">${data.current.temp_c}<span>°C</span></div>
    <picture class="current__icon">
      <img src="http://${data.current.condition.icon}">
    </picture>
    <div class="current__wind">${data.current.wind_kph} kph</div>
    <i class="current__wind-icon fa-solid fa-arrow-down" style="transform: rotate(${0 + parseInt(data.current.wind_degree)}deg)"></i>
  </div>
  `;


// Fetch all dogs places data from city of Ghent
  const URL_DOG = `${DOGS_PLACES_API_URL}`;
  const responseDog = await fetch(URL_DOG, { method: 'GET' });
  const dataDog = await responseDog.json();
  const amount = dataDog.records.filter(place => place.fields.soort === 'Anti-hondenpoeptegel').length;
  $dogsAntiShitTileAmount.innerHTML = `
  <div class="antipoop__place">
    <span class="amount">${amount}</span>
  </div>
  `;







})();