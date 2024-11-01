import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';

const accordionBtns = document.querySelectorAll(".accordion-step__btn");
accordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isOpen = btn.classList.toggle("openedAccordion");
    const text = btn.querySelector("span");
    const arrow = btn.querySelector("svg");
    text.textContent = isOpen ? "Свернуть" : "Развернуть";
    arrow.style.transform = isOpen ? "rotate(180deg)" : "unset";
  });
});
const setContentHeight = () => {
  const contentBlock = document.querySelector(
    ".tree-employees-content-wrapper"
  );
  contentBlock.style.maxHeight = `${contentBlock.offsetHeight}px`;
};
window.addEventListener("DOMContentLoaded", () => {
  setContentHeight();
});
window.addEventListener("resize", () => {
  setContentHeight();
});
