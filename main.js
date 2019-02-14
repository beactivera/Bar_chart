"use strict";

// set empty array and counter
const arr = [];
let counter = 0;

window.addEventListener("DOMContentLoaded", init);

// init
// - increase counter
// - specify length of the array
// - loop - add each time one zero to the array
function init() {
  counter++;

  const maxLengthOfArray = 40;

  if (counter <= maxLengthOfArray) {
    arr.unshift(0);
    init();
  } else {
    console.log(arr);
    addRandomNumToArray();
  }
}

// makeRandomNumber
// - generate number between 0 and 35
function makeRandomNumber(min, max) {
  const numb = Math.floor(Math.random() * (max - min) + min);

  return numb;
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
    createBox(randomNumber);
  }
  console.log(arr);

  setTimeout(addRandomNumToArray, 3000);
}

// createBox
// - create height based on random number
// - grab html template
// - add height to box from template

function createBox(randomNumber) {
  let height = randomNumber;

  console.log(height);
  //grap html template
  const clone = document.querySelector("#boxtemplate").content.cloneNode(true);
  //add height to box from template
  const box = (clone.querySelector(".box").style.height = height * 20 + "px");

  console.log(box);

  // what we are cloning and what we are appending?
  // const clone stores content from html-template
  // const box - store box in html-template, the program changes height
  // show in the html
  document.querySelector("#container").appendChild(clone);
}

// next task -- add style for HTML #container and #box in template
