// while condition
// REPEAT SOME CODE WHILE SOME CONDITION IS TRUE
// let password = ""

// while (userName === "" || userName === null) {
//   userName = window.prompt("Enter your username: ")
// }

// console.log(`hello ${userName}`)



// do{ 
//   userName = window.prompt("Enter your username: ")
// } while(userName === "" || userName === null)


let loggedIn = false;
let userName;
let password;

// while(!loggedIn) {
//   userName = window.prompt('enter username: ')
//   password = window.prompt('enter password: ')

//   if(userName === 'myusername' && password === 'mypassword') {
//     loggedIn = true
//     console.log("You are logged in")
//   }
//   else {
//     console.log("Invalid Credentials")
//   }
// }

do{
  userName = window.prompt('enter username: ')
  password = window.prompt('enter password: ')

  if(userName === 'myusername' && password === 'mypassword') {
    loggedIn = true
    console.log("You are logged in")
  }
  else {
    console.log("Invalid Credentials")
  }
} while (!loggedIn);