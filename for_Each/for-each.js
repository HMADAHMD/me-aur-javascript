// for each: method use to iterate elements of an array and apply specified callback function to each element
// array.foreach(callback)

let fruits = ["apple", "banana", "coconut", "duora"]

let numbers = [1, 2, 3, 4, 5]

numbers.forEach(displayNumbers)

function displayNumbers(elements) {

  console.log(Math.pow(elements, 3))
}


// make fruits string uppercase letter

fruits.forEach(displayFruits)
function displayFruits(elements) {
  let res = elements.charAt(0).toUpperCase() + elements.slice(1)
  console.log(res)
}