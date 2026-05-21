const pins = document.querySelectorAll(".pin");

pins.forEach((pin) => {
  pin.addEventListener("click", () => {
    pin.classList.toggle("text-mode");
  });
});
