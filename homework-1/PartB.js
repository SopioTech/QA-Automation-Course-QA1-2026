/// 6 If statement

let number = 18;

if (number > 10) console.log("positive number");

/// 7 If Else

let storeOpen = false;

if (storeOpen) {
  console.log("The store is open");
} else {
  console.log("The store is closed");
}

let studentScore = 90;

if (studentScore > 90) {
  console.log("Grade A");
} else if (studentScore > 80) {
  console.log("Grade B");
} else if (studentScore >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

/// Switch

let movie = "Braveheart";

switch (movie) {
  case "Braveheart":
    console.log("You chose a historical movie.");
    break;

  case "Titanic":
    console.log("You chose a romantic movie.");
    break;

  case "The Alchemist":
    console.log("You chose a book adaptation.");
    break;

  default:
    console.log("Movie not found.");
}

// result will be code will stop running after 'Braveheart'

// without break

let bestmovie = "Titanic";

switch (bestmovie) {
  case "Braveheart":
    console.log("You chose a historical movie.");

  case "Titanic":
    console.log("You chose a romantic movie.");

  case "The Alchemist":
    console.log("You chose a book adaptation.");

  default:
    console.log("Movie not found.");
}

// Without break, the code continues from the matching case
// and runs all cases below it.


