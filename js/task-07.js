const inputRangeEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

inputRangeEl.addEventListener("input", onFontSizeChangeInput);

function onFontSizeChangeInput(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
