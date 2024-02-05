// class = ES6 feature provides a more structured and cleaner way to
// work with objects compared to traditional constructor functions

class Product {
  constructor(productName, price){
    this.productName = productName
    this.price = price
  }

  displayPrice() {
    console.log(`${this.productName} and ${this.price}`)
  }

}

const product1 = new Product("chevy", 123)
product1.displayPrice()