class Computer {
  constructor( brand, color ) { 
    this.brand = brand;
    this.color = color;
  }

  startUp () {
    return 'Computer is starting...'
  }
}

class Laptop extends Computer {
  #ramMem = 0;
  constructor( brand, color, touchScreen  ) { 
    super(brand, color);
    this.touchScreen = touchScreen;
    this.#ramMem = 16;
    Laptop.numberOfLaptops++;
  }

  startUp(){
    let message = super.startUp();
    message += 'It boots fast because I`m a good laptop.';
    return message;
  }

  charge(){
    return 'Laptop is charging';
  }

  #privateCharge(){
    return 'Laptop is charging suuuuperfast';
  }

  hiddenCharge(){
    return this.#privateCharge();
  }

  // set ramMem (mem) {
  //   this.#ramMem += mem;
  // }
  get ramMem () {
    return this.#ramMem;
  }

  static numberOfLaptops = 0;
}


const laptop1 = new Laptop('Acer', 'grey', true);
console.log(laptop1.startUp());
console.log(`Laptop has ${laptop1.ramMem} gigabites of RAM`);
laptop1.ramMem = 16;
console.log(`Laptop has ${laptop1.ramMem} gigabites of RAM`);
console.log(laptop1.hiddenCharge());

const laptop2 = new Laptop('Acer', 'grey', true);
console.log(Laptop.numberOfLaptops);
const computer1 = new Computer();
// console.log(computer1.charge())


