let userInfo = getSavedUserInfo();

const homeworkPlans = getSavedHomeworkPlans();

const filters = {
  searchText: "",
  hideCompleted: false,
};

renderHomeworkPlans(homeworkPlans, filters);

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderHomeworkPlans(homeworkPlans, filters);
});

document.querySelector("#login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const login = e.target.elements.login.value;
  const password = e.target.elements.password.value;
  const isValidForm = validateUserInput(login, password);
  if (!isValidForm) {
    return;
  }
  userInfo = {
    id: uuidv4(),
    login: login,
    password,
  };
  saveUserInfo(userInfo);
  loginUser();
  showMainPage();
});

const loginUser = function () {
  userInfo.login = document.getElementById("login").value;
  userInfo.password = document.getElementById("password").value;
  document.getElementById("login-page").remove();
};

const showMainPage = function () {
  document.getElementById("main-page").style.display = "block";
  const fullName = document.createElement("h3");
  fullName.innerText = `Hi ${userInfo.login}!! \n\n Create a Homework plan for your day using the tool below.`;
  document.querySelector("#main-page").prepend(fullName);
};

document
  .querySelector("#add-homework-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    homeworkPlans.push({
      id: uuidv4(),
      day: e.target.elements.weekDays.value,
      totalAssignments: e.target.elements.totalAssignments.value,
      dueAssignments: e.target.elements.dueAssignments.value,
      initiallyPlannedAssignments:
        e.target.elements.initiallyPlannedAssignments.value,
      unplannedDueAssignments: e.target.elements.unplannedDueAssignments.value,
      completed: false,
    });
    saveHomeworkPlans(homeworkPlans);
    renderHomeworkPlans(homeworkPlans, filters);
    document.getElementById("week-days").value = "Monday";
    document.getElementById("total-assignments").value = "";
    document.getElementById("due-assignments").value = "";
    document.getElementById("initially-planned-assignments").value = "";
    document.getElementById("unplanned-due-assignments").value = "";
  });

document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked;
    renderHomeworkPlans(homeworkPlans, filters);
  });
