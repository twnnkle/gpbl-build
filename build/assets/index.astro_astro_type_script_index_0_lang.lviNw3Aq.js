document.addEventListener("DOMContentLoaded", function() {
  const containers = document.querySelectorAll(".field-with-dropdown");
  containers.forEach((container) => {
    const input = container.querySelector(".field-with-dropdown__input");
    const dropdownItems = container.querySelectorAll(".dropdown-menu li");
    const dropdownLinks = container.querySelectorAll(".dropdown-item");
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
});
