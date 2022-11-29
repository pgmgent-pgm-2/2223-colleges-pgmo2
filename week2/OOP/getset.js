let obj = {
  firstName: 'John',
  lastName: 'Doe', 
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value){
    [this.firstName, ...this.lastName] = value.split(' ');
    this.lastName = this.lastName.toString().replace(/,/g, ' ')
  }
}

console.log(obj.fullName);
obj.fullName = 'Scott Van Boven';
console.log(obj.fullName);

let bankAccount = {
  currentState: 0,
  set setCurrentState(value){
    if(value < 0){
      throw new Error("You can't have a value below zero.")
      return;
    }
    this.currentState = value;
  }
}
try{
  bankAccount.setCurrentState = 5;
  console.log(`The state of your account is now ${bankAccount.currentState}`)
} catch (error) {
  console.log(error.toString());
}

function User (name, dayOfBirth) {
  this.name = name;
  this.dayOfBirth = dayOfBirth;
  
  Object.defineProperty(this, 'age', {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.dayOfBirth.getFullYear();
    }
  });
}

let user = new User('Philippe', new Date(2022, 12, 01));
console.log(`Your age is ${user.age}`);
