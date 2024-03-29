"use strict";

/*
querySelector only selects the first element, so I should use querySelectorAll
probably, however querySelector all put every instance into an array, so maybe
I should create loops for each thing (h1, h2, h3, h4, p) and change the color
to black on all of them?
*/

const modeSwitch = document.querySelector("#dark-mode-toggle");
const hrArray = document.querySelectorAll("hr");
const h2Array = document.querySelectorAll("h2");
const h3Array = document.querySelectorAll("h3");
const h4Array = document.querySelectorAll("h4");
const pArray = document.querySelectorAll("p");
const gridItemArray = document.querySelectorAll(".grid-item");
const modalArray = document.querySelectorAll(".modal");
const dialogArray = document.querySelectorAll("dialog");
const xButtonArray = document.querySelectorAll(".x-button");
const navBarArray = document.querySelectorAll(".nav-bar-link");

/* Closes modal upon clicking outside window or clicking X button,
also makes body scrollable again. */
function onClick(event) {
  for (let i = 0; i < dialogArray.length; i++) {
    if (event.target === dialogArray[i] || event.target === xButtonArray[i]) {
      dialogArray[i].close();
      document.body.style.overflow = "";
    }
  }
}

/* Changes look of entire page to "dark mode". */
function darkMode() {
  document.body.style.backgroundColor = "#2c3039";
  // document.body.style.backgroundImage = "url('/imgs/backgroundimage2.png')";
  document.querySelector(".back-to-top-button").style.color = "#f6f6f6";
  document.querySelector("h1").style.color = "#f6f6f6";
  document.querySelector(".email-link").style.color = "cyan";
  document.querySelector("#linkedin-icon").src = "imgs/linkedin_white.png";
  document.querySelector("#codepen-icon").src = "imgs/codepen_white.png";
  document.querySelector("#github-icon").src = "imgs/github_white.png";
  document.querySelector(".dark-mode-icon").src = "imgs/darkmodewhite.svg";
  document.querySelector(".light-mode-icon").src = "imgs/lightmodewhite.svg";
  for (let i = 0; i < gridItemArray.length; i++) {
    gridItemArray[i].style.border = "3px solid #2c3039";
    gridItemArray[i].addEventListener("mouseenter", () => {
      gridItemArray[i].style.border = "3px solid #f6f6f6";
    });
    gridItemArray[i].addEventListener("mouseleave", () => {
      gridItemArray[i].style.border = "3px solid #2c3039";
    });
    gridItemArray[i].addEventListener("click", () => {
      modalArray[i].showModal();
      document.body.style.overflow = "hidden";
    });
  }
  for (let i = 0; i < hrArray.length; i++) {
    hrArray[i].style.border = "solid 1px #f6f6f6";
  }
  for (let i = 0; i < h2Array.length; i++) {
    h2Array[i].style.color = "#f6f6f6";
  }
  for (let i = 0; i < h3Array.length; i++) {
    h3Array[i].style.color = "#f6f6f6";
  }
  for (let i = 0; i < h4Array.length; i++) {
    h4Array[i].style.color = "#f6f6f6";
  }
  for (let i = 0; i < pArray.length; i++) {
    pArray[i].style.color = "#f6f6f6";
  }
  for (let i = 0; i < navBarArray.length; i++) {
    navBarArray[i].style.color = "#f6f6f6";
  }
}

/* Changes look of entire page to "light mode". Page is in "light mode"
by default. */
function lightMode() {
  document.body.style.backgroundColor = "#f6f6f6";
  // document.body.style.backgroundImage = "url('/imgs/backgroundimage.png')";
  document.querySelector(".back-to-top-button").style.color = "#2c3039";
  document.querySelector("h1").style.color = "#2c3039";
  document.querySelector(".email-link").style.color = "blue";
  document.querySelector("#linkedin-icon").src = "imgs/linkedin.png";
  document.querySelector("#codepen-icon").src = "imgs/codepen.png";
  document.querySelector("#github-icon").src = "imgs/github.png";
  document.querySelector(".dark-mode-icon").src = "imgs/darkmode.svg";
  document.querySelector(".light-mode-icon").src = "imgs/lightmode.svg";
  for (let i = 0; i < gridItemArray.length; i++) {
    gridItemArray[i].style.border = "3px solid #f6f6f6";
    gridItemArray[i].addEventListener("mouseenter", () => {
      gridItemArray[i].style.border = "3px solid #2c3039";
    });
    gridItemArray[i].addEventListener("mouseleave", () => {
      gridItemArray[i].style.border = "3px solid #f6f6f6";
    });
    gridItemArray[i].addEventListener("click", () => {
      modalArray[i].showModal();
      document.body.style.overflow = "hidden";
    });
  }

  for (let i = 0; i < hrArray.length; i++) {
    hrArray[i].style.border = "solid 1px #2c3039";
  }
  for (let i = 0; i < h2Array.length; i++) {
    h2Array[i].style.color = "#2c3039";
  }
  for (let i = 0; i < h3Array.length; i++) {
    h3Array[i].style.color = "#2c3039";
  }
  for (let i = 0; i < h4Array.length; i++) {
    h4Array[i].style.color = "#2c3039";
  }
  for (let i = 0; i < pArray.length; i++) {
    pArray[i].style.color = "#2c3039";
  }
  for (let i = 0; i < navBarArray.length; i++) {
    navBarArray[i].style.color = "#2c3039";
  }
}

/* Gives slider button functionality to switch between
"light mode" and "dark mode". */
function toggleBetweenModes() {
  if (modeSwitch.checked === true) {
    darkMode();
  } else {
    lightMode();
  }
}

// -------------------------------------

lightMode();
for (let i = 0; i < dialogArray.length; i++) {
  dialogArray[i].addEventListener("click", onClick);
}
modeSwitch.addEventListener("click", toggleBetweenModes);
