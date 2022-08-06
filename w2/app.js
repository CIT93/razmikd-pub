const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

let currentTime = 8;
let answerEmailsTime = 10;
let lunchBreakTime = 11;
let timeBeforeLunchBreak = lunchBreakTime - currentTime;
let availableTime = 0;
let doHomework = true;
let zoomMeeting = false;

if (doHomework) {
  availableTime = timeBeforeLunchBreak - 1.5;
} else {
  availableTime = timeBeforeLunchBreak - 0.3;
}

showOnPage("My Daily Desicions");
showOnPage(
  "<b>This is an explanation of my global data based on my daily desicions</b>"
);
showOnPage("Current Time" + " ---> " + currentTime + " a.m");
showOnPage("Checking my emails" + " ---> " + answerEmailsTime + " a.m");
showOnPage(
  "I often skip breakfast and take lunch break around" +
    " ---> " +
    lunchBreakTime +
    " a.m"
);
showOnPage("Free Time" + " ---> " + availableTime + " hours");
showOnPage("Do I need to do homework today" + " ---> " + doHomework);
showOnPage("Do I have zoom meeting today" + " ---> " + zoomMeeting);
showOnPage("----End of Global Veriable data----");

let message = "";
let list = "Buy and drink smooty <br><br>";
showOnPage("<b>Morning Tasks</b>");
showOnPage("___________________");

if (zoomMeeting) {
  list = list + "Check Time";
  message = "Need to attand zoom meeting.";
} else if (availableTime >= 2.2) {
  list = list + "Workout in the local park";
  message = "Exercise boosts my energy!";
} else if (availableTime >= 1 && availableTime <= 2.1) {
  list = list + "Running outside";
  message = "It helps me to maintain a healthy weight!";
} else {
  list = list + "Drink coffee";
  message = "Love enjoying morning coffee!";
}

// display list and message on the webpage

showOnPage(list);
showOnPage(message);
showOnPage("Have a great day!!");
