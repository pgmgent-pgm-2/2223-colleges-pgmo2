/*
Constants
*/
const WEATHER_API_KEY = '725ed430cd124a0b82f165834200912';
const WEATHER_API_URL = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}`;
const DOGS_PLACES_API_URL = `https://data.stad.gent/api/records/1.0/search/?dataset=hondentoilletten-gent&q=&rows=5000&facet=soort&facet=bestaand`;

/*
Cached DOM Elements
*/
const $weather = document.querySelector('.weather');
const $dogsAntiShitTileAmount = document.querySelector('.dogs-anti-shit-tile__amount');


// Initialize the application
const init = () => {
  // Fetch Weather for City Ghent
  fetchWeatherForCityData('Ghent');
  // Fetch dogs places
  fetchDogsPlacesData();
};

// Fetch weather data for a certain city
const fetchWeatherForCityData = async (city) => {
  const URL = `${WEATHER_API_URL}&q=${city}`;
  const response = await fetch(URL, { method: 'GET', mode: 'cors' });
  const data = await response.json();
  
  $weather.innerHTML = renderHTMLForWeatherOfCity(data);
};

// Render HTML for the weather data of a certain city
const renderHTMLForWeatherOfCity = (data) => {
  return `
  <div class="current">
    <div class="current__temp">${data.current.temp_c}<span>°C</span></div>
    <picture class="current__icon">
      <img src="http://${data.current.condition.icon}">
    </picture>
    <div class="current__wind">${data.current.wind_kph} kph</div>
    <i class="current__wind-icon fa-solid fa-arrow-down" style="transform: rotate(${0 + parseInt(data.current.wind_degree)}deg)"></i>
  </div>
  `;
};

// Fetch all dogs places data from city of Ghent
const fetchDogsPlacesData = async () => {
  const URL = `${DOGS_PLACES_API_URL}`;
  const response = await fetch(URL, { method: 'GET' });
  const data = await response.json();
  
  $dogsAntiShitTileAmount.innerHTML = renderHTMLForDogsPlaces(data.records);
};

// Render HTML for the weather data of a certain city
const renderHTMLForDogsPlaces = (data) => {
  console.log(data);
  const amount = data.filter(place => place.fields.soort === 'Anti-hondenpoeptegel').length;
  return `
  <div class="antipoop__place">
    <span class="amount">${amount}</span>
  </div>
  `;
};






// Call innit() function
init();