let ordersList = [];

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

let amount = 0;
const items = ["T-Shirt", "Phone Case", "Food", "Shoes"];
let price = 0;

const Order = function (item, price) {
  this.item = item;
  this.price = price;
};

Order.prototype.yourOrder = function () {
  return `You ordered a ${this.item} for $${this.price}.`;
};

Order.prototype.yourAmount = function () {
  amount = amount + this.price;
  return amount;
};

const renderOrder = (order) => {
  const head = document.createElement("h3");
  const paragraph = document.createElement("p");
  const spacer = document.createElement("br");
  paragraph.textContent = order.yourOrder();
  document.querySelector("#output").appendChild(paragraph);
  document.querySelector("#output").appendChild(spacer);
  document.querySelector("#amount").innerHTML = "";
  head.textContent = `Your amount is $${order.yourAmount()}`;
  document.querySelector("#amount").appendChild(head);
};

const saveOrder = () =>
  localStorage.setItem("orderDetails", JSON.stringify(ordersList));

document.querySelector("#orders").addEventListener("click", (e) => {
  let item = items[randomNumber(0, 3)];
  let prices = price + randomNumber(1, 25);
  const orders = new Order(item, prices);
  ordersList.push(orders);
  saveOrder();
  renderOrder(orders);
  e.preventDefault();
});
