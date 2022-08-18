const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

let startTimeDecision = function (hour) {
  if (hour >= 8 && hour <= 20) {
    return showOnPage(dailyDecision(hour));
  } else {
    return showOnPage("It is night time, go to bed.");
  }
};

let dailyDecision = function (hour) {
  if (hour >= 8 && hour < 9) {
    let runningTime = "lets go for a run";
    return `It's 8 a.m., ${runningTime}.`;
  } else if (hour >= 9 && hour <= 10) {
    let answerEmail = "time to check my emails";
    return `It's 9 a.m. Okay, ${answerEmail}. After that, I'll have my lunch break.`;
  } else if (hour > 10 && hour <= 11) {
    let lunchBreakTime = "take lunch break";
    return `I often skip breakfast and ${lunchBreakTime} around 11 a.m.`;
  } else if (hour > 11 && hour <= 13) {
    let availableTime = "have 1 hour free time";
    return `It's 12 p.m., I ${availableTime}.`;
  } else if (hour > 13 && hour < 15) {
    let doHomework = "time to do some homework";
    return `It's ${doHomework}`;
  } else if (hour >= 15 && hour < 17) {
    let zoomMeeting = "zoom meeting in 15:30";
    return `It's 15 p.m., get ready for ${zoomMeeting}`;
  } else {
    let beforeSleep = "spend some time with my family, watch a movie, play ps5, etc.";
    return `After doing all my homework and zoom meetings, now I can ${beforeSleep} before going to sleep.`;
  }
};

startTimeDecision(9);
