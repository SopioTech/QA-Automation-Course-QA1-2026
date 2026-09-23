// Part1 Basic types

//  task 1string

let studentName: String = "Sopio";
let course:String ="Typescript";

// task 2 number

let age: number = 18; 
let price: number = 1100.5;

//  task 3 Boolean variable

let isStudent:boolean = 5>4;
let isOnline:boolean = 3>5;
console.log(isStudent);
console.log(isOnline);

//Part 2 The Any Type

//task 4 flexible Variable

let randomValue: any =  10;
randomValue = "bye";
randomValue = 100 === 100;

// Part 3: Type Inference

// Task 5: Let Typescript Guess The Type

//let city: "New York" ; 
//city = 5; 
// Type should be any otherwise won't be able to assign number. 

//correct

let city: any = "New York";
city = 5;


//Task 6: String Array

let carBrands =  ["BMW" , "Audi", "Cadillac", "Toyota"];
let scores = [ 10,5,11,4,3];

// Part 5: Typed Objects

//Task 8: Simple Object

let user: { name: string; age: number; isAdmin:boolean} = 
 {name :"Sopio",
    age :39,
    isAdmin: true}; 



// task 9 Object product

let product: { title:string; price:number; IsStock:boolean} =

{title: "Cheese",
    price: 20,
    IsStock: false
};

// task 10 Real World Data

let  students: {name: String, age: number, IsActive: boolean }[] =

[ {name : "Alice",
    age :20,
    IsActive: true },
    
 {name: "Ann",
    age:19,
    IsActive: true },
{name: "Gio",
age: 17,
IsActive: false }];

