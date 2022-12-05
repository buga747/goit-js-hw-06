const refs = {
  input: document.querySelector("#controls>input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  addBoxes: document.querySelector("#boxes"),
};

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

refs.buttonCreate.addEventListener("click", (event) => {
  if (refs.input.value > 100 || refs.input.value < 0) {
    alert("Insert number from 1 to 100");
  } else {
    let addBoxes = createBoxes(refs.input.value);
    refs.addBoxes.append(...addBoxes);
  }
});

const destroyBoxes = () => {
  refs.addBoxes.innerHTML = "";
};

refs.buttonDestroy.addEventListener("click", () => {
  destroyBoxes.call();
});
