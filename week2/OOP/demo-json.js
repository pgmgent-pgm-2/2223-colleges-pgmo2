const jsonStr = require('./demo.json');
console.log(jsonStr)
// const obj = JSON.parse(jsonStr);
// console.log(obj);

// const objWithFunctions = {
//   start: 5,
//   toString: function(){

//   }
// }

const jsonNew = JSON.stringify(objWithFunctions);
console.log(jsonNew);