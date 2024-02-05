// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating
// order, starting with word1. If a string is longer
// than the other, append the additional letters onto
// the end of the merged string.



// first element of first string skip rest then first
// element of second string skip rest then second 
// element of first string skip rest then second element
// of second string skip rest, keep running until the
// string is finished

let wordd1 = "abc"
let wordd2 = "pqrstuv"
let result = "";

function mergeString(word1, word2) {
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if(i < word1.length) result += word1[i];
    if(i < word2.length) result += word2[i];
  }
  return result
};

let stringg = mergeString(wordd1, wordd2)
console.log(stringg)






// let word11 = [...word1].join()
// let word22 = [...word2].join()

// console.log(...word1)
// console.log(...word2)