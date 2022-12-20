const key = "d57158aaa0964a898fb124116222012";
const city = "Ghent";
const app = document.querySelector('#app');
fetch(
  `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
)
  .then(response => response.json())
  .then(response => render(response))
  .catch(err => console.error(err));

render = (data) => {
  console.log(data);

  let tempString =  '';
  tempString += data.current.temp_c + ' deg C';
//   for (const key in data.current) {

//     tempString += (`${key}: ${data.current[key]} <br>`);
// }

  let cityName = data.location.name;
  app.innerHTML = tempString;

}