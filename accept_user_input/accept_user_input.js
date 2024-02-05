console.log("This is lecture 2 of javascript series");
// accept user inputs
// type conversions
// constants

// 1. accepts user inputs

// one way

//let userName = window.prompt("what is your name?");
//console.log(userName);

// other/professional way using html
let userName;
document.getElementById("myBtn").onclick = function() {   //whatever to happens when button is pressed
  userName = document.getElementById("myTxt").value;      //use the value in the text box
  document.getElementById("myH2").textContent = `Welcome ${userName}`;  //update the content of tags with specified id
  console.log(userName);
}


