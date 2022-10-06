// Fetch existing getSavedUserInfo from localStorage
const getSavedUserInfo = function () {
  const userInfoJSON = localStorage.getItem("userInfo");

  if (userInfoJSON !== null) {
    return JSON.parse(userInfoJSON);
  } else {
    return [];
  }
};

// Save saveUserInfo to localStorage
const saveUserInfo = function (userInfo) {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

// Fetch existing homework plans from localStorage
const getSavedHomeworkPlans = function () {
  const homeworkPlansJSON = localStorage.getItem("homeworkPlans");

  if (homeworkPlansJSON !== null) {
    return JSON.parse(homeworkPlansJSON);
  } else {
    return [];
  }
};

// Save homework plans to localStorage
const saveHomeworkPlans = function (homeworkPlans) {
  localStorage.setItem("homeworkPlans", JSON.stringify(homeworkPlans));
};

// Remove a homework plan from the list by id
const removeHomeworkPlan = function (id) {
  const homeworkPlanIndex = homeworkPlans.findIndex(function (homeworkPlan) {
    return homeworkPlan.id === id;
  });

  if (homeworkPlanIndex > -1) {
    homeworkPlans.splice(homeworkPlanIndex, 1);
  }
};

// Toggle the completed value for a given homework plan
const toggleHomeworkPlan = function (id) {
  const homeworkPlan = homeworkPlans.find(function (homeworkPlan) {
    return homeworkPlan.id === id;
  });

  if (homeworkPlan !== undefined) {
    homeworkPlan.completed = !homeworkPlan.completed;
  }
};

// Render application homework plans based on filters
const renderHomeworkPlans = function (homeworkPlans, filters) {
  const filteredHomeworkPlans = homeworkPlans.filter(function (homeworkPlan) {
    const searchTextMatch = homeworkPlan.day
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch =
      !filters.hideCompleted || !homeworkPlan.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompletehomeworkPlans = filteredHomeworkPlans.filter(function (
    homeworkPlan
  ) {
    return !homeworkPlan.completed;
  });

  document.querySelector("#homework-plans").innerHTML = "";
  document
    .querySelector("#homework-plans")
    .appendChild(generateSummaryDOM(incompletehomeworkPlans));

  filteredHomeworkPlans.forEach(function (homeworkPlan) {
    document
      .querySelector("#homework-plans")
      .appendChild(generatehomeworkPlanDOM(homeworkPlan));
  });
};

// Get the DOM elements for an individual homework plan
const generatehomeworkPlanDOM = function (homeworkPlan) {
  const homeworkPlanEl = document.createElement("div");
  const checkbox = document.createElement("input");
  const p = document.createElement("span");
  const button = document.createElement("button");
  button.setAttribute("id", "button-id");

  // Setup and append a checkbox (set type attribute)
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "checkbox-id");
  checkbox.checked = homeworkPlan.completed;
  homeworkPlanEl.appendChild(checkbox);
  checkbox.addEventListener("change", function () {
    toggleHomeworkPlan(homeworkPlan.id);
    saveHomeworkPlans(homeworkPlans);
    renderHomeworkPlans(homeworkPlans, filters);
  });

  // Setup and append the homework plan text
  p.innerText = `${homeworkPlan.day} \n ___________________ \n\n Total Assignments: ${homeworkPlan.totalAssignments} \n\n Due Assignments: ${homeworkPlan.dueAssignments}  \n\n Initially Planned Assignments: ${homeworkPlan.initiallyPlannedAssignments}  \n\n Unplanned Due Assignments: ${homeworkPlan.dueAssignments} \n\n`;
  homeworkPlanEl.appendChild(p);

  // Setup and append the remove homework plan button
  button.textContent = "x";
  homeworkPlanEl.appendChild(button);
  button.addEventListener("click", function () {
    removeHomeworkPlan(homeworkPlan.id);
    saveHomeworkPlans(homeworkPlans);
    renderHomeworkPlans(homeworkPlans, filters);
  });

  return homeworkPlanEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompletehomeworkPlans) {
  const total = document.createElement("h2");
  total.textContent = `You have ${incompletehomeworkPlans.length} homework plans left for the week!`;
  return total;
};

const validateUserInput = function (login, password) {
  const messages = [];
  if (login === "" || login == null) {
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
