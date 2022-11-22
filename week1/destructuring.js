const arr = ['first', 'second', 'third'];

const first = arr[0];
const second = arr[1];
const third = arr[2];

const [dfirst, dsecond, dthird] = arr;

console.log(dfirst, dsecond);

const [,, skippedThird, fourth] = arr;

console.log(fourth);

const [firstElement, ...secondAndThird] = arr;

for(const [index, element] of arr.entries()) {
  console.log(index, element);
}

// Strings are iterable
const [x,...y] = 'abc';
console.log(x, y);

const [all, year, month, day] =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');
console.log(year, month, day);

const [d="Firstname", e=d.toUpperCase()] = ["Jannes"];
console.log(d, e);