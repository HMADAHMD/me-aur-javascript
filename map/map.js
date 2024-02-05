// map function: almost same as forEach method, it creates a new array without altering the original array.

let numbers = [1,2,3,4,5,6,7,8,9]

console.log(numbers)
let dNumbers = numbers.map(tripleNumbers);

console.log(dNumbers);

function doubleNumbers(elements) {
  let result = elements * 2
  return result
}

function tripleNumbers(elements) {
  let result = elements * 3
  return result
}


