// ternary operator
// shortcut to if else statements

let billTotal = window.prompt("Enter bill amount?")
billTotal = Number(billTotal);
let response = billTotal > 100 ? "You get 10% discount" : "No discount for you"
alert(response);