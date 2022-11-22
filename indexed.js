const emptyArray = [];
emptyArray.length = 99;

console.log(emptyArray.length);

for (let index = 0; index <= emptyArray.length; index++) {
  console.log(emptyArray[index]);
}

// methode 1
const personDendermonde = ["Donald Muyle", "Willy Naessens"];

personDendermonde[0] =  "Donald Muyle";
personDendermonde[2] = "Willy Naessens";

// personDendermonde = 6;



personDendermonde[8.6] = "Ixina";

console.log(personDendermonde.length);

console.log(personDendermonde.hasOwnProperty(8.6));

personDendermonde.push("Ixina");
personDendermonde.unshift("Mac Donalds");

console.log(personDendermonde);

console.log(personDendermonde.shift());

console.log(personDendermonde);

console.log(personDendermonde.pop());

console.log(personDendermonde);

personDendermonde.splice(1,1, "fsfsdf", "fdssfsdf");

console.log(personDendermonde);

const concatArray = personDendermonde.concat([1,2,2,3], ['1', '3'])

console.log(concatArray);

const concatArray2 = [...personDendermonde, ...[1,2,2,3], ...['1', '3']];
console.log(concatArray2);

for (const [index, element] of personDendermonde.entries()) {
  const currentPerson = element;
  console.log(index+1, currentPerson);
}

personDendermonde.forEach(function(currentPerson) {
  console.log(currentPerson);
})

personDendermonde.forEach((currentPerson) => {
  console.log(currentPerson);
})

console.log("For in'")


for (const key in personDendermonde) {
  if (Object.hasOwnProperty.call(personDendermonde, key)) {
    console.log(personDendermonde[key]);
    
  }

}

const a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = '[' + i + ', ' + j + ']';
  }
}

console.log(a);

const cars = [
  ['Volvo', 22, 18],
  ['BMW', 15, 13],
  ['Saab', 5, 2],
  ['Land Rover', 17, 15],
];

const cars2 = [
  {
    type: 'Volvo',
    stock: 22,
    sold: 18
  }
]

cars2.forEach(function(car) {
  console.log(`${car[0]}: ${car[1]} in stock and ${car[2]} sold.`)
});

console.log(emptyArray.join());

const numbers = [12,33];

const numberSq = numbers.map((num, index) => {
  return num * num;
})

console.log(numberSq);


const charArr = Array.from('Mieke');
console.log(charArr);

const set = new Set([1,2,2,3,1]);
const arrSet = Array.from(set);

console.log(arrSet);

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 3
};

let arr = Array.from(arrayLike);
console.log(arr); // ["Hello","World",undefined]

const chairs = ["chair1", "chair2", "chair3"];

const itr = chairs.entries();
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
function isBelow(element){
  return element > 600;
}

console.log(numbers.some(isBelow));

console.log(numbers.some((element) => element , 99));
arr = [0,0,0,0];
console.log(arr.fill(5)); // [5,5,5,5]
arr = [1, 2, 3, 4];
console.log(arr.fill(5, 3)); // [1,2,3,5]
arr = [1, 2, 3, 4];
console.log(arr.fill(5, 1, 2)); // [1,5,3,4]
arr = Array(3).fill(4);
console.log(arr); // [4,4,4]
arr = Array(100).fill({});
arr[0].hi = "greetings";
arr[1].hi = "greets";
console.log(arr);


arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr = arr.flat(4);

console.log(arr);

arr = ["it's Sunny in", "", "California"];
arr = arr.map(e => e.split(' '));
console.log(arr); // [["it's", "Sunny", "in"], [""], ["California"]]
arr = arr.flat(1);
console.log(arr); // ["it's", "Sunny", "in", "", "California"]

arr = ["it's Sunny in", "", "California"];
arr.flatMap(e => e.split(' '));
console.log(arr);

const users = [
  { userId: 1, username: 'Tom', tags: ['Nice', 'Cute'] },
  { userId: 2, username: 'Mike', tags: ['Lovely', 'Cute'] },
];
const tags = users.flatMap(x => x.tags);
// stap 1: [['Nice', 'Cute'], ['Lovely, Cute']]
console.log(tags); // ["Nice", "Cute", "Lovely, Cute"]

console.log([...new Set(tags)]);

const costs = [1,3,44,56];
const totalCosts = costs.reduce((prev,curr,index, currArray) => { 
  //console.log(index);
  console.log(currArray[index]);
  return prev + curr *1.21;
 }, 200);

console.log(totalCosts)

