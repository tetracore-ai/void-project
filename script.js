import { levels } from './levelData.js';

const bars = [
  document.getElementById("bar1"),
  document.getElementById("bar2"),
  document.getElementById("bar3")
];

const liquid = document.getElementById("liquidFill");
const taskDesc = document.getElementById("taskDescription");

// Update neon bars
function updateBars() {
  levels.forEach((lvl, idx) => {
    bars[idx].querySelector(".percent").textContent = lvl.progress + "%";
  });
}

// Update task
function updateTask(levelId) {
  const lvl = levels.find(l => l.id === levelId);
  if (lvl) {
    taskDesc.textContent = lvl.task;
    liquid.style.height = lvl.progress + "%";
  }
}

// Simulate progress increase every 2 seconds
let currentLevel = 1;
setInterval(() => {
  const lvl = levels.find(l => l.id === currentLevel);
  if (lvl.progress < 100) {
    lvl.progress += 5;
    updateBars();
    updateTask(currentLevel);
  } else if (currentLevel < levels.length) {
    currentLevel++;
  }
}, 2000);

// Placeholder for 3D human module rotation (use Canvas or three.js later)
const canvas = document.getElementById("humanCanvas");
const ctx = canvas.getContext("2d");
function drawHuman() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,255,255,0.3)";
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, 50, 0, Math.PI*2);
  ctx.fill();
  requestAnimationFrame(drawHuman);
}
drawHuman();