const backMainPageButton = document.querySelector("#back-main-page");

// A good candidate to use an arrow function and shorthand syntax
backMainPageButton.addEventListener("click", () =>
  location.assign("index.html")
);

const updateHomeworkPlanForm = document.getElementById(
  "update-existing-homework-plan"
);
const homeworkPlanId = location.hash.substring(1);

// A good candidate to use an arrow function but not shorthand syntax
updateHomeworkPlanForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const timestamp = moment().valueOf();
  const updatedHomework = {
    id: homeworkPlanId,
    day: document.getElementById("week-days").value,
    totalAssignments: document.getElementById("total-assignments").value,
    dueAssignments: document.getElementById("due-assignments").value,
    initiallyPlannedAssignments: document.getElementById(
      "initially-planned-assignments"
    ).value,
    unplannedDueAssignments: document.getElementById(
      "unplanned-due-assignments"
    ).value,
    completed: false,
    updatedAt: timestamp,
  };
  location.assign("index.html");
  const homeworkPlans = JSON.parse(localStorage.getItem("homeworkPlans"));
  // A good candidate to use an arrow function but not shorthand syntax
  const updatedHomeworkPlans = homeworkPlans.map((homeworkPlan) => {
    if (homeworkPlan.id === homeworkPlanId) {
      updatedHomework.createdAt = homeworkPlan.createdAt;
      return updatedHomework;
    }
    return homeworkPlan;
  });
  localStorage.setItem("homeworkPlans", JSON.stringify(updatedHomeworkPlans));
  document.getElementById("week-days").value = "Monday";
  document.getElementById("total-assignments").value = "";
  document.getElementById("due-assignments").value = "";
  document.getElementById("initially-planned-assignments").value = "";
  document.getElementById("unplanned-due-assignments").value = "";
});

const deleteButton = document.querySelector(
  "#remove-homeworkplans-from-edit-page"
);

// A good candidate to use an arrow function but not shorthand syntax
deleteButton.addEventListener("click", (e) => {
  e.preventDefault();
  const homeworkPlans = JSON.parse(localStorage.getItem("homeworkPlans"));
  // A good candidate to use an arrow function but not shorthand syntax
  const homeworkPlanIndex = homeworkPlans.findIndex((homeworkPlan) => {
    if (homeworkPlan.id == homeworkPlanId) {
      return true;
    }
    return false;
  });
  if (homeworkPlanIndex > -1) {
    homeworkPlans.splice(homeworkPlanIndex, 1);
  }
  localStorage.setItem("homeworkPlans", JSON.stringify(homeworkPlans));
  location.assign("index.html");
});

// A good candidate to use an arrow function but not shorthand syntax
const showLastUpdatedDate = () => {
  const homeworkPlans = JSON.parse(localStorage.getItem("homeworkPlans"));
  // A good candidate to use an arrow function but not shorthand syntax
  const homeworkPlan = homeworkPlans.find((item) => {
    if (item.id === homeworkPlanId) {
      return true;
    }
    return false;
  });
  document.getElementById("span-element").innerText = generateLastEdited(
    homeworkPlan.updatedAt
  );
};

showLastUpdatedDate();
