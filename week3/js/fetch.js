// const countriesPromise = fetch('https://restcountries.com/v3.1/all')
// .then((response) => {
//   return response.json();
// })
// .then( (data) => {
//   console.log(data);
// });


const getData = async () => {
const countriesPromise2 = await fetch('https://restcountries.com/v3.1/name/peru', {
  method: "GET",
});
const data = await countriesPromise2.json();
console.log(data)
};

getData();

fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
  method: 'GET',
})
.then(response => response.json()) 
.then(json => console.log(json))
.catch(err => console.log(err));
