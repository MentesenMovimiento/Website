// Menu toggle + year + smooth scroll + flip cards (tap)
(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Backdrop for menu
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

  if (menu) {
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => closeMenu());
    });
  }

  // Smooth scroll
  document.querySelectorAll('a.scrolly[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Flip cards (tap/click support)
  document.querySelectorAll(".flip-card").forEach((card) => {
    const btn = card.querySelector(".flip-btn");
    if (!btn) return;

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // Close other flipped cards for cleanliness
      document.querySelectorAll(".flip-card.is-flipped").forEach((openCard) => {
        if (openCard !== card) openCard.classList.remove("is-flipped");
      });

      card.classList.toggle("is-flipped");
    });
  });
})();
