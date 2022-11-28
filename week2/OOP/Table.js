function Table ({numberOfLegs, color, price = null}) {
  this.numberOfLegs = numberOfLegs;
  this.color = color;
  this.price = price;
  this.chairs = [];
  this.changeColor = function (color) {
    const prevColor = this.color;
    this.color = color;
    return `The color was ${prevColor} and is now ${color}`;
  }
  this.addChair = function (chair) {
    // add chair to array
    this.chairs.push(chair);
  }
  this.toString = function () {
    return `
Object Table
Color: ${this.color}
Number Of Legs: ${this.numberOfLegs}
Price: ${this.price}
    `
  }

  this.toCLIString = function () {
    return `
-----------------
${this.toString()}
-----------------
Chairs
-----------------
${this.chairs.map( (chair) => chair.toString()).join(`\n`)}
    `
  }
}

function Chair ({color}) {
  this.color = color;
  this.toString = function () {
    return `
Object Chair
Color: ${this.color}
    `
  }
}

console.log(Table);

const table1 = new Table({ numberOfLegs: 4, color: 'brown' });
table1.addChair(new Chair({color: 'red'}));
table1.addChair(new Chair({color: 'blue'}));
console.log(table1.toCLIString());
// console.log(table1.changeColor('red'));

// table1.numberOfLegs = 5;

// // const table2 = new Table( 3, 'red' );
// // const tableEmpty = new Table();
// console.log(table1);
// console.log(table2);

// console.log(tableEmpty);

// object literal als voorbeeld
// const table3 = {
//   numberOfLegs: 4, 
//   color: 'brown'
// }
