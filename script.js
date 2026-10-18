function go(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

let time = 1500, interval = null;
function update() {
  const m = String(Math.floor(time/60)).padStart(2,'0');
  const s = String(time%60).padStart(2,'0');
  document.getElementById('timer').textContent = `${m}:${s}`;
}

function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    if (time > 0) { time--; update(); }
    else { clearInterval(interval); interval = null; }
  }, 1000);
}

function resetTimer() {
  clearInterval(interval); interval = null;
  time = 1500; update();
}

document.getElementById('note').value = localStorage.getItem('note') || '';
// Load saved note on page load
const noteText = document.getElementById('note');
const savedDisplay = document.getElementById('saved-note-display');
noteText.value = localStorage.getItem('note') || '';
savedDisplay.innerText = noteText.value ? "Last saved: " + noteText.value : "";

function saveNote() {
  localStorage.setItem('note', noteText.value);
  // This updates the text on the screen instead of showing an alert
  savedDisplay.innerText = "Last saved: " + noteText.value;
}
