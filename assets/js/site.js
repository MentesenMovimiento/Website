// Simple menu toggle + year + smooth scroll
(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Create backdrop for menu
  let backdrop = document.getElementById("menu-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.id = "menu-backdrop";
    document.body.appendChild(backdrop);
  }

  const menu = document.getElementById("menu");
  const openLink = document.querySelector('#header nav a[href="#menu"]');

  function openMenu() {
    if (!menu) return;
    menu.classList.add("open");
    backdrop.classList.add("show");
  }
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("open");
    backdrop.classList.remove("show");
  }

  if (openLink) {
    openLink.addEventListener("click", (e) => {
      e.preventDefault();
      openMenu();
    });
  }

  backdrop.addEventListener("click", closeMenu);

  // Close menu when clicking a link
  if (menu) {
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => closeMenu());
    });
  }

  // Smooth scroll for scrolly anchors
  document.querySelectorAll('a.scrolly[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
