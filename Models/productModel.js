class Product {
    constructor(id, name, price, retailer, amountInStock) {
      (this.id = id),
        (this.name = name),
        (this.price = price),
        (this.retailer = retailer),
        (this.amountInStock = amountInStock);
    }
  }
  
  export default Product;


  // example

  // product obj:{"id":"1","name":"product1","price":"100","retailer":"retailer1","amountInStock":"10"}