/* const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

console.log(person.name);
console.log(person.age);

const user = { firstName: "alice" };
console.log(user.firstName);

const person1 = {
  name: "Alice",
  age: 25,
  isstudent: true,
};

person1.height = 176;
person1.age = 26;
console.log(person1);

for (let key in person1) {
  console.log(key + ":" + person1[key]);
}
delete person1.age;
console.log(person1);

const student = {
  name: "Bob",
  grades: {
    math: 90,
    science: 85,
    econometrics: 92,
  },
};

student.grades.econometrics = 97;
console.log(student.grades.econometrics);

// methods in objects

const person3 = {
  name: "Alice",
  age: 25,
  isStudent: true,
  greet: function () {
    console.log("Hello this is Alice");
  },

  greetTwo() {
    console.log("Hello alice");
  },
};
person3.greetTwo();
person3.greet();
 */

const car = {
  brand: "Tesla",
  speed: 120,
  info() {
    console.log(`${this.brand} is going at ${this.speed}km/h`);
  },
};
car.info();

const calculator = {
  add(a, b) {
    return a + b;
  },

  multiply(a, b) {
    return a * b;
  },
};

console.log(calculator.add(3, 4));
console.log(calculator.multiply(4, 5));

const person4 = {
  name: "Alice",
  age: 15,
};
console.log(Object.keys(person4));
console.log(Object.keys(person4).includes("age"));
console.log(Object.entries(person4));
