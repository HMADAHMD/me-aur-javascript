// random password generator
// let passwordLength = 10

// let randomPassword = Math.floor(Math.random() * 10)

function randomPassword(length,  isLowerCase, isUpperCase, containSymbols, containNumbers){
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
  const symbols = "!@#$%^&*(){}:<>?"
  const numbers = "0123456789"

  let allowedChars = "";
  let password = "";
  
  allowedChars += isLowerCase ? lowerCaseChars : "";
  allowedChars += isUpperCase ? upperCaseChars : "";
  allowedChars += containSymbols ? symbols : "";
  allowedChars += containNumbers ? numbers : "";

  for(let i = 1; i <= length; i++) {
    const randompwd = Math.floor(Math.random() * allowedChars.length)
    password += allowedChars[randompwd]
  }

  return password
};

const passwordLength = 12
const isUpperCase = true
const isLowerCase = true
const containSymbols = true
const containNumbers = false

let generator = randomPassword(passwordLength, isLowerCase, isUpperCase, containSymbols, containNumbers)

console.log(generator)