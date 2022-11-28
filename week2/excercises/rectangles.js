function Rectangle ( width, height) {
  this.width = width;
  this.height = height;

  this.calcPerimeter = () => {
    return (this.height + this.width) * 2;
  }
  this.calcArea = () => {
    return this.height * this.width;
  }

  this.toString = () => {
    return `The rectangle has a width of ${this.width} and a height of ${this.height}`;
  }

  this.toCLIString = () => {
    return `The rectangle has a width of ${this.width} and a height of ${this.height}.
    Perimeter: ${this.calcPerimeter()}
    Area: ${this.calcArea()}
    `;
  }
}

const rect1 = new Rectangle(3,4);
const rect2 = new Rectangle(5,6);

console.log(rect1.toCLIString());

console.log(rect2.toCLIString());