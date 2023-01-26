const btnSimple = document.getElementById('btn-simple');
const btnHex = document.getElementById('btn-hex');
const color = document.querySelector('.color');
const main = document.querySelector('main');
const container = document.querySelector('.container');

const colors = ['red', 'blue', 'green', 'orange', 'black', 'purple'];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btnSimple.addEventListener('click', function () {
  main.style.backgroundColor = colors[getRandom()];
  color.textContent = colors[getRandom()];
  container.style.backgroundColor = 'white';
});

btnHex.addEventListener('click', function () {
  let hexValue = '#';
  for (let i = 0; i < 6; i++) {
    hexValue += hex[getRandomHex()];
  }
  main.style.backgroundColor = hex[getRandomHex()];
  color.textContent = hexValue;
  container.style.backgroundColor = 'white';
});
function getRandom() {
  return Math.floor(Math.random() * colors.length);
}
function getRandomHex() {
  return Math.floor(Math.random() * hex.length);
}
