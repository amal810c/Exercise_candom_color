"use strict";

window.addEventListener("DOMContentLoaded", randomBackground);

function randomBackground() {
  document.querySelector("#change").addEventListener("click", randomBackground);
  console.log("der er hul igennem");
  const rgbObject = randomColor();
  const rgb = rgbToCSS(rgbObject);
  displayRandomColor(rgb);
  showRgbCode(rgbObject);
  console.log(rgb);
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = { r, g, b };
  return rgb;
}

function rgbToCSS(rgbObject) {
  return `rgb( ${rgbObject.r}, ${rgbObject.g}, ${rgbObject.b} )`;
}

function displayRandomColor(rgb) {
  document.body.style.backgroundColor = rgb;
}

function showRgbCode(rgbObject) {
  document.querySelector(
    "#rgbcode"
  ).value = `rgb( ${rgbObject.r}, ${rgbObject.g}, ${rgbObject.b} )`;
}
