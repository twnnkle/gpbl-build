const searchInner = document.querySelector(".header__search-inner");
const searchInput = document.querySelector(".header__search-input");
let isExpanded = false;
searchInner.addEventListener("click", () => {
  if (!isExpanded) {
    searchInner.classList.add("expanded");
    searchInput.focus();
    isExpanded = true;
  }
});
document.addEventListener("click", (e) => {
  if (!searchInner.contains(e.target) && isExpanded) {
    searchInner.classList.remove("expanded");
    isExpanded = false;
  }
});
