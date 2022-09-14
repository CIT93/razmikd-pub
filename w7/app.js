document.querySelector("button").addEventListener(
  "click",
  function (e) {
    e.target.textContent = "Button clicked";

    const header = document.createElement("h1");
    header.textContent = `---------------------> Raz's Daily Decisions <---------------------`;
    document.querySelector("#output").appendChild(header);

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

    dailyDecisions.forEach(function (dailyDecision) {
      const li = document.createElement("li");
      li.textContent = dailyDecision;
      document.querySelector("#output").appendChild(li);
    });

    const totalToDo = document.createElement("h4");
    totalToDo.textContent = `I have ${dailyDecisions.length} daily things to do!`;
    document.querySelector("#output").appendChild(totalToDo);

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

    const toDoTime = document.createElement("h4");
    toDoTime.textContent = `---------------------> ${startTimeDecision(
      17
    )} <---------------------`;
    document.querySelector("#output").appendChild(toDoTime);

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

    homeworkCheck.forEach(function (heading) {
      const div = document.createElement("div");
      div.innerText = `${
        heading.day
      } \n ___________________ \n\n Total Assignments: ${
        heading.totalAssignments
      } \n\n Due Assignments: ${
        heading.dueAssignments
      } \n\n Initially Planned Assignments: ${
        heading.initiallyPlannedAssignments
      } \n\n Unplanned Due Assignments: ${guess(heading.dueAssignments)} \n\n`;
      document.querySelector("#output").appendChild(div);
    });

    const allDone = function (assignmentQuantity, completedAssignments) {
      if (assignmentQuantity === completedAssignments) {
        return `0 homework assignments over the weekend Yay!! Will have a bit of free time to play video games!!`;
      } else {
        return `You still have assignments to do`;
      }
    };

    const summary = document.createElement("h4");
    summary.innerText = `${allDone(35, 35)}`;
    document.querySelector("#output").appendChild(summary);
  },
  { once: true }
);
