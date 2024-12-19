import './hoisted18.js';

document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById(
    "recipientName"
  );
  const dropdownItems = document.querySelectorAll(".dropdown-menu li");
  const dropdownLinks = document.querySelectorAll(".dropdown-item");
  input.addEventListener("input", function() {
    const searchText = this.value.toLowerCase();
    dropdownItems.forEach((item) => {
      const text = item.textContent?.toLowerCase() || "";
      if (text.includes(searchText)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const name = this.getAttribute("data-name");
      if (name) {
        input.value = name;
      }
    });
  });
});
