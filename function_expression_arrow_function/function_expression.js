// function expression = a way to define a function as a values
// or variables and can pas as arguments without need to declare
// them with names.


// const sum = function(x, y) {
//   return x + y
// }

// console.log(sum(4, 5));

// let marks = [37, 29, 35, 46, 50]

// function totalmarks(accum, element) {
//   return (accum + element)
// }

// let percentage = marks.reduce(totalmarks) / marks.length

// console.log(percentage)

// convert this to function exression


let marks = [37, 29, 35, 46, 50]

let  percentage = marks.reduce(function(accum, elements) {
  return accum + elements
})/marks.length

console.log(percentage)