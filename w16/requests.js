const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Unable to fetch data");
  }
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
