const userInfo = {
  firstName: "",
  lastName: "",
};

const homeworkCheck = [
  {
    day: "",
    totalAssignments: "",
    dueAssignments: "",
    initiallyPlannedAssignments: "",
    unplannedDueAssignments: "",
  },
];

const loginUser = function () {
  userInfo.firstName = document.getElementById("first-name").value;
  userInfo.lastName = document.getElementById("last-name").value;
  document.getElementById("login-page").remove();
};

const addNewHomework = function () {
  homeworkCheck.push({
    day: document.getElementById("week-days").value,
    totalAssignments: document.getElementById("total-assignments").value,
    dueAssignments: document.getElementById("due-assignments").value,
    initiallyPlannedAssignments: document.getElementById(
      "initially-planned-assignments"
    ).value,
    unplannedDueAssignments: document.getElementById(
      "unplanned-due-assignments"
    ).value,
  });
  document.getElementById("week-days").value = "Monday";
  document.getElementById("total-assignments").value = "";
  document.getElementById("due-assignments").value = "";
  document.getElementById("initially-planned-assignments").value = "";
  document.getElementById("unplanned-due-assignments").value = "";
};

const showHomeworks = function (day) {
  const homeworksOutput = document.getElementById("homeworks-output");
  homeworksOutput.innerHTML = "";
  const homeworks = homeworkCheck.filter(function (homework) {
    return homework.day === day;
  });
  for (let i = 0; i < homeworks.length; i++) {
    const homework = homeworks[i];
    const paragraph = document.createElement("p");
    paragraph.innerText = `${homework.day} \n ___________________ \n\n Total Assignments: ${homework.totalAssignments} \n\n Due Assignments: ${homework.dueAssignments}  \n\n Initially Planned Assignments: ${homework.initiallyPlannedAssignments}  \n\n Unplanned Due Assignments: ${homework.dueAssignments} \n\n`;
    homeworksOutput.append(paragraph);
  }
  document.getElementById("homework-list-week-days").value = "Monday";
};

const showMainPage = function () {
  document.getElementById("main-page").style.visibility = "visible";
  const fullName = document.createElement("h3");
  fullName.innerText = `Hi ${userInfo.firstName} ${userInfo.lastName}!!! \n Create a Homework plan for your day using the tool below.`;
  document.querySelector("#main-page").append(fullName);
};

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  loginUser();
  showMainPage();
});

const createHomework = document.getElementById("add-new-homework-form");

createHomework.addEventListener("submit", function (e) {
  e.preventDefault();
  addNewHomework();
});

const showHomework = document.getElementById("show-homeworks");

showHomework.addEventListener("click", function (e) {
  const day = document.querySelector("#homework-list-week-days");
  showHomeworks(day.value);
});
