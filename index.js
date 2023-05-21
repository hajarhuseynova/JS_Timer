const timerDiv = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
let milliseconds = 0;
let timeInterval = null;
let minute = 0;
let second = 0;
let millisecond = 0;
startButton.addEventListener("click", () => {
  updateTime();
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  if (timeInterval) {
    return;
  }
  timeInterval = setInterval(updateTime);
});
stopButton.addEventListener("click", () => {
  clearInterval(timeInterval);
  timeInterval = null;
  stopButton.disabled = true;
  startButton.disabled = false;
  resetButton.disabled = false;
});
resetButton.addEventListener("click", () => {
  resetButton.disabled = true;
  startButton.disabled = false;
  clearInterval(timeInterval);
  timeInterval = null;
  milliseconds = 0;
  timerDiv.textContent = "00:00:000";
});
function updateTime() {
  milliseconds += 10;
  minute = Math.floor(milliseconds / 60000);
  second = Math.floor((milliseconds - minute * 60000) / 1000);
  millisecond = milliseconds % 1000;
  if (minute > 59) {
    minute = 59;
    second = 59;
    millisecond = 999;
    clearInterval(timeInterval);
    timeInterval = null;
    startButton.disabled = true;
    stopButton.disabled = true;
    resetButton.disabled = false;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  if (millisecond < 100) {
    millisecond = "0" + millisecond;
  }
  timerDiv.textContent = `${minute}:${second}:${millisecond}`;
}
