function Car ({ color, brand, electric = false }) {
  this.color = color;
  this.brand = brand;
  this.electric = electric;

  this.drive = function () {
    if(electric) return 'bzzzzzzzzzzz';
    return 'vroemvroem';
  }
}

const car1 = new Car({color: 'red', brand:'BWM', electric: true});
const car2 = new Car({color: 'grey', brand:'Volvo'});

console.log(car1.drive());
console.log(car2.drive());


