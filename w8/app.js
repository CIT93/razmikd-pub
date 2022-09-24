let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let weekDay = document.getElementById("week-days").value;
  const p1 = document.createElement("span");
  p1.textContent = `Hi ${firstName} ${lastName}! Check your ${weekDay} homework assignments below.`;
  document.querySelector("#summary").prepend(p1);
  const heading = document.createElement("h3");
  heading.textContent = `Hi ${firstName} here is your Todo List!`;
  printWeekDayInfo(weekDay)
  document.querySelector("header").appendChild(heading);
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("week-days").value = "Monday";
});

const randomizeNum = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const guess = function (num) {
  if (num <= 7) {
    return `There are no unexpected assignments, which will prevent me from continuing with my previously planned weekly routine.`;
  } else if (num > 7) {
    return `Unexpected assignment for today. I need to work a little more than previously planned.`;
  }
};

const homeworkCheck = [
  {
    day: "Monday",
    totalAssignments: 35,
    dueAssignments: randomizeNum(5, 10),
    initiallyPlannedAssignments: 7,
    unplannedDueAssignments: undefined,
  },
  {
    day: "Tuesday",
    totalAssignments: 28,
    dueAssignments: randomizeNum(5, 10),
    initiallyPlannedAssignments: 7,
    unplannedDueAssignments: undefined,
  },
  {
    day: "Wednesday",
    totalAssignments: 21,
    dueAssignments: randomizeNum(5, 10),
    initiallyPlannedAssignments: 7,
    unplannedDueAssignments: undefined,
  },
  {
    day: "Thursday",
    totalAssignments: 14,
    dueAssignments: randomizeNum(5, 10),
    initiallyPlannedAssignments: 7,
    unplannedDueAssignments: undefined,
  },
  {
    day: "Friday",
    totalAssignments: 7,
    dueAssignments: randomizeNum(5, 10),
    initiallyPlannedAssignments: 7,
    unplannedDueAssignments: undefined,
  },
  {
    day: "Saturday",
    totalAssignments: 0,
    dueAssignments: 0,
    initiallyPlannedAssignments: 0,
    unplannedDueAssignments: undefined,
  },
  {
    day: "Sunday",
    totalAssignments: 0,
    dueAssignments: 0,
    initiallyPlannedAssignments: 0,
    unplannedDueAssignments: undefined,
  },
];


const printWeekDayInfo = function (weekDay) {
  const homeworkForDay = document.createElement("section");
  const homeworkInfo = homeworkCheck.find(function (a) {
    return a.day === weekDay
  })
homeworkForDay.innerText = `${
  homeworkInfo.day
} \n ___________________ \n\n Total Assignments: ${
  homeworkInfo.totalAssignments
} \n\n Due Assignments: ${
  homeworkInfo.dueAssignments
}  \n\n Initially Planned Assignments: ${
  homeworkInfo.initiallyPlannedAssignments
}  \n\n Unplanned Due Assignments: ${guess(
  homeworkInfo.dueAssignments
)} \n\n`;
document.querySelector("#output").appendChild(homeworkForDay);

}


const dailyDecisions = [
  {
    text: "Running time",
    completed: true,
  },
  {
    text: "Email check",
    completed: true,
  },
  {
    text: "Lunch break",
    completed: true,
  },
  {
    text: "Walk my dog",
    completed: true,
  },
  {
    text: "Spend time with family and play ps5",
    completed: true,
  },
  {
    text: "Zoom meeting",
    completed: false,
  },
  {
    text: "Do Homework",
    completed: false,
  },
];

const filters = {
  searchText: "",
  hideCompleted: false,
};

const renderTodos = function (dailyDecisions, filters) {
  const filteredTodos = dailyDecisions.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteDailyDecisions = filteredTodos.filter(function (
    dailyDecision
  ) {
    return !dailyDecision.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  const total = document.createElement("h4");
  total.textContent = `You have ${incompleteDailyDecisions.length} daily decisions left for today!`;
  document.querySelector("#todos").appendChild(total);

  filteredTodos.forEach(function (dailyDecision) {
    const p = document.createElement("p");
    p.textContent = dailyDecision.text;
    document.querySelector("#todos").appendChild(p);
  });
};

renderTodos(dailyDecisions, filters);

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(dailyDecisions, filters);
});

document
  .querySelector("#add-todo-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    dailyDecisions.push({
      text: e.target.elements.newTodo.value,
      completed: false,
    });
    renderTodos(dailyDecisions, filters);
    e.target.elements.newTodo.value = "";
  });

document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(dailyDecisions, filters);
  });