let counterValue = 0;

const buttonPlusOneEl = document.querySelector(
  "button[data-action='incrementOne']"
);
const buttonMinusOneEl = document.querySelector(
  "button[data-action='decrementOne']"
);

const valueEl = document.querySelector("#value");

const decrementOne = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const incrementOne = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

buttonMinusOneEl.addEventListener("click", decrementOne);
buttonPlusOneEl.addEventListener("click", incrementOne);
