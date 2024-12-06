import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
import '../index.astro_astro_type_script_index_0_lang.DY40GITN.js';

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("rewardModal");
  if (modal) {
    modal.addEventListener("show.bs.modal", (event) => {
      const button = event.relatedTarget;
      const title = button.getAttribute("data-title");
      const description = button.getAttribute("data-description");
      const image = button.getAttribute("data-image");
      const modalDescription = modal.querySelector(".modal-description");
      const modalImage = modal.querySelector(".modal-image");
      if (modalDescription)
        modalDescription.textContent = title + " " + description;
      if (modalImage) {
        modalImage.src = image;
        modalImage.alt = title;
      }
    });
  }
});
