const stop = document.getElementById("stop");
const start = document.getElementById("start");
const text = document.querySelector(".timer");

let i = 0;

start.addEventListener("mousedown", () => {
  console.log("nagana");
  start.style.transition = "all, 0.3s ease-in-out";
  start.style.opacity = "0";

  setInterval(function () {
    i++;
    text.textContent = i;
  }, 1000);
});
