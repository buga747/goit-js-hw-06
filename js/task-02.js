const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientsEl = document.querySelector("#ingredients");

const ingridientsArray = [];

ingredients.forEach((ingredient) => {
  const ingridientEl = document.createElement("li");
  ingridientEl.textContent = ingredient;
  ingridientEl.classList.add = "item";
  ingridientsArray.push(ingridientEl);
  return ingridientsArray;
});

ingridientsEl.append(...ingridientsArray);
