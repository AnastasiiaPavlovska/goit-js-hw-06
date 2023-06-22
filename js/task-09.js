function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

var changeColorButton = document.querySelector(".change-color");
var colorSpan = document.querySelector(".color");
var body = document.body;

changeColorButton.addEventListener("click", function() {
  var color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});