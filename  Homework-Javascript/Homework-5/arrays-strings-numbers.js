//Task 1

let carbrands = [ "bmw", "toyota", "cadillac", "subaru", "mercedes"];

let numbers = [10,1,9,30,2];
let car =(" bmw ");
let number1 = 15.1;

console.log(carbrands [0]); // printing first brand from array
console.log(carbrands [4]);// printing last brand from array
console.log(carbrands.length); // priting total number of items in array using length method 

//Task 2

carbrands[1] ="jeep";
console.log (carbrands);
carbrands [4] ="toyota";
console.log (carbrands);

// Task 3 Mutator Methods

carbrands.push("audi");
console.log("push():", carbrands);

carbrands.pop();
console.log("pop()", carbrands);

carbrands.unshift("audi");
console.log("unshift", carbrands);

carbrands.reverse();
console.log("reverse:", carbrands);

carbrands.sort();
console.log("sort:", carbrands);
console.log(carbrands);

//task 4 - 
console.log(carbrands.includes("toyota"));
console.log(carbrands.lastIndexOf ("bmw"));

const carbrands1 = ["bmw", "toyota", "bmw"];
console.log(carbrands1.lastIndexOf("bmw"));

// task 5 -joiners
const carbrandsString = carbrands.join(", ");
console.log (carbrandsString);


let word = "Engine";
console.log ("Array.from():", Array.from (word));

console.log(word.split(""));

// Task 6 - clean string

let string = " hello ";
console.log(string.trim()); 

console.log(string.length);

// task 7 - case & access

console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string[1]);
console.log(string[5]);


//task 8 : Slice & replace

let sentance = "hello world";
console.log(sentance.replace( "hello", "bye"));
console.log(sentance.split (" ") [0]);
console.log(sentance.split(" ") [1]);

// search methods

let carbrands2 = "I love all car brands";
console.log(carbrands2.includes ("car"));
console.log(carbrands2.indexOf ("car"));
console.log(carbrands2.startsWith("I"));
console.log(carbrands2.endsWith("brands"));

//task 10 : Split & Concat

console.log(carbrands2.split(" "));

let first = "hello";
let second = "world";

console.log(first.concat(" ", second));

//11 tasks - Template Literals

let carbrand3 = "Vovlo";
let caryear = 1999;
let carage= (2026 -caryear);


console.log(`My car is a ${carbrand3}. It was made in ${caryear} and it is ${carage} years old.`);

//task 12 : Rounding

let decimal = 5.4;
console.log(Math.round(5.6));
console.log(Math.floor(5.6));
console.log(Math.ceil(5.4));
console.log(Math.trunc(5.5));

// task 13 formatting

let number = 14.444412;
let formattedNumber = number.toFixed(2);

console.log(formattedNumber);

// Task 14- Conversions

let numericstring = "55";
console.log(Number(numericstring));

//task 15 -checking

let  value = "hello";

console.log(isNaN(value));

let num = 30;

console.log(Number.isInteger(num)); 

//task 16- math utilities

console.log(Math.abs(-10));
console.log(Math.max (3,4,12));
console.log(Math.min(5,1,23,3));
console.log(Math.pow(2,3));
console.log(Math.sqrt(25));

// task 17


console.log(Math.random(0,1));
console.log(Math.floor(Math.random () * 10) + 1);
























