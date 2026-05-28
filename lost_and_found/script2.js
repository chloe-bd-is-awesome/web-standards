const pins = document.querySelectorAll(".pin");
const btn = document.getElementById("toggle-all-btn");

// Randomly place each pin on the pinboard
const pinboard = document.querySelector(".pinboard");

pins.forEach((pin) => {
  const boardW = pinboard.offsetWidth || window.innerWidth;
  const boardH = window.innerHeight;
  const pinH = pin.offsetHeight || 60;
  const pinW = pin.offsetWidth || 100;

  const x = 100 + Math.random() * (boardW - pinW - 200);
  const y = 40 + Math.random() * (boardH - pinH - 200);

  pin.style.left = `${x}px`;
  pin.style.top = `${y}px`;
});

// Toggle ALL pins between image and text mode
let allText = false;

function toggleAll() {
  allText = !allText;
  pins.forEach((pin) => {
    pin.classList.toggle("text-mode", allText);
  });
  btn.textContentContent = allText ? "  " : " ";
}
