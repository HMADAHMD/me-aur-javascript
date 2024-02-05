// constants in js

const pi = 3.14159;

// let radius = window.prompt("Enter the radius");
// radius = Number(radius);

let circumference;
console.log(`Circuferene is ${circumference}`);

document.getElementById("mybtn").onclick = function(){
  let radius = document.getElementById("mytxt").value;
  radius = Number(radius);
  circumference = 2 * pi * radius;
  document.getElementById("myH3").textContent = "Circumference is " + circumference;
}