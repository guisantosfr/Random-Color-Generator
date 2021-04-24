const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorElement = document.querySelector(".color");
const buttonElement = document.querySelector("button");

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function modifyColor(hexColor) {
  document.body.style.backgroundColor = hexColor;
  buttonElement.style.backgroundColor = hexColor;
}

function generateColor() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  colorElement.textContent = hexColor;
  modifyColor(hexColor);
}

buttonElement.addEventListener("click", generateColor);

