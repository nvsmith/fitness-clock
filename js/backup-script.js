// Define time events
var noon = 12; //12 pm
var wakeupTime = 6; // 6am
var meal1 = 7; // 7am
var yogaTime = 8; // 8am
var meal2 = 12; // 12pm
var gymTime = 13; // 1pm
var meal3 = 15; // 3pm
var partyTime; // 4pm
var meal4 = 18; // 6pm
var meal5 = 20; // 8pm
var bedTime = 22; // 10pm


// Fetch the time (hour)
var hour = new Date().getHours();



// Define global variables
var timeEventJS = document.getElementById('timeEvent');
var messageText; // dynamic texts

var fitnessImageJS = document.getElementById('fitnessImage');
var messageImage; // dynamic images

// Assign time events to message variables
if (hour < 6 || hour > 22) {
  messageText = "Stop looking at the clock and go to sleep.";
  messageImage = "img/sleepTime.png"

} else if (hour == 6) {
  messageText = "Good morning, Starshine. The earth says hello.";
  messageImage = "img/wakeTime.jpg"

} else if (hour == 7) {
  messageText = "Brekkie.";
  messageImage = "img/meal.JPG"

} else if (hour == 8) {
  messageText = "Get down with the dog. It's time to yoga";
  messageImage = "img/yogaTime.jpg"

} else if (hour == 12) {
  messageText = "Fuel up for the gym!";
  messageImage = "img/meal.jpg"

} else if (hour == 13) {
  messageText = "Date with the weights. Get to it!";
  messageImage = "img/gymTime.JPG"

} else if (hour == 15) {
  messageText = "Refuel. You've earned it.";
  messageImage = "img/meal.jpg"

} else if (hour == 18) {
  messageText = "Time to eat again";
  messageImage = "img/meal.jpg"

} else if (hour == 20) {
  messageText = "Chow down one last time.";
  messageImage = "img/meal.jpg"

} else if (hour == 22) {
  messageText = "Early to bed, early to rise, builds up your biceps, triceps, and thighs.";
  messageImage = "img/bedTime.jpg"

} else {
  messageText = "Free as a bird.";
  messageImage = "img/fitness.jpg"
}

// Party Time Button
var partyTimeButton = document.getElementById("partyTimeButton");

var isPartyTime = false;

var partyEvent = function() {

  if (isPartyTime === false) {
    isPartyTime = true;
    // hour = partyTime;
    timeEventJS.innerText = "Fun in the sun. Because beaches that's why."
    partyTimeButton.innerText = "Click when it's time to go home.";
    fitnessImageJS.src = "img/beachTime.gif";

    // partyTimeButton.style.backgroundColor = "gray";
  } else {
    isPartyTime = false;
    // hour = new Date().getHours();
    timeEventJS.innerText = messageText;
    partyTimeButton.innerText = "Click when it's beach o'clock.";
    fitnessImageJS.src = messageImage;
    // partyTimeButton.style.backgroundColor = "#0A8DAB";
  }
};

partyTimeButton.addEventListener('click', partyEvent);

// Link dynamic content to JS variable properties
timeEventJS.innerText = messageText;
fitnessImageJS.src = messageImage;

// Get the clock to update on its own
var updateClock = function() {

  // The Clock
  var showCurrentTime = function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set meridian
    if (hours >= 12) {
      meridian = "PM";
    }

    // Convert from military time to AM/PM
    if (hours > 12) {
      hours = hours - 12;
    }

    // Set double digit Minutes
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    // Set double digit Seconds
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    // Put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

    // Display the string on the webpage
    var clockJS = document.getElementById('clock');
    clockJS.innerText = clockTime;
  };
  showCurrentTime();
}; // end of update clock function

updateClock(); // call the updateClock function

var oneSecond = 1000; // convert JS milliseconds to 1 second
setInterval(updateClock, oneSecond); // pass the updateClock function to a built-in function with the desired interval.
