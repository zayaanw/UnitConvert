/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("#convert-btn");
const lengthconversionEl = document.querySelector("#lengthconversion-el");
const num = document.querySelector("#num");
let unit = 20;

convertBtn.addEventListener("click", function () {
  let lengthstring = "";
  lengthstring = `${num.value} meters times 2 is ${num.value * 2}`;
  lengthconversionEl.innerHTML = lengthstring;
});
