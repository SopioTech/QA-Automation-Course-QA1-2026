const numbers = [3, 9, 10, 15, 12];

// const tripleNumbers = numbers.map((num) => num * 3);
// const tripleNumbers2 = numbers.map(function (num) {
//   return num * 3;
// });

// console.log(tripleNumbers);

function multiplyNumberByThree(arrNumbers) {
  const multipliedArray = [];

  for (let i = 0; i < arrNumbers.length; i++) {
    const multipliedValue = arrNumbers[i] * 3;
    multipliedArray.push(multipliedValue);
  }

  return multipliedArray;
}

const myTripledArrayNumbers = multiplyNumberByThree(numbers);
console.log(myTripledArrayNumbers);
