const pins = document.querySelectorAll(".pin");
const btn = document.getElementById("toggle-all-btn");

// Randomly place each pin on the pinboard
const pinboard = document.querySelector(".pinboard");

pins.forEach((pin) => {
  const boardW = pinboard.offsetWidth || window.innerWidth;
  const boardH = pinboard.offsetHeight || window.innerHeight * 0.8;

  // Keep pins away from the very edges (100px padding)
  const x = 100 + Math.random() * (boardW - 200);
  const y = 40 + Math.random() * (boardH - 120);
  // const rot = (Math.random() - 0.5) * 16; // -8deg to +8deg

  pin.style.left = `${x}px`;
  pin.style.top = `${y}px`;
  // pin.style.transform = `rotate(${rot}deg)`;

  // // Individual click still toggles a single pin
  // pin.addEventListener("click", () => {
  //   pin.classList.toggle("text-mode");
  // });
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
