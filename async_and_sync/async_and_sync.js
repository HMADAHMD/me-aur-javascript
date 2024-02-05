// synchronous = executes line by line consecutively in a sequential manner
// asynchronous = allows multiple operation to perfom concurrently without waiting.
// doesn't block the execution flow and allows the program to continue
// callbacks, promises, async await


// setTimeout is one of many asynchronous functions
// setTimeout(() => {
//   console.log("after 3 seconds")
// }, 3000);


function task1(callback) {
  setTimeout(()=> {
    console.log("task 1")
    callback()
  }, 3000)
}

function restTasks() {
  console.log("task 2")
  console.log("task 3")
  console.log("task 4")
}

task1(restTasks)