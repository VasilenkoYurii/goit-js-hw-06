const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", res);

function res() {
  const inputValue = input.value;
  text.style.fontSize = `${inputValue}px`;
}
