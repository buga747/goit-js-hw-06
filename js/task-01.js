const categoryEl = document.querySelector("#categories");

const categoryQuantity = categoryEl.children.length;
console.log("Number of categories: ", categoryQuantity);

const subCategoryListEl = document.querySelectorAll(".item");

subCategoryListEl.forEach((category) => {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Elements: ", category.lastElementChild.children.length);
});
