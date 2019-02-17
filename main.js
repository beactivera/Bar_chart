"use strict";
// properties of container
let boxContainer = document.querySelector("#container");
const WIDTH_OF_CONTAINER = boxContainer.scrollWidth;
const HEIGHT_OF_CONTAINER = boxContainer.scrollHeight;
// template
const templateHTML = document.querySelector("#boxtemplate").content;
let clone = templateHTML.cloneNode(true);
let box = clone.querySelector("#box");
// calculations
let counter = 0;
const MAX_LENGTH_OF_ARRAY = 40;
// arrays
const arr = [];
const arrBox = [];

// start program
window.addEventListener("DOMContentLoaded", init);

// built array of divs
function init() {
  counter++;
  if (counter <= MAX_LENGTH_OF_ARRAY) {
    let newDiv = document.createElement("div");
    newDiv.className = `${counter}-box`;
    box.appendChild(newDiv);
    init();
  } else {
    console.log(box);
    bulitNumArray();
  }
}

// bulitNumArray - 40 zeros
function bulitNumArray() {
  counter++;
  if (counter <= MAX_LENGTH_OF_ARRAY) {
    arr.unshift(0);
    bulitNumArray();
  } else {
    console.log(arr);
    addRandomNumToArray();
  }
}

// makeRandomNumber
// - generate number between 0 and 35
function makeRandomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
}

// addRandomNumToArray
// - increase counter
// - add to the beggining of the array the random number
// - remove 0 in the end
// - loop with time -- setTimeout
function addRandomNumToArray() {
  counter++;

  //   random number between 0-35
  let randomNumber = makeRandomNumber(0, 35);

  console.log(randomNumber);

  arr.unshift(randomNumber);

  const LengthOfArray = 40;

  if (counter > LengthOfArray) {
    arr.pop();
    boxContainer.appendChild(clone);
  }
  console.log(arr);
  createBoxes(randomNumber);
  setTimeout(addRandomNumToArray, 3000);
}

// createBox
// - create height based on random number
// - grab html template
// - add height to box from template
function createBoxes(randomNumber) {
  let height = randomNumber;
  box.style.top = HEIGHT_OF_CONTAINER - height + "px";
  box.style.height = height + "px";
  // box.style.width = WIDTH_OF_CONTAINER / 40 + "px";
}
//next task -- add style for HTML #container and #box in template
