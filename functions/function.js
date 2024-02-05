// functions in javascript


// non returnign function
// function myName (){

// }

// // returning function
// function newName () {

//   return
// }

// let fullname = newName()

// temperature converter

// temperature converter

// formula for celcius to fahrenhite
// temperature°C×(9/5)+32

// formula for fahrenhite to celcius
// Temperature(°F) - 32) * 5/9

let temperature = document.getElementById("number")
let myBtn = document.getElementById("submit")
let fahrenhiteSelected = document.getElementById("fahrenhite")
let celciusSelected = document.getElementById("celcius")
let result = document.getElementById("result")

myBtn.onclick = function() {
  if (fahrenhiteSelected.checked){
    let fahrenhite = celciusToFah(temperature.value)
    result.textContent = `${fahrenhite} F`
  } else if (celciusSelected.checked) {
    let celcius = fahToCelcius(temperature.value)
    result.textContent = `${celcius} C`
  } else {
    result.textContent = "Invalid"
  }
}




function fahToCelcius(temperature) {
  let temp = (temperature - 32) * 5/9
  let tempp = Math.round(temp)
  return temp
}

function celciusToFah(temperature) {
  let temp = temperature * (9/5) + 32
  let tempp = Math.round(temp)
  return temp
}

