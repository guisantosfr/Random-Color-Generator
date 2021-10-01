const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorElement = document.querySelector(".color");
const colorNameElement = document.querySelector(".color-name");
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
  n_match = ntc.name(hexColor);
  console.log(n_match);
  n_name = n_match[1];

  colorNameElement.textContent = n_name;

  colorElement.textContent = hexColor;
  modifyColor(hexColor);
}

buttonElement.addEventListener("click", generateColor);
