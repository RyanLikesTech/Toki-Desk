Afunction go(id) {
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
function saveNote() {
  localStorage.setItem('note', document.getElementById('note').value);
  alert('saved!');
}
