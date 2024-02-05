// arrow function: a concise way of writing funciton expressions,
// good for simple functions that you use only once

// (parameters) => some code

const name = () => console.log("hello mikeala")
name()

let marks = [37, 29, 35, 46, 50]

let mark = marks.filter((elements) => {
  return elements > 35
})

console.log(mark)
