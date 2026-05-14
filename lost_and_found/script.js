const pins = document.querySelectorAll(".pin");

pins.forEach((pin) => {
  pin.addEventListener("hover", () => {
    pin.classList.toggle("bin1turn");
  });
});
