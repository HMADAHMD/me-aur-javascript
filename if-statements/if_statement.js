// IF Statements


// let year = window.prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year < 2015) {
//   alert( 'Too early...' );
// } else if (year > 2015) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }

// let age = document.getElementById("myinput").value;
// console.log(age);

// USING ALERT AND PROMPTS

// let age = window.prompt("Enter your age?");
// if (age < 18) {
//   alert("You are no eligible to drive!");
// }
// else if (age >= 18 && age <= 80) {
//   alert("You are eligible for license and can drive");
// }
// else if (age > 18 && age > 80) {
//   alert("You are too old to drive");
// }
// else {
//   alert("you cannot drive");
// }
let age; 

const myText = document.getElementById("myinput");
const myButton = document.getElementById("mybutton");
const textValue = document.getElementById("myH2");

myButton.onclick = function() {
  age = myText.value;
  age = Number(age);

  if (age < 18) {
    textValue.textContent = "You are not eligible for license";
  }
  else if (age >= 18 && age <= 80) {
    textValue.textContent = "You are eligible for license and can drive";
  }
  else if (age > 18 && age > 80) {
    textValue.textContent = "You are too old to drive";
  }
  else {
    textValue.textContent = "You cannot drive";
  }
}