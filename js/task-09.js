function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeClr = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const bodyColor = document.querySelector("body");

btnChangeClr.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();

  spanColor.textContent = `- ${color}`;
  bodyColor.style.backgroundColor = `${color}`;
}
