const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

showOnPage(
  "<b>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Raz's Daily Decisions for Day</b>"
);

//Creating an object called dailyChoice.dailyDecision that contains the different types of things I am doing during a day.
//Using a method to determine the time and select what thing I has to do based on the time.
const dailyChoice = {
  dailyDecision: {
    runningTime: "lets go for a run",
    answerEmail: "time to check my emails",
    lunchBreakTime: "take lunch break",
    availableTime: "have 1 hour free time",
    doHomework: "time to do some homework",
    zoomMeeting: "zoom meeting in 15:30",
    beforeSleep:
      "spend some time with my family, watch a movie, play ps5, etc.",
  },
  assignmentQuantity: 0,
  partOfAssignments: 0,

  homeworkCheck: function (
    totalAssignment,
    daysOfWeek,
    dueAssignment,
    dailyScheduledAssignment
  ) {
    showOnPage(`<b>${daysOfWeek}:</b>`);
    showOnPage(`Total ${totalAssignment} assignments left for the week.`);
    showOnPage(`There are ${dueAssignment} assignments due tonight 11.59pm.`);
    showOnPage(
      `Initially ${dailyScheduledAssignment} assignments planned to completed for today.`
    );
    if (dueAssignment > dailyScheduledAssignment) {
      showOnPage(
        `<b>Unexpected assignment for today. I need to work a little more than previously planned.</b>`
      );
    } else if (dueAssignment <= dailyScheduledAssignment) {
      showOnPage(
        `<b>There are no unexpected assignments, which will prevent me from continuing with my previously planned weekly routine.</b>`
      );
    }
  },
  startTimeDecision: function (hour) {
    if (hour >= 8 && hour < 9) {
      return `It's 8 a.m., ${dailyChoice.dailyChoice.dailyDecision.runningTime}.`;
    } else if (hour >= 9 && hour <= 10) {
      return `It's 9 a.m. Okay, ${dailyChoice.dailyDecision.answerEmail}. After that, I'll have my lunch break.`;
    } else if (hour > 10 && hour <= 11) {
      return `I often skip breakfast and ${dailyChoice.dailyDecision.lunchBreakTime} around 11 a.m.`;
    } else if (hour > 11 && hour <= 13) {
      return `It's 12 p.m., I ${dailyChoice.dailyDecision.availableTime}.`;
    } else if (hour > 13 && hour < 15) {
      return ` ----> It's ${dailyChoice.dailyDecision.doHomework} <---- `;
    } else if (hour >= 15 && hour < 17) {
      return `It's 15 p.m., get ready for ${dailyChoice.dailyDecision.zoomMeeting}`;
    } else if (hour >= 17 && hour < 20) {
      return `After doing all my homework and zoom meetings, now I can ${dailyChoice.dailyDecision.beforeSleep} before going to sleep.`;
    } else {
      return `It is night time, go to bed.`;
    }
  },
};

showOnPage(dailyChoice.startTimeDecision(14));

showOnPage(
  "<b>--------------------Homework Assignments Weekly Routine---------------------<b>"
);

// Have a Monday to Friday for doing Homework Assignments.
// Code showing how my homework assignments routine goes Monday through Friday.

const makeGuess1 = {
  min1: 7,
  max1: 10,
  randomizeNum1: function () {
    return (makeGuess1.randomizeNum1 =
      Math.floor(Math.random() * (makeGuess1.max1 - makeGuess1.min1 + 1)) +
      makeGuess1.min1);
  },
};

const makeGuess2 = {
  min2: 7,
  max2: 10,
  randomizeNum2: function () {
    return (makeGuess2.randomizeNum2 =
      Math.floor(Math.random() * (makeGuess2.max2 - makeGuess2.min2 + 1)) +
      makeGuess2.min2);
  },
};

const makeGuess3 = {
  min3: 7,
  max3: 10,
  randomizeNum3: function () {
    return (makeGuess3.randomizeNum3 =
      Math.floor(Math.random() * (makeGuess3.max3 - makeGuess3.min3 + 1)) +
      makeGuess3.min3);
  },
};

console.log(makeGuess1.randomizeNum1());
console.log(makeGuess2.randomizeNum2());
console.log(makeGuess3.randomizeNum3());

showOnPage(`<br><b>Homework Assignments Monday through Friday</b>`);
dailyChoice.homeworkCheck(35, "Monday Homework Assignments", makeGuess1.randomizeNum1, 7);
dailyChoice.homeworkCheck(28, "Tuesday Homework Assignments", makeGuess2.randomizeNum2, 7);
dailyChoice.homeworkCheck(20, "Wednesday Homework Assignments", makeGuess3.randomizeNum3, 7);
dailyChoice.homeworkCheck(13, "Thursday Homework Assignments", makeGuess1.randomizeNum1, 7);
dailyChoice.homeworkCheck(6, "Friday Homework Assignments", makeGuess2.randomizeNum2, 6);
showOnPage(
  `<b>${
    dailyChoice.assignmentQuantity - dailyChoice.partOfAssignments
  } homework assignments over the weekend Yay!! Will have a bit of free time to play video games!!</b>`
);

// const min1 = 7;
// const max1 = 10;
// const randomNum1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;

// const min2 = 7;
// const max2 = 10;
// const randomNum2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;

// const min3 = 7;
// const max3 = 10;
// const randomNum3 = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
