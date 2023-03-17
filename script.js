
// get references to the HTML elements
const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");

// initialize the stopwatch variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

// function to display the time
function displayTime() {
  timeDisplay.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// function to start the stopwatch
function start() {
  // enable pause and stop buttons, disable start button
  pauseButton.disabled = false;
  stopButton.disabled = false;
  startButton.disabled = true;

  // increment the timer every second
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    displayTime();
  }, 1000);
}

// function to pause the stopwatch
function pause() {

  // stop the timer and update the button text
  clearInterval(timer);
  pauseButton.innerHTML = "Continue";
  pauseButton.onclick = continueTimer;
}

// function to continue the stopwatch after pause
function continueTimer() {
  // start the timer again and update the button text
  pauseButton.innerHTML = "Pause";
  pauseButton.onclick = pause;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    displayTime();
  }, 1000);
}

// function to stop the stopwatch
function stop() {
  // reset the variables and display, disable pause and stop buttons, enable start button
  setTimeout(timer);
//   clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  displayTime();
  pauseButton.innerHTML = "Pause";
  pauseButton.disabled = true;
  stopButton.disabled = true;
  startButton.disabled = false;
}

// initialize the display with 00:00:00
displayTime();
