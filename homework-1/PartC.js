/// Arithmetic Operators

let number1 = 5;
let number2 = 10;

console.log(number1 + number2); //15
console.log(number2 - number1); //5
console.log(number1 * number2); // 50
console.log(number2 / number1); // 2

//increase and decrease by 1

let number3 = 15;

number3++;
console.log(number3); //16

number3--;
console.log(number3); // 15

// remainder

let number4 = 16;
let number5 = 3;

console.log(number4 % number5); // 1

///4. Raise a number to the power of 3

let number = 10;

console.log(number ** 3); // 1000

/// 2. Comparision operators

let number10 = 10;
let stringNumber10 = "10";

console.log(number10 === stringNumber10);

// result is false as 10 is number '10' is string and canot be equal

let number12 = 12;
let number13 = 13;

console.log(number13 > number12);

let number14 = 14;
let number15 = 15;

console.log(number14 !== number15);

/// logical operators

let sisterAge = 30;
let brotherAge = 15;

console.log(sisterAge > 25 && brotherAge > 10);

//answer will be true

let sisterHeight = 175;

let brotherHeight = 170;

console.log(sisterHeight > 175 || brotherHeight < 175);

let myNameIsSopio = true;

console.log(!myNameIsSopio);

/// Truthy and falsy value

let favoritebook1 = "";

if (!favoritebook1) {
  console.log("Falsy value detected");
}

let favoritebook2 = "Alchemist";

if (favoritebook2) {
  console.log("Truthy value detected");
}

let favoritebook3 = "";

let book = favoritebook3 || "Alchemist";
console.log(book);
