function Laptop (name, resolution, storage, processor ){
  this.name = name;
  this.resolution = resolution; 
  this.storage = storage; 
  this.processor = processor;

  this.toString = function() {
    return this.name;
  }
  this.toCLIString = () => {
    return `
name: ${this.name} 
resolution: ${this.resolution}
storage: ${this.storage}
processor: ${this.processor}   
    `
  }
}

const laptop1 = new Laptop('Mac', '1980x1920', '256', 'm1');
const laptop2 = new Laptop('Dell', '1980x1920', '512', 'i7');

console.log(laptop1.toCLIString());
console.log(laptop2.toCLIString());
