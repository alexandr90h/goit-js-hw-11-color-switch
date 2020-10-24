const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let timerId = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
refs = {
  bodyElem: document.querySelector('body'),
  btnStartElem: document.querySelector('button[data-action="start"]'),
  btnStopElem: document.querySelector('button[data-action="stop"]')
}
refs.btnStartElem.addEventListener('click', changeColor);
refs.btnStopElem.addEventListener('click', stopChangeColor);

function changeColor() {
  refs.btnStartElem.setAttribute('disabled','')
  timerId = setInterval(() => {
    colorNum = randomIntegerFromInterval(0, 5);
    refs.bodyElem.style.backgroundColor = colors[colorNum];
    console.log(colorNum);
  },1000)
}
function stopChangeColor() {
  refs.btnStartElem.removeAttribute('disabled');
  clearInterval(timerId);}
