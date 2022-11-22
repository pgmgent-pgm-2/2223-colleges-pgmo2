let id = Symbol('unique symbol');
let id2 = Symbol('unique symbol');

console.log(id === id2);
console.log(id.description);

const cats = {};
const cat1 = Symbol('Minous');
const cat2 = Symbol('Zora');

cats[cat1] = {
  name: 'Minous',
  age: 18
};
cats[cat2] = {
  name: 'Zora',
  age: 1
};


console.log(Object.getOwnPropertySymbols(cats));