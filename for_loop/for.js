// // For looop
// // repeat some code for limited amount of time

// for (let i = 1; i <= 5; i++) {
//   let row = '';

//   // Add spaces
//   for (let j = 5; j > i; j--) {
//     row += ' ';
//   }

//   // Add asterisks
//   for (let k = 1; k <= i; k++) {
//     row += '*';
//   }

//   console.log(row);
// }

// skip an iteration           continue

// break the loop              break

// number guessing game

let exactNumber = 50;
let guessnumber;
let running = true

while (running) {
  guessnumber = window.prompt("Guessed number:");
  if (guessnumber < exactNumber) {
    guessnumber = window.prompt("Guessed number is low, Guess Again:");
  } else if( guessnumber > exactNumber ) {
    guessnumber = window.prompt("Guessed number is high, Guess Again:");
  } else {
    running = false
    console.log("guessed number is correct");
  }
}
