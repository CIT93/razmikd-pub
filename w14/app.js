const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
let amount = 0;
let movieOnePrice = 0;
let movieTwoPrice = 0;

class Order {
  constructor(
    movieOne,
    movieTwo,
    movieOneTicketsQty,
    movieTwoTicketsQty,
    movieOneDate,
    movieTwoDate,
    movieOneTime,
    movieTwoTime,
    price
  ) {
    this.firstItem = movieOne;
    this.secItem = movieTwo;
    this.firstQty = movieOneTicketsQty;
    this.secQty = movieTwoTicketsQty;
    this.firstDate = movieOneDate;
    this.secDate = movieTwoDate;
    this.firstTime = movieOneTime;
    this.secTime = movieTwoTime;
    this.price = price;
  }

  yourOrder() {
    return `You purchased ${this.firstQty} tickets for ${this.firstItem} movie on ${this.firstDate} ${this.firstTime} and ${this.secQty} tickets for ${this.secItem} movie on ${this.secDate} ${this.secTime} ---> Your total price is $${this.price}`;
  }

  yourAmount() {
    amount += this.price;
    return amount;
  }
}

const renderErr = () => {
  const err = document.createElement("h4");
  err.setAttribute("id", "error-message");
  document.querySelector("#error").innerHTML = "";
  err.textContent = `Please input all fields`;
  document.querySelector("#error").appendChild(err);
};

const renderOrder = (order) => {
  const h = document.createElement("h3");
  const p = document.createElement("p");
  const sp = document.createElement("br");
  document.querySelector("#amount").innerHTML = "";
  h.textContent = `Your amount is $${order.yourAmount()}`;
  p.textContent = order.yourOrder();
  document.querySelector("#output").appendChild(p);
  document.querySelector("#output").appendChild(sp);
  document.querySelector("#amount").appendChild(h);
};

document.querySelector("#orders").addEventListener("click", (e) => {
  let firstItem = input.elements.firstItem.value;
  let secItem = input.elements.secItem.value;
  let firstQty = parseInt(input.elements.firstQty.value);
  let secQty = parseInt(input.elements.secQty.value);
  let firstDate = input.elements.firstDate.value;
  let secDate = input.elements.secDate.value;
  let firstTime = input.elements.firstTime.value;
  let secTime = input.elements.secTime.value;
  if (
    !firstItem ||
    !secItem ||
    !firstQty ||
    !secQty ||
    !firstDate ||
    !secDate ||
    !firstTime ||
    !secTime
  ) {
    renderErr();
  } else {
    document.getElementById("error-message").remove();
    let movieOnePrices = movieOnePrice + randomNumber(1, 25) * firstQty;
    let movieTwoPrices = movieTwoPrice + randomNumber(1, 25) * secQty;
    let wholePrice = movieOnePrices + movieTwoPrices;
    let orders = new Order(
      firstItem,
      secItem,
      firstQty,
      secQty,
      firstDate,
      secDate,
      firstTime,
      secTime,
      wholePrice
    );
    renderOrder(orders);
    input.elements.firstItem.value = "";
    input.elements.secItem.value = "";
    input.elements.firstQty.value = "";
    input.elements.secQty.value = "";
    input.elements.firstDate.value = "";
    input.elements.secDate.value = "";
    input.elements.firstTime.value = "";
    input.elements.secTime.value = "";
  }
  e.preventDefault();
});
