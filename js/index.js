// slider controller by Fuad

const rightButton = document.querySelector(".fa-arrow-circle-right");
const leftButton = document.querySelector(".fa-arrow-circle-left");
const slider = document.querySelector(".scroll");

rightButton.addEventListener("click", () => {
  slider.style.left = "-200vw";
});
rightButton.addEventListener("click", () => {
  slider.style.left = "0vw";
});
