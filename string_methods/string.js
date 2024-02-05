// string methods in js

let userName = "Encryptot   ";

console.log(userName.charAt(0));
console.log(userName.indexOf('t'))
console.log(userName.lastIndexOf('t'))
console.log(userName.length)
userName = userName.trim()
console.log(userName)
console.log(userName.toUpperCase())
console.log(userName.toLowerCase())
console.log(userName.repeat(2))
console.log(userName.startsWith('e'))
console.log(userName.startsWith('E'))
console.log(userName.includes('r'))
console.log(userName.replaceAll('r','l'))
console.log(userName.padStart(12, 'i'))
console.log(userName.padEnd(12, 'i'))