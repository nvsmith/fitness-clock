// Fetch the time
var time = new Date().getHours();

// Define timeEvent times
var wakeUpTime = 6; // 6am
var meal1 = 7; // 7am
var yogaTime = 8; // 8am
var meal2 = 12; // 12pm
var gymTime = 13; // 1pm
var meal3 = 15; // 3pm
var meal4 = 18; // 6pm
var meal5 = 20; // 8pm
var bedTime = 22; // 10pm
var beachTime;

var updateClock = function() {
  // Assign JS variables to HMTL elements
  var fitnessImageJS = document.getElementById('fitnessImage');
  var eventTitleJS = document.getElementById('eventTitle');
  var timeEventJS = document.getElementById('timeEvent');

  // Placeholder variables for dynamic content
  var messageImage;
  var messageTitle;
  var messageText;

  // Assign dynamic variables to time events
  if (time < wakeUpTime || time > bedTime) {
    messageTitle = "Shut it down";
    messageText = "Stop looking at the clock & go to sleep.";
    messageImage = "img/sleepTime.png"

  } else if (time == wakeUpTime) {
    messageTitle = "Wake Up";
    messageText = "Good morning, Starshine. The earth says hello.";
    messageImage = "img/wakeUpTime.jpg"

  } else if (time == meal1) {
    messageTitle = "Meal #1";
    messageText = "Brekkie.";
    messageImage = "img/meal1.JPG"

  } else if (time == yogaTime) {
    messageTitle = "Yoga Time";
    messageText = "Get down with the dog.";
    messageImage = "img/yogaTime.jpg"

  } else if (time == meal2) {
    messageTitle = "Meal #2";
    messageText = "Fuel up for the gym!";
    messageImage = "img/meal2.jpg"

  } else if (time == gymTime) {
    messageTitle = "Gym Time";
    messageText = "Date with the weights. Get to it!";
    messageImage = "img/gymTime.jpg"

  } else if (time == meal3) {
    messageTitle = "Meal #3";
    messageText = "Refuel. You've earned it, bud.";
    messageImage = "img/meal3.jpg"

  } else if (time == meal4) {
    messageTitle = "Meal #4";
    messageText = "Time to eat again.";
    messageImage = "img/meal4.jpg"

  } else if (time == meal5) {
    messageTitle = "Meal #5";
    messageText = "Chow down one last time.";
    messageImage = "img/meal5.jpg"

  } else if (time == bedTime) {
    messageTitle = "Bed Time";
    messageText = "Early to bed, early to rise, builds up your biceps, triceps, and thighs.";
    messageImage = "img/bedTime.jpg"

  } else if (time == beachTime) {
    messageTitle = "Surfs Up";
    messageText = "Have some fun in the sun. Because beaches, that's why.";
    messageImage = "img/beachTime.gif";

  } else {
    messageTitle = "Free Time";
    messageText = "Nothing scheduled right now. You're free as a bird.";
    messageImage = "img/fitness.jpg"
  }

  // Link timeEvent dynamic content to JS variable properties
  fitnessImageJS.src = messageImage;
  eventTitleJS.innerText = messageTitle;
  timeEventJS.innerText = messageText;

  showCurrentTime();
}; // end updateClock function

// Show the current time
var showCurrentTime = function() {
  // Link JS variables to HMTL elements
  var clockJS = document.getElementById('clock');

  // Fetch the time
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set meridian
  if (hours >= 12) {
    meridian = "PM";
  }

  // Convert 24-hr time to 12-hr time
  if (hours > 12) {
    hours = hours - 12;
  }

  // Format minutes/seconds as double digits
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var clockTime = hours + ":" + minutes + ":" + seconds + "\n" + meridian;

  // Assign clock innerText to the clockTime string
  clockJS.innerText = clockTime;

}; //end showCurrentTime function

updateClock();
var oneSecond = 1000; // 1000 JS miliseconds per 1 second

// Update the clock every second
var myInterval = setInterval(updateClock, oneSecond);

// Buttons & selectors to change dynamic message text/images
var beachTimeButtonJS = document.getElementById('beachTimeButton');
var wakeUpTimeSelectorJS = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelectorJS = document.getElementById("lunchTimeSelector");
var bedTimeSelectorJS = document.getElementById("bedTimeSelector");


// Button functions to choose the time on the page
var isbeachTime = false;
var beachEvent = function() {
  if (isbeachTime === false) {
    isbeachTime = true;
    time = beachTime;
    beachTimeButtonJS.innerText = "Click when it's time to go home";

  } else {
    isbeachTime = false;
    time = new Date().getHours();
    beachTimeButtonJS.innerText = "Click when it's beach o'clock";
  }
}; // end beachEvent function

var wakeUpEvent = function() {
  wakeUpTime = wakeUpTimeSelectorJS.value;
};

var lunchEvent = function() {
  meal2 = lunchTimeSelectorJS.value;
};

var bedTimeEvent = function() {
  bedTime = bedTimeSelectorJS.value;
};

// Event listeners for all buttons
beachTimeButtonJS.addEventListener("click", beachEvent)
wakeUpTimeSelectorJS.addEventListener('change', wakeUpEvent);
lunchTimeSelectorJS.addEventListener('change', lunchEvent);
bedTimeSelectorJS.addEventListener('change', bedTimeEvent);
