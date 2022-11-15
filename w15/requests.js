const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data);
    } else if (e.target.readyState === 4) {
      callback("Unable to fetch data", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
};

const renderFalse = (falsey) => {
  document.querySelector("#output").innerHTML = "";
  falsey.forEach((falsey) => {
    if (falsey.completed === false) {
      const el = document.createElement("li");
      el.textContent = falsey.title;
      document.querySelector("#output").appendChild(el);
    }
  });
};

const renderTrue = (truthy) => {
  document.querySelector("#output").innerHTML = "";

  truthy.forEach((truthy) => {
    if (truthy.completed === true) {
      const el = document.createElement("li");
      el.textContent = truthy.title;
      document.querySelector("#output").appendChild(el);
    }
  });
};
