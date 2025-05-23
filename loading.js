"use strict";
const title = document.getElementById("title");
title.textContent= "I Have Done Few Mini Projects Using HTML,CSS, JAVASCRIPT";
document.title = "All in one application";
const titles = [
  "Let's See those Mini Projects",

];

let count = 0;

const intervalId = setInterval(function () {
  if (count < titles.length) {
    title.textContent = titles[count];
    count++;
  } else {
    clearInterval(intervalId);
    window.location.href = "home.html";
  }
}, 2000);
