// // arrays

// let fruits = ["apple", "mango", "berry", 1, 34.44,
//               {key: "value"},
//             {name: "hammad"}]

// fruits.push("orange")
// // fruits.pop()
// // fruits.unshift("melons")
// // fruits.shift()

// // fruits.sort()
// // fruits.sort().reverse()
// let values = fruits.length
// // console.log(fruits)

// // for(i = 0; i < values; i++) {
// //   console.log(fruits[i])
// // }

// // short form 

// for (let fruit of fruits) {
//   console.log(fruit)
// }


// // spread operator
// // unpacks the element, allows an iterable such as an array or string to be expanded into separate elements
// // ...

// let channelName = "BroCode"
// let secondName = "Mr"
// let thirdName = "Beast"

// let nameChars = [...channelName]

// let combinedName = [...secondName, ...thirdName].join()

// console.log(combinedName)

// spread is also used to combine arrays and



// rest operator
// joins the element

function cafe(...food){   // rest
  console.log(...food)   //spread
}

let food1 = "pizza"
let food2 = "burger"
let food3 = "fries"
let food4 = "steak"
let food5 = "drink"
let food6 = "wings"

cafe(food1, food2, food3, food4, food5)