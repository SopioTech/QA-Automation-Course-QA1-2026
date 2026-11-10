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

const iphone14 = new Phone("Apple", "Iphone 14");

const iphone15 = new Phone("Samsung", "galaxy");
