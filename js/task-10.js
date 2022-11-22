const refsInput = document.querySelector("#controls>input");
const refsButtonCreate = document.querySelector("[data-create]");
const refsButtonDestroy = document.querySelector("[data-destroy]");
const refsAddBoxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function createBoxes(amount) {
  let elementsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const createDiv = document.createElement("div");
    let color = getRandomHexColor();

    createDiv.style.width = `${30 + 10 * i}px`;
    createDiv.style.height = `${30 + 10 * i}px`;
    createDiv.style.background = color;

    elementsToAdd.push(createDiv);
  }
  return elementsToAdd;
}

refsButtonCreate.addEventListener("click", (event) => {
  if (refsInput.value > 100 || refsInput.value < 0) {
    alert("Insert number from 1 to 100");
  } else {
    let addBoxes = createBoxes(refsInput.value);
    refsAddBoxes.append(...addBoxes);
  }
});

const destroyBoxes = () => {
  refsAddBoxes.innerHTML = "";
};

refsButtonDestroy.addEventListener("click", () => {
  destroyBoxes.call();
});
