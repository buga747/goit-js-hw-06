const categoryEl = document.querySelector("#categories").children.length;
console.log("Number of categories: " + categoryEl);

const subCategoryListEl = document.querySelectorAll(".item");
subCategoryListEl.forEach((category) => {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Elements: ", category.lastElementChild.children.length);
});
