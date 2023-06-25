function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let changeColorButton = document.querySelector(".change-color");
let colorSpan = document.querySelector(".color");
let body = document.body;

changeColorButton.addEventListener("click", function() {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});