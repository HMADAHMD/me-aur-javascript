// counter progrma in javascript
// we will create a counter program that will increase, decrease and reste the value

// one html tag to display data
// 3 html buttons to interact with the above tag
// three buttons

// lets build
let number = 0;
document.getElementById("inc").onclick = function(){
  number += 1;
  document.getElementById("mynumber").textContent = number;
}

document.getElementById("reset").onclick = function(){
  number = 0;
  document.getElementById("mynumber").textContent = number;
}

document.getElementById("dec").onclick = function(){
  if (number > 0) {
    number -= 1 && number > 0;
    document.getElementById("mynumber").textContent = number;
  }
}