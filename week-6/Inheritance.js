class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`${this.name} is sleeping ... `);
  }

  eat() {
    console.log(`${this.name} is eating now!`);
  }

  introduce() {
    console.log(
      `The animal's name is ${this.name} and it's ${this.age} years old`,
    );
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); //call parent class consturctor
    this.breed = breed;
  }

  bark() {
    console.log("woof!");
  }
}

const dog = new Dog("Boogie", 1, "Shihpoo");
dog.sleep(); // Boggie is sleeping
dog.eat(); // boogie is eating now;
dog.introduce(); // Animal's name is boogie and he is 1 year old;
dog.bark();

const animal = new Animal("frog", 10, "voice");
animal.sleep();
animal.eat();
