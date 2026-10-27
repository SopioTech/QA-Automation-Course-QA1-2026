class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi! I am ${this.name}) and I am ${this.age} years old.`;
  }
}

const alice = new Person("Alice", 25);
console.log(alice.greet());

const bob = new Person("Bob", 27);
console.log(bob.greet());
