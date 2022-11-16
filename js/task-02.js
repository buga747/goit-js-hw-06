const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Старий спосіб
// const ingredientsListEl = document.querySelector("#ingredients");
// const liArray = [];

// ingredients.forEach((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item");
//   itemEl.textContent = ingredient;
//   liArray.push(itemEl);
// });

// ingredientsEl.append(...liArray);

// Новий спосіб
const ingredientsListEl = document.querySelector("#ingredients");
const ingredientsEl = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  return itemEl;
});

ingredientsListEl.append(...ingredientsEl);
