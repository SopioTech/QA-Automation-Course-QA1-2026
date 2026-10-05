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

function brandChecker (carBrands, brandName) {
   if(carbrands.includes(brandName.toLowerCase())) { 
       return " Brand exists";
   } else { 
    return "Brand not found";}
   }

   
   let carBrands = ["bmw", "volvo", "toyota"];
   console.log(brandChecker(carBrands, "bmw"));

    
  //task 5 Get last brand

  function lastCarbrand (carBrands) {
    return carBrands.at (-1);
  } 
 let carBrands2 = (["bmw", "toyota", "cadillac"]);
  console.log (lastCarbrand(carBrands2));

  //task 6 format brands list

  function formatBrandsList( carBrands) {
    return carBrands.join (", ");
  } 
   
  let carBrands3 = ["bmw", "toyota", "Cadillac"];
  console.log(formatBrandsList(carBrands3));  

  // task 7 - safe rounding

function safeRounding(number) {
    
    if (typeof number !== "number"){
   return("invalid number");}
   else {
    return Math.round (number);}

   };
    console.log (safeRounding(5.7));
    


