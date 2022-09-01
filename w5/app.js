const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

showOnPage(
  `<h3><b>---------------------> Raz's Daily Decisions <---------------------</b></h3>`
);

const dailyDecisions = [
  "Running time",
  "Answer emails",
  "Lunch break",
  "1 hour free time",
  "Zoom meeting",
  "Spend time with family and play ps5",
];

dailyDecisions.splice(3, 1, "Walk my dog");
dailyDecisions.push("Homework assignments");

showOnPage(
  `<b>I have ${dailyDecisions.length} daily things to do!</b> <br> ___________________`
);

dailyDecisions.forEach(function (dailyDecisions, index) {
  const num = index + 1;
  showOnPage(`${num}. ${dailyDecisions}`);
});

startTimeDecision = function (hour) {
  if (hour >= 8 && hour < 9) {
    return `It's 8 a.m., ${dailyDecisions[0]}.`;
  } else if (hour >= 9 && hour <= 10) {
    return `It's 9 a.m. Okay, it's time to ${
      dailyDecisions[dailyDecisions.length - 6]
    }. After that, I'll have my lunch break.`;
  } else if (hour > 10 && hour <= 11) {
    return `I often skip breakfast and take ${
      dailyDecisions[dailyDecisions.length - 5]
    } around 11 a.m.`;
  } else if (hour > 11 && hour <= 13) {
    return `It's 12 p.m., I have 1 hour free time lets ${
      dailyDecisions[dailyDecisions.length - 4]
    }.`;
  } else if (hour > 13 && hour < 15) {
    return `English class ${dailyDecisions[dailyDecisions.length - 3]}`;
  } else if (hour >= 15 && hour < 17) {
    return `It's 15 p.m., ${dailyDecisions[dailyDecisions.length - 2]}`;
  } else if (hour >= 17 && hour < 20) {
    return `It's 17 p.m., lets do some ${
      dailyDecisions[dailyDecisions.length - 1]
    }`;
  } else {
    return `It is night time, go to bed.`;
  }
};

showOnPage("<hr>");
showOnPage(
  `<b>--------------------->  ${startTimeDecision(
    17
  )}  <---------------------<b>`
);

const randomizeNum1 = function (min1, max1) {
  min1 = Math.ceil(min1);
  max1 = Math.floor(max1);
  return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
};

const randomizeNum2 = function (min2, max2) {
  min2 = Math.ceil(min2);
  max2 = Math.floor(max2);
  return Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
};

const randomizeNum3 = function (min3, max3) {
  min3 = Math.ceil(min3);
  max3 = Math.floor(max3);
  return Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
};

const guess1 = function (num) {
  if (num <= 7) {
    return `<b>There are no unexpected assignments, which will prevent me from continuing with my previously planned weekly routine.</b>`;
  } else if (num > 7) {
    return `<b>Unexpected assignment for today. I need to work a little more than previously planned.</b>`;
  }
};

const homeworkCheck = [
  {
    day: "Monday",
    totalAssignments: 35,
    dueAssignments: randomizeNum1(5, 10),
    initiallyPlannedAssignments: 7,
    unplannedDueAssignments: undefined,
  },
  {
    day: "Tuesday",
    totalAssignments: 28,
    dueAssignments: randomizeNum2(5, 10),
    initiallyPlannedAssignments: 7,
    unplannedDueAssignments: undefined,
  },
  {
    day: "Wednesday",
    totalAssignments: 21,
    dueAssignments: randomizeNum3(5, 10),
    initiallyPlannedAssignments: 7,
    unplannedDueAssignments: undefined,
  },
  {
    day: "Thursday",
    totalAssignments: 14,
    dueAssignments: randomizeNum1(5, 10),
    initiallyPlannedAssignments: 7,
    unplannedDueAssignments: undefined,
  },
  {
    day: "Friday",
    totalAssignments: 7,
    dueAssignments: randomizeNum2(5, 10),
    initiallyPlannedAssignments: 7,
    unplannedDueAssignments: undefined,
  },
];

const index = homeworkCheck.forEach(function (heading) {
  showOnPage(`<b>${heading.day}</b>`);
  showOnPage(
    `Total Assignments: ${heading.totalAssignments} <br><br> Due Assignments: ${
      heading.dueAssignments
    }
     <br><br> Initially Planned Assignments: ${
       heading.initiallyPlannedAssignments
     } <br><br> Unplanned Due Assignments: ${guess1(heading.dueAssignments)}`
  );
  showOnPage(`___________________`);
});

const allDone = function (assignmentQuantity, completedAssignments) {
  if (assignmentQuantity === completedAssignments) {
    return `<b>0 homework assignments over the weekend Yay!! Will have a bit of free time to play video games!!</b>`;
  } else {
    return `<b>You still have assignments to do</b>`;
  }
};

showOnPage(
  `<b>Saturday and Sunday Homework Assignments:</b> <br><br>${allDone(35, 35)}`
);
