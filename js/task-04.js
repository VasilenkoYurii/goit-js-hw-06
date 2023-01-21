let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncremtnt = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

btnDecrement.addEventListener("click", addDecrement);
btnIncremtnt.addEventListener("click", addIncremtnt);

function addDecrement() {
  counterValue = counterValue - 1;
  updateValueUI();
}

function addIncremtnt() {
  counterValue = counterValue + 1;
  updateValueUI();
}

function updateValueUI() {
  value.textContent = counterValue;
}
