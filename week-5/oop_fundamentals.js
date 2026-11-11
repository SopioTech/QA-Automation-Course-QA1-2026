// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hi! I am ${this.name}) and I am ${this.age} years old.`;
//   }
// }

// const alice = new Person("Alice", 25);
// console.log(alice.greet());

// const bob = new Person("Bob", 27);
// console.log(bob.greet());

class Phone {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  describe() {
    console.log(`This phone is a ${this.brand} ${this.model}`);
  }
}

const iphone14 = new Phone("Apple", "iphone14");
iphone14.describe();

const samsugnGalaxy20 = new Phone("Samsung", "galaxy");
samsugnGalaxy20.describe();

class Car {
  constructor(brand, color, speed) {
    this.brand = brand;
    this.color = color;
    this.speed = speed;
  }
  accelerate(amount) {
    this.speed += amount;
    console.log(`${this.brand}) is now going at ${this.speed} km/h`);
  }

  brake(amount) {
    this.speed -= amount;
    console.log(`${this.brand} slowed down to ${this.speed} km/h`);
  }
}

const myCar = new Car("Toyota", "red", 50);
myCar.accelerate(20);
myCar.brake(30);
