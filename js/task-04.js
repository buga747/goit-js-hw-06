

const buttonPlusOneEl = document.querySelector("[data-action='increment']");
const buttonMinusOneEl = document.querySelector("[data-action='decrement']");
const valueEl = document.querySelector("#value");

let counterValue = 0;

buttonMinusOneEl.addEventListener("click", onButtonMinusOneClick);
buttonPlusOneEl.addEventListener("click", onButtonPlusOneClick);

function onButtonMinusOneClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
function onButtonPlusOneClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}


