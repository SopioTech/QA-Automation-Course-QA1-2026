///1️. Identify the Data Type

// "Hello World" - Sting
// 42 - number
// true - Booleon
//null
//undefined
//[1, 2, 3] - array
//{ name: "Alex", age: 20 } - object

/// 2.

let favoriteMovie = "Braveheart";
let myAge = 39;
let likeJavaScript = true;
let myValue;

///Primitive vs Non-Primitive

let a = "JS"; // Primitive
let b = [10, 20]; // Non-primitive
let c = 100; // Primitive
let d = { city: "Paris" }; // Non-primitive
// Objects and arrays are non-primitave because they can store multiple values.

///4 Array

let myChildren = ["jaba", "nino", "elene"];
console.log(myChildren);

let animals = ["bear", "wolf", "lion"];
console.log(animals);

let myFriendsbirthYears = ["1987", "1988", "1996"];
console.log(myFriendsbirthYears);

/// 5 Object

let book = {
  title: "TheAlchemist",
  author: "Paulo Coelho",
  year: 1988,
  genre: "Fiction",
  themes: ["dreams", "destiny", "adenture"],
};

console.log(book);
console.log(book.author);
console.log(book.title);

let homeAddress = {
  street: "Bay 38",
  houseNumber: 288,
  city: "brooklyn",
  state: "New York",
  zipCode: "11214",
  rooms: ["Kitchen", "Bedroom", "Living Room", "Balcony"],
};

console.log(homeAddress);
console.log(homeAddress.street);
console.log(homeAddress.city);

let child = {
  name: "ele",
  age: 10,
  school: "Elemenatary school",
  grade: 5,
  favoriteSubjects: ["Math", "English"],
  hobbies: ["Dancing", "Drawing", "Swimming"],
};

console.log(child);
console.log(child.name);
console.log(child.age);
