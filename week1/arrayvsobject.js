const names = ["James", "Mieke", "Stef", "Jannes"];
console.log(names.map(name => {
  return name.toUpperCase();
}));

console.log("foreach");
names.forEach(name => {
  console.log(name)
});


console.log("For ... of");
for (const name of names) {
  console.log(name)
}


console.log("For ... in");
for (const key in names) {
  if (Object.hasOwnProperty.call(names, key)) {
    const element = names[key];
    console.log(element)
  }
}


const personArray = ["James", ["Gaming", "Breathing"], 45];
const person = {
  name: "James",
  hobbies: ["Gaming", "Breathing"],
  age: 45
}

// error
// person.forEach(element => {
//   console.log(element)
// });

for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    const element = person[key];
    console.log(element);
  }
}

// for (const property of person) {
//   console.log(property);
// }