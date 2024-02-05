// math objects

let number1 = 3.99;
let number2 = 2;
let number3 = 4;

// number3 = Math.round(number1);
// number3 = Math.floor(number1);
// number3 = Math.ceil(number1);
// number3 = Math.trunc(number1);
// number3 = Math.pow(number1, number2);
// number3 = Math.sqrt(number2);
// number3 = Math.log(number2);
// number3 = Math.sin(number2);
// number3 = Math.cos(number2);
// number3 = Math.tan(number2);
// number3 = Math.abs(number1);    // makes the number positive
// number3 = Math.sign(number1);     // if number is positive it returns 1 and if negative it returns 0
let max = Math.max(number1, number2, number3);
let min = Math.min(number1, number2, number3);


document.getElementById("myH3").textContent = max;
