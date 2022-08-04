const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }
  
let startingTime = 8
let answerEmails = 10
let lunchBreak = 11
let freeTime = 12
let doHomework = true
let zoomMeeting = false


showOnPage('My Daily Desicions')
showOnPage('<b>This is an explanation of my global data based on my daily desicions</b>')
showOnPage('Starting my day' + ' ---> ' + startingTime + 'a.m')
showOnPage('Checking my emails' + ' ---> ' + answerEmails + 'a.m')
showOnPage('I often skip breakfast and take lunch break around' + ' ---> ' + lunchBreak + 'a.m')
showOnPage('Free Time' + ' ---> ' + freeTime)
showOnPage('Homework Time' + ' ---> ' + doHomework)
showOnPage('Zoom Meeting' + ' ---> ' + zoomMeeting)
showOnPage('----End of Global Veriable data----')


if (startingTime >= 8) {
    showOnPage('Lets start the day with a morning workout!')
}
 if (startingTime <= 7) {
    showOnPage('Its still too early to get out of bed.')
}


if (answerEmails) {
    showOnPage(answerEmails)
    let lunchBreak = 'Okay, now that I have finished checking my emails, its time for lunch.'
    showOnPage(lunchBreak)

    if (lunchBreak) {
       let freeTime = 'In my spare time, I enjoy listening to music. It helps in the improvement of brain function.'      
    }
}

// Using logical to determine and/or with if and else if

if (doHomework && zoomMeeting) {
    showOnPage('Oh no...Both zoom meeting and homework at the same time. I will get back to each at different times.')
} else if (doHomework || zoomMeeting) {
    showOnPage('I have until midnight to complete my homework.')
}


  showOnPage('Have a great day!!')
