// constructors = special method for defining the properties and 
// methods of objects

function Property(type, area, location, price) {
  this.type = type,
  this.area = area,
  this.location = location,
  this.price = price,
  this.drive = function() {
    console.log(`There is a ${type} property of ${area} area in ${location} demanding ${price}.`)
  }
}

let property1 = new Property("duplex", "5000sqft", "DHA", "100000000")

property1.drive()

// Task 8: Build a Simple Library System
// Create constructors for Library and Book. The Library 
// constructor should have methods to add a book, remove 
// a book, and list all books. The Book constructor should store 
// information about the title, author, and availability status.

function Library() {

}

function Book() {
  
}