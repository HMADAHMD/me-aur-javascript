console.log("Hammad");
console.log("I love ruby and js")
let carName = "volve";
document.getElementById("demo").innerHTML = carName;

//variables
let userName = "hammad";
console.log("My name is " + userName);

englishNumber = 3;
urduNumber = 5;
totalNumber = 10;
obtainedNumber = englishNumber + urduNumber;
console.log("Obtained Marks " + obtainedNumber)
urduNumber = 4;

// JAVASCRIPT INFO
// VARIABLES
//-- TASK 1 --
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
let userAdmin;
let userName2;
userName2 = "John";
userAdmin = userName2;
// alert(userAdmin);

// -- TASK-2 --
// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

let planetName = "Earth";
let planetVisitor = "Hammad"


// datatypes
// number
// strings
// string concatenation
let st_name = "jenny";
let st_info = `student name is ${st_name}`; // backticks
console.log(st_info)

// booleans
let isRaining = false;
// alert(isRaining);

let greaterThan = 4 < 1;
// alert(greaterThan)

// explicitly assisgn undefined
let newName = undefined;
console.log(newName);

//objects and symbols

//type of variable

typeof 0;
typeof newName;

// Summary of datatypes
// There are 8 basic data types in JavaScript.

// Seven primitive data types:
// number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// bigint for integer numbers of arbitrary length.
// string for strings. A string may have zero or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// symbol for unique identifiers.
// And one non-primitive data type:
// object for more complex data structures.
// The typeof operator allows us to see which type is stored in a variable.

// Usually used as typeof x, but typeof(x) is also possible.
// Returns a string with the name of the type, like "string".
// For null returns "object" – this is an error in the language, it’s not actually an object.

// -- TASK --
// What is the output of the script?

let name = "Ilya";
alert( `hello ${1}` ); //hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya 

//Interaction: alert, prompt, confirm
// alert
// prompt
// confirm
alert("you are using brave");
let age = prompt('how old are you?', 100);
alert(`You are ${age} years old.`)

//confirm
let isBoss = confirm("are you the manager?")
alert(isBoss);

//-- TASK --
let yourName = prompt('what is your name', null);
alert(yourName);
