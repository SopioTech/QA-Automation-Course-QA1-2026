// Sting Length

let text = "tojtech";

console.log(text.length);

// Accessing Characters

let word = "Sopio";

console.log(word[2]);
console.log(word[4]);

// Changing Case

let favoritebook = "alchemist";

console.log(favoritebook.toUpperCase());
console.log(favoritebook.toLowerCase());

// Trimming Spaces

let playername = "eKvaraa";
console.log(playername.trim());

playername = " Kvara ";
console.log(playername.trim());

// Slice(start, end)

let sentance = "HelloWorld";

console.log(sentance.slice(0,5));
console.log(sentance.slice(5,10));

// Replace (searchValue, newValue)

let myFavoriteFruits = "My favorite fruit is apple";

console.log(myFavoriteFruits.replace("apple", "watermelon"));

// Includes(substring)

let sentance2 = "I'm learning coding";

console.log(sentance2.includes("learning"));
console.log(sentance2.includes("love"));

//Split (seperator)

let colours = "white,black, blue";

console.log(colours.split(","));
console.log(colours.split(""));
console.log(colours.split(" "));

let colour = "white";

console.log(colour.split(""));

// Concat (string1, string2, ...)

let str1 = "Good";
let str2 = "Bye";

console.log (str1.concat(" ", str2));

// indexof(substring)

let message = "I love JavaScript";

console.log(message.indexOf("Javascript"));
console.log(message.indexOf("love"));

// startsWith() and endsWith()

let folder = "pdf_folder";

console.log(folder.startsWith("pdf_"));
console.log(folder.endsWith("pdf_"));

// Template literals

let name1 = "Sopio";
let greeting = `Hello, ${name1}!`;

console.log (greeting);

// multi-line stings

let longSentance = `Hi, how are you?  
                    how is your femaly doing?`;

console.log(longSentance);

// Expressions Inside Template Literals

let number = 3;
let number2 =4;

console.log(`the sum of ${number} and ${number2} is ${number + number2}`);

// Combining String Methods + Template Literals

let animalName = "Bob";
let age = 3;


console.log(`Animal is ${animalName.toUpperCase()}, his age is ${age}.`);