// static = keyword that defines properties or methods that belongs
// to the class itself rather than the objects created from that class


class Car {
  static carName = "Toyota"
  carModel = 2022
}

let cars = new Car().carModel

console.log(cars)
console.log(Car.carName)

