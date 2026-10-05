// task 1 - print all elements

const vegetables = ["potato", "tomato", "lettuce"];
function printAllElements (arr) {

for (let i=0; i<arr.length; i++) {

console.log(arr[i]);
}
}

printAllElements(vegetables);

//task 2 index + value
const vegetables2 = ["potato", "tomato", "lettuce"]
function printaAllelements (arr) {
    for (let i=0; i<arr.length; i++) {
        console.log (i, arr[i]);
    }
}

printaAllelements(vegetables2);

// task 3 First and Last

const vegetables3 = ["potato", "tomato", "lettuce"]
function printaAllelements (arr) {
    for (let i=0; i<arr.length ; i++) {
        if (i === 0 || i === arr.length -1) {
        console.log (i, arr[i]);
    }}

}

printaAllelements(vegetables3);