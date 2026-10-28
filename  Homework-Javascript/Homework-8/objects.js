// // // // const phone = {
// // // //   colour: "black",
// // // //   memory: 10,
// // // //   price: 1200,
// // // //   model: { name: "iphone", mark: 18, year: 2012 },
// // // // };

// // // // const phone1 = {
// // // //   colour: "black",
// // // //   memory: 10,
// // // //   price: 1200,
// // // //   model: { name: "iphone", mark: 18, year: 2012 },

// // // //   phone1GetCalling: function () {
// // // //     return `My favorite phone is ${this.model.name}.`;
// // // //   },
// // // // };

// // // // console.log(phone1.phone1GetCalling());

// // // // Task 3 Update Method

// // // const phone = {
// // //   colour: "black",
// // //   memory: 10,
// // //   price: 1200,
// // //   model: { name: "iphone", mark: 18, year: 2012 },
// // // };

// // // const phone1 = {
// // //   colour: "black",
// // //   memory: 10,
// // //   price: 1200,
// // //   model: { name: "iphone", mark: 18, year: 2012 },

// // //   updatePrice: function (newPrice) {
// // //     this.price = newPrice;
// // //     return this.price;
// // //   },
// // // };

// // // console.log(phone1.updatePrice(1500));
// // // console.log(phone1.price);

// // // Task 4 Calculation method

// // const phone1 = {
// //   colour: "black",
// //   memory: 10,
// //   price: 1200,
// //   model: { name: "iphone", mark: 18, year: 2012 },

// //   calculation() {
// //     return this.price * this.memory;
// //   },
// // };

// // console.log(phone1.calculation());

// // task 5

// // const phone1 = {
// //   colour: "black",
// //   memory: 10,
// //   price: 1200,
// //   model: { name: "iphone", mark: 18, year: 2012 },

// //   calculation() {
// //     return this.price * this.memory;
// //   },
// // };
// // console.log(phone1.colour);
// // console.log(phone1["colour"]);

// // task 6 Property check

// // const phone1 = {
// //   colour: "black",
// //   memory: 10,
// //   price: 1200,
// //   model: { name: "iphone", mark: 18, year: 2012 },

// //   checkProperty: function (property) {
// //     return property in this;
// //   },
// // };

// // console.log(phone1.checkProperty("price"));
// // console.log(phone1.checkProperty("memory"));

// // task 7: Method calls

// // const phone1 = {
// //   colour: "black",
// //   memory: 10,
// //   price: 1200,
// //   model: { name: "iphone", mark: 18, year: 2012 },

// //   checkProperty: function (property) {
// //     return property in this;
// //   },

// //   updatePrice: function (newPrice) {
// //     this.price = newPrice;
// //     return this.price;
// //   },
// // };

// // const result1 = phone1.checkProperty("price");
// // const result2 = phone1.updatePrice(1500);
// // console.log(result1);
// // console.log(result2);

// // Task 8 - Add A new Property

// // const phone1 = {
// //   colour: "black",
// //   memory: 10,
// //   price: 1200,
// //   model: { name: "iphone", mark: 18, year: 2012 },
// // };
// // phone1.battery = 1500;

// // console.log(phone1);

// // phone1.battery = 1700;
// // console.log(phone1);

// // delete phone1.battery;
// // console.log(phone1);

// // task 11: List object keys

// const phone1 = {
//   colour: "black",
//   memory: 10,
//   price: 1200,
//   model: { name: "iphone", mark: 18, year: 2012 },
// };

// const keys = Object.keys(phone1);
// console.log(keys);
// console.log(keys.includes("model"));

// // task 12

// const phone2 = {
//   colour: "black",
//   memory: 10,
//   price: 1200,
//   model: { name: "iphone", mark: 18, year: 2012 },
// };

// const values = Object.values(phone2);
// console.log(values);
// console.log(values.includes(10));

// // list object entries

// const phone3 = {
//   colour: "black",
//   memory: 10,
//   price: 1200,
//   model: { name: "iphone", mark: 18, year: 2012 },
// };

// const entries = Object.entries(phone3);
// console.log(entries);
// const result = entries.flat();
// console.log(result);

// task 14 : Access Nested Properties

const phone = {
  colour: "black",
  memory: 10,
  price: 1200,
  model: { name: "iphone", mark: 18, year: 2012 },
};

console.log(phone.model.name);
console.log(phone.model.mark);

phone.model.name = "samsung";
console.log(phone.model);
