/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("#convert-btn");
const lengthconversionEl = document.querySelector("#lengthconversion-el");
const num = document.querySelector("#num");

convertBtn.addEventListener("click", function () {
  let lengthstring = "";
  lengthstring = `${num.value} meters = ${(num.value * 3.281).toFixed(
    3
  )} feet | ${num.value} feet = ${(num.value / 3.281).toFixed(3)} meters`;
  lengthconversionEl.innerHTML = lengthstring;
});
