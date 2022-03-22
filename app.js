let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let timerNumbers = document.querySelector("#timerNumbers");
let reset = document.querySelector("#reset");

let myTimer;
let myCounter = 0;
let mySeconds = 0;
let myMinutes = 0;

stopBtn.disabled = true;
reset.disabled = true;

startBtn.addEventListener("click", function () {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  reset.disabled = false;

  myTimer = setInterval(function () {
    myCounter++;
    mySeconds = myCounter;
    seconds.innerHTML = mySeconds;

    if (mySeconds > 59) {
      seconds.innerHTML = "00";
      myCounter = 0;
      myMinutes++;
      minutes.innerHTML = myMinutes;
    } else if (mySeconds > 9) {
      seconds.innerHTML = mySeconds;
    } else {
      seconds.innerHTML = "0" + mySeconds;
    }
    if (myMinutes > 59) {
      clearInterval(myTimer);
    } else if (myMinutes > 9) {
      minutes.innerHTML = myMinutes;
    } else {
      minutes.innerHTML = "0" + myMinutes;
    }
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(myTimer);
  startBtn.disabled = false;
});

reset.addEventListener("click", function () {
  startBtn.disabled = false;
  clearInterval(myTimer);
  myTimer = 0;
  myCounter = 0;
  myMinutes = 0;
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
});
