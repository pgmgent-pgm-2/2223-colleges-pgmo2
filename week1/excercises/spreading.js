function add(...arguments) {
  console.log(arguments)
  console.log(arguments.length)
}

addOnlyNumbers = (...arguments) => {
  let sum = arguments.reduce((prevValue, currValue) => {
    return (typeof(prevValue) == "number" ? prevValue : 0) + (typeof(currValue) == "number" ? currValue : 0);
  })
  return `Er waren ${arguments.length} argumenten, de som van de getallen is ${sum}`;
}



addOnlyNumbers2 = (...arguments) => {
  let sum = 0;
  for (let index = 0; index < arguments.length; index++) {
   if(!isNaN(arguments[index])){
    sum += arguments[index];
   }
    
  }
  return `Er waren ${arguments.length} argumenten, de som van de getallen is ${sum}`;
}




console.log(addOnlyNumbers2("sadas", 34,23, "dfdsfsd"));


combineTwoArrays = (array1, array2) => {
  return [...array1, ...array2];
}

console.log(combineTwoArrays([1,2,3], [4,5,6]));

onlyUniques = (...param) =>
{
  const set = new Set(...param);
  return Array.from(set);
}

console.log(onlyUniques(["a", "b", "b", 1,1,2,3,4,,5,5,5,6]))


combineAllArrays = (...arrays) => {
  // let arrayTotal = [];
  // for (const array of arrays) {
  //   arrayTotal.push(...array)
  // }
  // return arrayTotal;
  return arrays.flat(1);
}

console.log(combineAllArrays([1,2,3], [1,2,3],[1,2,3],[1,2,3],[1,2,3]))





// addOnlyNumbers = (...arguments) => {
//   return arguments.reduce((prev, curr) => {
//     return prev + (typeof(curr) == "number" ? curr : 0)
//   }
//   )
// }

// console.log(addOnlyNumbers("dsfs",45,5,"fgdg", 4))