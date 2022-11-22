const textInputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

textInputEl.addEventListener("input", (event) => {
  outputEl.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    outputEl.textContent = "Anonymous";
  }
});
