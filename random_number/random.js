// random number generator

let number;


document.getElementById("button").onclick = function() {
  number = Number(number);
  number = Math.floor(Math.random() * 6 + 1);
  document.getElementById("number").textContent = number;
}
