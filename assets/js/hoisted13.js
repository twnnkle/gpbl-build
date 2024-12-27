import './hoisted18.js';

const mainImage = document.querySelector(
  ".advertisement-carousel-active-img"
);
const thumbs = document.querySelectorAll(
  ".advertisement-carousel-items img"
);
const prevMainBtn = document.querySelector(".main-nav-btn-wrapper_prev");
const nextMainBtn = document.querySelector(".main-nav-btn-wrapper_next");
const carouselTrack = document.querySelector(
  ".carousel-track"
);
let currentIndex = 0;
function updateActiveImage(index) {
  currentIndex = index;
  mainImage.src = thumbs[index].src;
  thumbs.forEach((thumb) => thumb.classList.remove("active"));
  thumbs[index].classList.add("active");
  thumbs[index].style.border = "2px solid #487cfb";
  thumbs.forEach((thumb, i) => {
    if (i !== index) {
      thumb.style.border = "none";
    }
  });
  const thumbWidth = thumbs[0].parentElement.offsetWidth;
  const containerWidth = carouselTrack.parentElement.offsetWidth;
  const visibleThumbs = Math.floor(containerWidth / thumbWidth);
  const maxOffset = (thumbs.length - visibleThumbs) * thumbWidth;
  let offset;
  if (index <= Math.floor(visibleThumbs / 2)) {
    offset = 0;
  } else if (index >= thumbs.length - Math.floor(visibleThumbs / 2)) {
    offset = maxOffset;
  } else {
    offset = (index - Math.floor(visibleThumbs / 2)) * thumbWidth;
  }
  carouselTrack.style.transform = `translateX(-${Math.max(0, Math.min(offset, maxOffset))}px)`;
  carouselTrack.style.transition = "transform 0.3s ease-in-out";
}
prevMainBtn.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : thumbs.length - 1;
  updateActiveImage(currentIndex);
});
nextMainBtn.addEventListener("click", () => {
  currentIndex = currentIndex < thumbs.length - 1 ? currentIndex + 1 : 0;
  updateActiveImage(currentIndex);
});
thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    updateActiveImage(index);
  });
});
updateActiveImage(0);
