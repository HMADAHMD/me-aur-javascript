// // promises: eventual completion(or failure) of anof an
// // asynchronous operation and its resulting data
// // it is an object

// // fetch("https://www.apis.com").then().catch().finally()


// // one way of doing it

// const promiseOne = new Promise((resolve, reject)=> {
//   setTimeout(() => {
//     console.log("Async task is completed");
//     resolve()
//   }, 1000);
// })

// promiseOne.then(() => {
//   console.log("Promise is consumed");
// })


// // second way of doing it

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("this is the promise two");
//     resolve
//   }, 1000);
// })
// .then(() => {
//   console.log("Promise two consumed");
// })

// // third way of doing it, passing object as parameter 
// // in resolve

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({username: "hammad", email: "test@example.com"})
//   }, 1000);
// })
// .then((user) => {
//   console.log(user);
// })

// // fouth way of doing it, using of reject

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true
//     if(!error) {
//       resolve({username: "john", email: "john@example.co"})
//     }
//     else {
//       reject(`ERROR: ${error}`)
//     }
//   }, 1000)
// })
// .then((user) => {
//   console.log(user);
//   return user.username
// })
// .then((username) => {
//   console.log(username);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   console.log("Finally is printed, and will be executed always");
// })

// // fifth way of doing it, using async await, try catch block

// const fifthPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let secondError = true
//     if(!secondError) {
//       resolve({username: "john", email: "john@example.co"})
//     }
//     else {
//       reject('ERROR')
//     }
//   }, 1000)
// })

// async function fivePromise () {
//   try {
//     const response = await fifthPromise
//     console.log(response)
//   } catch (error) {
//     console.log(error);
//   }
// }

// fivePromise()

// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("Error: "+ error);
//   }
// }

// getAllUsers()

// another way of doing the above thing
const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("Error: " + error);
  }
}

getUsers()

// fetch('https://jsonplaceholder.typicode.com/users').
// then((response) => {
//   return response.json()
// }).
// then((data) => {
//   console.log(data);
// }).
// catch((error)=>{
//   console.log(error);
// }).
// finally(() => {

// })


