import refs from "../refs/timer-refs";
//console.log(refs);
const start = document.getElementsByClassName("btnStart")[0];
const stop = document.getElementsByClassName("btnStop")[0];
console.log("start", start);
console.log("stop", stop);

let intervalID = null;

function setTime(time) {
  //==============================
  let days = Math.floor(time / 1000 / 60 / 60 / 24);
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);
  return { days, hours, mins, seconds };
}
function reset(...arr) {
  return arr.map((el) => (el.textContent = "00"));
}

function myTimer() {
  //============== отрисовка

  let timeBetween = new Date("May 17, 2022 00:00:00").getTime() - Date.now();
  let x = setTime(timeBetween);

  refs.days.textContent = x.days;
  refs.hours.textContent = x.hours;
  refs.mins.textContent = x.mins;
  refs.secs.textContent = x.seconds;
}

start.addEventListener("click", () => {
  myTimer();
  intervalID = setInterval(myTimer, 1000);
});
stop.addEventListener("click", () => {
  clearInterval(intervalID);
});
// //! На классе
// class Timer {
//   constructor(date, obj) {
//     this.date = date;
//     this.refs = obj;
//   }
//   count() {
//     let x = setTime(new Date(this.date) - Date.now());

//     this.refs.days.textContent = x.days;
//     this.refs.hours.textContent = x.hours;
//     this.refs.mins.textContent = x.mins;
//     this.refs.secs.textContent = x.seconds;
//   }

//   start() {
//     this.count();
//     setInterval(() => {
//       this.count();
//     }, 1000);
//   }
// }
// const timer = new Timer(day, refs);
// // timer.add();
// timer.start();
