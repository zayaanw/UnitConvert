/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("#convert-btn");
const lengthconversionEl = document.querySelector("#lengthconversion-el");
const volumeconversionEl = document.querySelector("#volumeconversion-el");
const massconversionEl = document.querySelector("#massconversion-el");
const num = document.querySelector("#num");

convertBtn.addEventListener("click", function () {
  let lengthstring = "";
  let volumestring = "";
  let massstring = "";
  lengthstring = `${num.value} meters = ${(num.value * 3.281).toFixed(
    3
  )} feet | ${num.value} feet = ${(num.value / 3.281).toFixed(3)} meters`;
  volumestring = `${num.value} liters = ${(num.value * 0.264).toFixed(
    3
  )} gallons | ${num.value} gallons = ${(num.value / 0.264).toFixed(3)} liters`;
  massstring = `${num.value} kilos = ${(num.value * 2.204).toFixed(
    3
  )} pounds | ${num.value} pounds = ${(num.value / 2.204).toFixed(3)} kilos`;
  lengthconversionEl.innerHTML = lengthstring;
  volumeconversionEl.innerHTML = volumestring;
  massconversionEl.innerHTML = massstring;
});
