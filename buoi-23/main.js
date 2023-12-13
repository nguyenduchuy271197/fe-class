// DOM
// Query Elements
// Access to properties
// Change properties
// Event

const btnEl = document.getElementById("btn");
const boxEl = document.getElementById("box");

// Write logic when click button, box will show
btnEl.addEventListener("click", toggleBox);

function toggleBox() {
  if (boxEl.classList.contains("show")) {
    boxEl.classList.remove("show");
    btnEl.textContent = "Show";
  } else {
    boxEl.classList.add("show");
    btnEl.textContent = "Hide";
  }
}

const hoverBtnEl = document.getElementById("hover-btn");

hoverBtnEl.addEventListener("mouseover", changeOn);

hoverBtnEl.addEventListener("mouseout", changeOff);

function changeOn() {
  hoverBtnEl.textContent = "ON";
}

function changeOff() {
  hoverBtnEl.textContent = "OFF";
}

const squareEl = document.getElementById("square");

squareEl.addEventListener("dblclick", zoomSquare);

function zoomSquare() {
  //   if (squareEl.classList.contains("zoom")) {
  //     squareEl.classList.remove("zoom");
  //   } else {
  //     squareEl.classList.add("zoom");
  //   }
  squareEl.classList.toggle("zoom");
}

const nameInputEl = document.getElementById("name-input");
const nameEl = document.getElementById("name");

nameInputEl.addEventListener("input", function () {
  nameEl.textContent = nameInputEl.value;
});
