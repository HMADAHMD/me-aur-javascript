const fact = document.querySelector("#name")
const myButton = document.querySelector("#mybtn")

// const getCats = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data[0]['name']);
//     fact.textContent = data[1]['name']
//   } catch (error) {
//     console.log("Error: "+ error);
//   }
// }



// getCats()

// lets do the above thing with promise chaining
// new Promise(() => {

// })

const getCats = fetch('https://jsonplaceholder.typicode.com/users').
then((response) => {
  return response.json()
}).
then((data) => {
  console.log(data[0]['name']);
  fact.innerHTML = data[2]['name']
}).
catch((error) => {
  console.log("Error: " + error);
}).
finally(() => {

})


myButton.addEventListener("click", getCats)

