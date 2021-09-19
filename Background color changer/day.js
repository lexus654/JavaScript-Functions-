"use strict";
const body = document.querySelector("body");
const button = document.querySelector("button");
const first = () => Math.floor(Math.random() * 256) + 1;
const second = () => Math.floor(Math.random() * 256) + 1;
const third = () => Math.floor(Math.random() * 256) + 1;
const alpha = () => Math.random().toFixed(2);
button.addEventListener("click", function () {
  body.style.backgroundColor = `rgba(${first()}, ${second()},${third()}, ${alpha()} )`;
  console.log(body.style.backgroundColor);
});
