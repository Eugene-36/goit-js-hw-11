import btnRefs from "../refs/change-color-refs"; // TODO: Доступ к нашим кнопкам

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
// TODO: Функции

function randomIntegerFromInterval(max) {
  return Math.floor(Math.random() * (max + 1));
}

function setRandomColor() {
  const color = colors[randomIntegerFromInterval(colors.length - 1)];
  console.log(color);
  document.body.style.backgroundColor = color;
}
let interval = null;

const accessStart = document.getElementById("buttonAdd");
const accesStop = document.getElementById("buttonRemove");
accessStart.addEventListener("click", setAttribute);
accesStop.addEventListener("click", deleteAttribute);

function setAttribute() {
  if (accessStart) {
    accessStart.setAttribute("disabled", "true");
  }
  interval = setInterval(() => setRandomColor(), 1000);
}

function deleteAttribute() {
  if (accesStop) {
    accessStart.removeAttribute("disabled");
    clearInterval(interval);
  }
}
