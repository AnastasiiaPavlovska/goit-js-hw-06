const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.getElementById("value");

let counter = 0;

decrementBtn.addEventListener("click", decrementCounter);
incrementBtn.addEventListener("click", incrementCounter);

function decrementCounter() {
  counter--;
  updateCounterValue();
}

function incrementCounter() {
  counter++;
  updateCounterValue();
}

function updateCounterValue() {
  counterValue.textContent = counter;
}
