const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.body,
  btnStart: document.querySelector('button[data-action = "start"]'),
  btnStop: document.querySelector('button[data-action = "stop"]')
}

const DELAY = 1000;
let intervalId = null;

refs.btnStart.addEventListener('click', changeColor);
refs.btnStop.addEventListener('click', stopChange);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, DELAY);
    refs.btnStart.disabled = true;
};

function stopChange() {
    clearInterval(intervalId);
    refs.btnStart.disabled = false;
}