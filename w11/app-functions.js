// A good candidate to use an arrow function but NOT shorthand syntax
// Fetch existing getSavedUserInfo from localStorage
const getSavedUserInfo = () => {
  const userInfoJSON = localStorage.getItem("userInfo");
  return userInfoJSON ? JSON.parse(userInfoJSON) : [];
};

// A good candidate to use an arrow function and shorthand syntax
// Save saveUserInfo to localStorage
const saveUserInfo = (userInfo) =>
  localStorage.setItem("userInfo", JSON.stringify(userInfo));

// A good candidate to use an arrow function but NOT shorthand syntax
// Fetch existing homework plans from localStorage
const getSavedHomeworkPlans = () => {
  const homeworkPlansJSON = localStorage.getItem("homeworkPlans");
  return homeworkPlansJSON ? JSON.parse(homeworkPlansJSON) : [];
};

// A good candidate to use an arrow function and shorthand syntax
// Save homework plans to localStorage
const saveHomeworkPlans = (homeworkPlans) =>
  localStorage.setItem("homeworkPlans", JSON.stringify(homeworkPlans));

// A good candidate to use an arrow function but NOT shorthand syntax
// Remove a homework plan from the list by id
const removeHomeworkPlan = (id) => {
  // A good candidate to use an arrow function and shorthand syntax
  const homeworkPlanIndex = homeworkPlans.findIndex(
    (homeworkPlan) => homeworkPlan.id === id
  );

  if (homeworkPlanIndex > -1) {
    homeworkPlans.splice(homeworkPlanIndex, 1);
  }
};

// A good candidate to use an arrow function but NOT shorthand syntax
// Toggle the completed value for a given homework plan
const toggleHomeworkPlan = (id) => {
  // A good candidate to use an arrow function and shorthand syntax
  const homeworkPlan = homeworkPlans.find(
    (homeworkPlan) => homeworkPlan.id === id
  );

  if (homeworkPlan) {
    homeworkPlan.completed = !homeworkPlan.completed;
  }
};

// A good candidate to use an arrow function but NOT shorthand syntax
// Render application homework plans based on filters
const renderHomeworkPlans = (homeworkPlans, filters) => {
  // A good candidate to use an arrow function but NOT shorthand syntax
  const filteredHomeworkPlans = homeworkPlans.filter((homeworkPlan) => {
    const searchTextMatch = homeworkPlan.day
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch =
      !filters.hideCompleted || !homeworkPlan.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  // A good candidate to use an arrow function and shorthand syntax
  const incompletehomeworkPlans = filteredHomeworkPlans.filter(
    (homeworkPlan) => !homeworkPlan.completed
  );

  document.querySelector("#homework-plans").innerHTML = "";
  document
    .querySelector("#homework-plans")
    .appendChild(generateSummaryDOM(incompletehomeworkPlans));

  // A good candidate to use an arrow function and shorthand syntax
  filteredHomeworkPlans.forEach((homeworkPlan) =>
    document
      .querySelector("#homework-plans")
      .appendChild(generatehomeworkPlanDOM(homeworkPlan))
  );
};

// A good candidate to use an arrow function but NOT shorthand syntax
// Get the DOM elements for an individual homework plan
const generatehomeworkPlanDOM = (homeworkPlan) => {
  const homeworkPlanEl = document.createElement("div");
  homeworkPlanEl.setAttribute("id", "css-homework-plan-el");
  const checkbox = document.createElement("input");
  const p = document.createElement("span");
  const button = document.createElement("button");
  button.setAttribute("id", "button-id");

  // Setup and append a checkbox (set type attribute)
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "checkbox-id");
  checkbox.checked = homeworkPlan.completed;
  homeworkPlanEl.appendChild(checkbox);
  // A good candidate to use an arrow function but NOT shorthand syntax
  checkbox.addEventListener("change", () => {
    toggleHomeworkPlan(homeworkPlan.id);
    saveHomeworkPlans(homeworkPlans);
    renderHomeworkPlans(homeworkPlans, filters);
  });

  // Homework Plan Edit
  const homeworkPlanEdit = document.createElement("a");
  homeworkPlanEdit.setAttribute("id", "edit-homework-plan");
  homeworkPlanEdit.innerText = `Edit \n`;
  homeworkPlanEdit.setAttribute("href", `edit.html#${homeworkPlan.id}`);
  homeworkPlanEl.prepend(homeworkPlanEdit);

  // Setup and append the homework plan text
  p.innerText = `${homeworkPlan.day} \n ___________________ \n\n Total Assignments: ${homeworkPlan.totalAssignments} \n\n Due Assignments: ${homeworkPlan.dueAssignments}  \n\n Initially Planned Assignments: ${homeworkPlan.initiallyPlannedAssignments}  \n\n Unplanned Due Assignments: ${homeworkPlan.dueAssignments} \n\n`;
  homeworkPlanEl.appendChild(p);

  // Setup and append the remove homework plan button
  button.textContent = "x";
  homeworkPlanEl.appendChild(button);
  // A good candidate to use an arrow function but NOT shorthand syntax
  button.addEventListener("click", () => {
    removeHomeworkPlan(homeworkPlan.id);
    saveHomeworkPlans(homeworkPlans);
    renderHomeworkPlans(homeworkPlans, filters);
  });

  return homeworkPlanEl;
};

// A good candidate to use an arrow function but NOT shorthand syntax
// Get the DOM elements for list summary
const generateSummaryDOM = (incompletehomeworkPlans) => {
  const total = document.createElement("h2");
  total.textContent = `You have ${incompletehomeworkPlans.length} homework plans left for the week!`;
  return total;
};

// A good candidate to use an arrow function but NOT shorthand syntax
const validateUserInput = (login, password) => {
  const messages = [];
  if (!login) {
    messages.push("Name is required");
  }

  if (password.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }

  if (password.length >= 20) {
    messages.push("Password must be less than 20 characters");
  }

  if (password === "password") {
    messages.push("Password cannot be password");
  }

  if (messages.length > 0) {
    document.getElementById("error").innerText = messages.join(", ");
    return false;
  }
  return true;
};

// A good candidate to use an arrow function and shorthand syntax
// Generate the last edited message
const generateLastEdited = (timestamp) =>
  `--->  Last edited ${moment(timestamp).fromNow()}`;
