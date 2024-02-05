// objects = a collection of related properties and/or methods

// this = referene to the object where this is used


// const person1 = {
//   name : "hammad",
//   age : "23",
//   gender : "male",
//   hobby : () => {console.log("Hates himself")} 
// }

// console.log(person1.name)

const person2 = {
  name: "hammad",
  age: "23",
  gender: "male",
  hobby: function(){console.log(`${this.name} hates himself`)} 
}

person2.hobby()