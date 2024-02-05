// easy replacement to multiple if else statements

let age = window.prompt('Select any number between 1 to 7');

age = Number(age);
let today = document.getElementById('myH2');

switch (age) {
  case 1:
    today.textContent = "Monday";
    break;
  case 2:
    today.textContent = "tuesday";
    break;
  case 3:
    today.textContent = "wednesday";
    break;
  case 4:
    today.textContent = "thursday";
    break;
  case 5:
    today.textContent = "friday";
    break;
  case 6:
    today.textContent = "saturday";
    break;
  case 7:
    today.textContent = "sunday";
    break;
  default:
    break;
}