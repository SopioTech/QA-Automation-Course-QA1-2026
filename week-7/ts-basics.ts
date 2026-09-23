let favoritefood: string = "pizza";
favoritefood = "pasta";
console.log (favoritefood);

let age: number = 25;
age = 39;
console.log(age);

let IsOnLine: Boolean = true;
console.log(IsOnLine);

 let randomValue: any = 'hello';
 randomValue = 'Alice';
 randomValue = 25;
 console.log (randomValue);


 let favoritecolour = "white";

 let fruits: string[] = ["grape", "banana", "kiwi"];

 let person: {name: string; age:number; isStudent: boolean} = {
    name: "alice",
    age: 30,
    isStudent:true,
 };

 console.log(person);

function greet (name: string, age: number) {
    console.log (`hello my name is ${name} and I am ${age} years old`);
}

greet("Alice", 50);

function greetUser(user: string = "Default user"){
    console.log(`Hey, I an $(user)!!!`);
}

greetUser();
greetUser("Alex");

// function retunr value types

function add(value1: number, value2: number): number {
    const sum = value1 + value2;
    retur n [2];
}

const myValue = add(2, 4);
console.log(myvalue);

