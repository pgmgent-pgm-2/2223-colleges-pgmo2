const names = ["James", "Mieke", "Stef", "Jannes"];
const names2 = ["Mert", "Adriaan"];

const namesExtra = ["Charlotte", ...names, "Donald", ...names2];

console.log(namesExtra);

let maxValue = Math.max(1,23,2342,432);
console.log(maxValue);

const values = [12,3123,3123,13231235,2];
maxValue = Math.max(...values);

const dateFields = [1970, 0, 1];
const date = new Date(...dateFields);
console.log(date);


const person = {
  name: "James",
  hobbies: ["Gaming", "Breathing"],
  age: 45
}

const clonedObj = { ...person };

clonedObj.age = 20;

console.log(clonedObj);
console.log(person);

// niet hetzelfde
const linkedObj = person;
linkedObj.age = 89;
console.log(linkedObj);
console.log(person);