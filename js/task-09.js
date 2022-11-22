function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const colorTextEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", onColorChange);

function onColorChange() {
  let color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;

  colorTextEl.textContent = color;
}
