//task 1 - print all elements

let vegetables = ["potato", "tomato", "lettuce"];
for (let i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}

// //task 2 index + value

let vegetables2 = ["potato", "tomato", "lettuce"];
for (let i = 0; i < vegetables2.length; i++) {
  console.log(i, vegetables2[i]);
}

// // task 3 First and Last
let vegetables3 = ["potato", "tomato", "lettuce"];
for (let i = 0; i < vegetables.length; i++) {
  if (i === 0 || i === vegetables.length - 1) {
    console.log(i, vegetables[i]);
  }
}

// printaAllelements(vegetables3);

// //task 4 Loop Through a string

let word = "Sopio";
let i = 0;
while (i < word.length) {
  console.log("Character:", word[i]);
  i++;
}

// //Task 5 = stop when found

// let cars = ["bmw", "audi", "cadillac"];
// for (let i = 0; i <= 2; i++) {
//   console.log(cars[i]);
// }

// //task 6: Print values

let fruits = ["apple", " pear", "grape", "berry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

if (fruits === "grape") {
  Break;
}

console.log(fruits[i]);

let carModels = ["Cadillac", " Toyota", "BMW"];

for (let i = 0; i < carModels.length; i++) {
  if (carModels === "Toyota") {
    Continue;
  }
  console.log(carModels[i]);
}

// task 8

function upperCaseWithFor(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase());
  }
  return result;
}

function UppercaseWithForof(arr) {
  let result = [];
  for (let value of arr) {
    result.push(value.toUpperCase());
  }
  return result;
}
