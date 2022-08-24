const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

// const startTimeDecision = function (hour) {
//   if (hour >= 8 && hour <= 20) {
//     return showOnPage(dailyDecision(hour));
//   } else {
//     return showOnPage("It is night time, go to bed.");
//   }
// };

// const dailyDecision = function (hour) {
//   if (hour >= 8 && hour < 9) {
//     const runningTime = "lets go for a run";
//     return `It's 8 a.m., ${runningTime}.`;
//   } else if (hour >= 9 && hour <= 10) {
//     const answerEmail = "time to check my emails";
//     return `It's 9 a.m. Okay, ${answerEmail}. After that, I'll have my lunch break.`;
//   } else if (hour > 10 && hour <= 11) {
//     const lunchBreakTime = "take lunch break";
//     return `I often skip breakfast and ${lunchBreakTime} around 11 a.m.`;
//   } else if (hour > 11 && hour <= 13) {
//     const availableTime = "have 1 hour free time";
//     return `It's 12 p.m., I ${availableTime}.`;
//   } else if (hour > 13 && hour < 15) {
//     const doHomework = "time to do some homework";
//     return `It's ${doHomework}`;
//   } else if (hour >= 15 && hour < 17) {
//     const zoomMeeting = "zoom meeting in 15:30";
//     return `It's 15 p.m., get ready for ${zoomMeeting}`;
//   } else {
//     const beforeSleep = "spend some time with my family, watch a movie, play ps5, etc.";
//     return `After doing all my homework and zoom meetings, now I can ${beforeSleep} before going to sleep.`;
//   }
// };

// startTimeDecision(9);

showOnPage(
  "<b>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Raz's Daily Desicions for Day / Homework Assignments</b>"
);
showOnPage(
  "<b>--------------------Homework Assignments Weekly Routine---------------------<b>"
);

// Week 4 Code. Object Method in use.
// Use of object here. And using const instead of let.
// Have a Monday to Friday for doing Homework Assignments.
// Code showing how my homework assignments routine goes Monday through Friday.
const dailyChoice = {
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
      this.partOfAssignments = this.partOfAssignments;
      showOnPage(
        `<b>Unexpected assignment for today. I need to work a little more than previously planned.</b>`
      );
    } else if (dueAssignment <= dailyScheduledAssignment) {
      this.partOfAssignments = this.partOfAssignments;
      showOnPage(
        `<b>There are no unexpected assignments, which will prevent me from continuing with my previously planned weekly routine.</b>`
      );
    }
  },
};
showOnPage(`<br><b>Homework Assignments Monday through Friday</b>`);
dailyChoice.homeworkCheck(35, "Monday Homework Assignments", 7, 7);
dailyChoice.homeworkCheck(28, "Tuesday Homework Assignments", 8, 7);
dailyChoice.homeworkCheck(20, "Wednesday Homework Assignments", 7, 7);
dailyChoice.homeworkCheck(13, "Thursday Homework Assignments", 7, 7);
dailyChoice.homeworkCheck(6, "Friday Homework Assignments", 6, 6);
showOnPage(
  `<b>${
    dailyChoice.assignmentQuantity - dailyChoice.partOfAssignments
  } homework assignments over the weekend Yay!! Will have a bit of free time to play video games!!</b>`
);
