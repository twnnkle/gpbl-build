import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
import '../index.astro_astro_type_script_index_0_lang.DY40GITN.js';

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
