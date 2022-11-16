let counterValue = 0;

const buttonPlusOneEl = document.querySelector(
  "button[data-action='increment']"
);
const buttonMinusOneEl = document.querySelector(
  "button[data-action='decrement']"
);

const valueEl = document.querySelector("#value");

function onButtonMinusOneClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
function onButtonPlusOneClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

buttonMinusOneEl.addEventListener("click", onButtonMinusOneClick);
buttonPlusOneEl.addEventListener("click", onButtonPlusOneClick);
