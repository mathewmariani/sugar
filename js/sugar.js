const palette = [
  "#ff9ff3",
  "#feca57",
  "#ff6b6b",
  "#48dbfb",
  "#1dd1a1"
];

const hearts = ["🩷", "💛", "❤️", "🩵", "💚"];

let initialized = false;

function initSugar() {
  if (initialized) {
    return;
  }

  initialized = true;

  const index = Math.floor(Math.random() * palette.length);
  const root = document.documentElement;
  
  root.style.setProperty("--highlight-color", palette[index]);

  const el = document.getElementById("with-love");
  if (el) {
    el.textContent = hearts[index];
  }

  window.addEventListener("mousedown", () => {
    const next = palette.shift();
    if (!next) {
      return;
    }
    root.style.setProperty("--highlight-background", next);
    palette.push(next);
  });
}

// Auto-run
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initSugar);
  } else {
    initSugar();
  }
}