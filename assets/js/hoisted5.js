import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';

const thumbs = document.querySelectorAll(".history-carousel-items img");
const mainImage = document.querySelector(".history-carousel-active-img");
thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
  });
});
