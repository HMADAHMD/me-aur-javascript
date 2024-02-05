// callback functions: function that is passed as an argument to another function

// it is used to make network request, reading file, interacting with databases
// "when you are done do this"

sum(displayConsole, 4, 5)

function sum(callback, x, y) {
  let result = x + y;
  callback(result)
}

function displayConsole(result) {
  console.log(result)
}