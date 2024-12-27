import './hoisted18.js';

const thumbs = document.querySelectorAll(".history-carousel-items img");
const mainImage = document.querySelector(".history-carousel-active-img");
thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
  });
});
