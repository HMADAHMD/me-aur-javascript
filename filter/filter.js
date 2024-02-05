// creates a new array by filtering out elements
// .filter()
// filter out the odds or even numbers in array

let numbers = [1,2,3,4,5,6,7,8,9]

let result = numbers.filter(evenNumbers);

console.log(result);
console.log(numbers);

function evenNumbers(elements) {
  let res = elements % 2 === 0
  return res
}

// get the students who age is greater than 20

let students = [20, 19, 10, 18, 34, 24, 37, 44]

let elderStudents = students.filter(oldStudents);
let younggStudents = students.filter(youngStudents);

console.log(elderStudents)
console.log(younggStudents)

function oldStudents(elements) {
  let res = elements > 20
  return res
}

function youngStudents(elements) {
  let res = elements < 20
  return res
}
