function makeburger() {
  return new Promise((resolve, reject) => {
    console.log("making your burger");

    setTimeout(() => {
      const success = true;
      if (sucess) {
        console.log("burger ready");
        resolve("burger served");
      } else {
        reject("Burger burnt");
      }
    }, 3000);
  });
}
// receiver waits for promise

makeburger()
  .then((message) => {
    console.log("Reciever:", message);
    console.log("enjoy your meal");
  })
  .catch((error) => {
    console.log("reciever error:", error); // runs if rejected
  });
