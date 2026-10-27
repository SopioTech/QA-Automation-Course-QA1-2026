// // // // for (let i = 1; i <= 5; i++) {
// // // //   console.log("Count:", i);
// // // // }

// // // // const fruits = ["apple", "pear", "berry"];

// // // // for (let i = 0; i < fruits.length; i++) {
// // // //   console.log("fruit", fruits[i]);
// // // // }

// // // // const word = "hello";
// // // // for (let i = 0; i < word.length; i++) [console.log("character", word[i])];
// // // // a
// // // //

// // // // While Loop

// // // let isLightOn = true;

// // // while (isLightOn) {
// // //   console.log("Hello students");
// // //   isLightOn = false;
// // // }

// // let i = 1;

// // while (i <= 5) {
// // console.log("Hello students")
// //   i++;
// // }

// //. for .. of loop

// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   console.log("Count:", num);
// }

// const colors = ["yellow", "green", "blue"];

// for (const sop of colors) {
//   console.log(`I like all the follow colors: ${sop}`);
// }

// break

const studentNames = ["Ronaldo", "Messi", "Ibra", "Vini", "Kvara"];

for (let i = 0; i < studentNames.length; i++) {
  if (studentNames[i] === "Ibra") {
    break;
  }
  console.log(studentNames[i]);
}

const studentNames1 = ["Ronaldo", "Messi", "Ibra", "Vini", "Kvara"];

for (let i = 0; i < studentNames.length; i++) {
  if (studentNames[i] === "Ibra") {
    continue;
  }
  console.log(studentNames1[i]);
}
