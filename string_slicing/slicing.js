// string slicing


// let userName = 'Hammmmmaddd Ahmad';

// let whitespace = userName.indexOf(' ')
// let firstName = userName.slice(0, whitespace);
// let lastName = userName.slice(whitespace+1)


// console.log(whitespace)
// console.log(firstName);
// console.log(lastName);


let email = 'hammad@gmail.com';
let email2 = 'hammad12@gmail.com';
let email3 = 'hammad.34@gmail.com';
let email4 = 'ham@m.ad@gmail.com';
let specailChar = email4.lastIndexOf('@');

let userName = email4.slice(0, specailChar)


console.log(userName);