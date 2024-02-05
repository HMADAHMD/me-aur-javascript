// .reduce
// reduce the element of array to a single value

// create an array of prices as its a shopping cart

let cart = [50, 20 ,10, 5, 100]

let total = cart.reduce(totalprice)

console.log(total)

function totalprice(accum, elements) {
  let res = accum + elements
  return res;
};