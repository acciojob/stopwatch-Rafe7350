//your code here
// let startTime = 0;
// let timerInterval = null;

// const timerElement = document.getElementById('timer');
// const startButton = document.getElementById('start');
// const pauseButton = document.getElementById('pause');
// const stopButton = document.getElementById('stop');

// startButton.addEventListener('click', startTimer);
// pauseButton.addEventListener('click', pauseTimer);
// stopButton.addEventListener('click', stopTimer);

// function startTimer() {
//   startTime = Date.now();
//   timerInterval = setInterval(updateTimer, 10);
//   startButton.disabled = true;
//   pauseButton.disabled = false;
//   stopButton.disabled = false;
// }

// function pauseTimer() {
//   if (timerInterval) {
//     clearInterval(timerInterval);
//     timerInterval = null;
//     pauseButton.innerText = 'Continue';
//   } else {
//     startTime = Date.now() - getElapsedMilliseconds();
//     timerInterval = setInterval(updateTimer, 10);
//     pauseButton.innerText = 'Pause';
//   }
// }

// function stopTimer() {
//   clearInterval(timerInterval);
//   timerInterval = null;
//   startTime = 0;
//   updateTimer();
//   startButton.disabled = false;
//   pauseButton.disabled = true;
//   pauseButton.innerText = 'Pause';
//   stopButton.disabled = true;
// }

// function updateTimer() {
//   const elapsedMilliseconds = getElapsedMilliseconds();
//   const timeString = millisecondsToTimeString(elapsedMilliseconds);
//   timerElement.innerText = timeString;
// }

// function getElapsedMilliseconds() {
//   return Date.now() - startTime;
// }

// function millisecondsToTimeString(milliseconds) {
//   const totalSeconds = Math.floor(milliseconds / 1000);
//   const hours = Math.floor(totalSeconds / 3600);
//   const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
//   const seconds = totalSeconds - (hours * 3600) - (minutes * 60);
//   const hoursString = padZero(hours, 2);
//   const minutesString = padZero(minutes, 2);
//   const secondsString = padZero(seconds, 2);
//   return `${hoursString}:${minutesString}:${secondsString}`;
// }

// function padZero(number, length) {
//   return String(number).padStart(length, '0');
// }

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

 pauseButton.disabled = true;
  stopButton.disabled = false;
  startButton.disabled = false;

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
  clearInterval(timer);
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
