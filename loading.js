"use strict";
const title = document.getElementById("title");
title.textContent= "I have built a few mini projects using HTML,CSS, JAVASCRIPT";
document.title = "All in one application";
const titles = [
  "Let's see the mini projects",

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
