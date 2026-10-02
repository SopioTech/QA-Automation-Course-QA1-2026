let carbrands = ["Volvo", "Bmw", "toyota", "audi"];
let numbers = [5,6, 10, 20,25];
let sentence = "I love cars";
let num = 5.5;

//task 1 clean and format text

function cleantext(sentance) {
     let cleaned = sentence.trim().toLowerCase();
    return cleaned;
}

console.log(cleantext( " I LOve Cars"));

// task 2 - first and last character



//task 3 - word counter

function wordCounter (sentence) {
    let sentence3 = sentence.split(" ");
    return sentence3.length;

}
console.log(wordCounter("Hello world")); 

// task 4 - brand checker



