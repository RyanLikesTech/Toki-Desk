// Memory boxes
let timeLeft = 25 * 60; // 25 minutes in seconds
let timerInterval = null;

// Grab elements from HTML
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

// Convert raw seconds to MM:SS format
function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

// Start Button
startBtn.addEventListener('click', function() {
  if (timerInterval !== null) return;
  
  timerInterval = setInterval(function() {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      alert('Time is up!');
    }
  }, 1000);
});

// Pause Button
pauseBtn.addEventListener('click', function() {
  clearInterval(timerInterval);
  timerInterval = null;
});

// Reset Button
resetBtn.addEventListener('click', function() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 25 * 60;
  updateDisplay();
});
