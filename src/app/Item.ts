export class Item {
  name;
  quantity;
  price;
  discription;

  constructor(name, quantity, price, discription) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.discription = discription;
  }

  getName() {
    return this.name;
  }

  getQuantity() {
    return this.quantity;
  }

  getPrice() {
    return this.price;
  }

  getDiscription() {
    return this.discription;
  }
  setName(name) {
    return this.name = name;
  }

  setQuantity(quantity) {
    return this.quantity = quantity;
  }

  setPrice(price) {
    return this.price = price;
  }

  setDiscription(discription) {
    return this.discription = discription;
  }
}
