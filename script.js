
(function () {
  "use strict";

  const projectsGrid = document.getElementById("projects");
  if (!projectsGrid) return;

  const cards = projectsGrid.querySelectorAll(".project");

  cards.forEach((card) => {
    const url = card.getAttribute("data-url");
    if (!url) return;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "link");
    card.setAttribute("aria-label", `在新标签页打开 ${url}`);

    card.addEventListener("click", () => {
      window.open(url, "_blank", "noopener,noreferrer");
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
    });
  });
})();
