// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
});

// Mobile navigation
(() => {
  const openBtn = document.querySelector("[data-nav-open]");
  const panel = document.getElementById("nav-panel");
  const backdrop = document.getElementById("nav-panel-backdrop");
  const closeEls = document.querySelectorAll("[data-nav-close]");

  function openNav() {
    if (panel) panel.style.display = "block";
    if (backdrop) backdrop.style.display = "block";
  }
  function closeNav() {
    if (panel) panel.style.display = "none";
    if (backdrop) backdrop.style.display = "none";
  }
  if (openBtn) openBtn.addEventListener("click", openNav);
  closeEls.forEach(el => el.addEventListener("click", closeNav));
})();

// Reveal on scroll
(() => {
  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (!revealEls.length) return;
  if (prefersReduced) {
    revealEls.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
})();

// Preselect topic in form
(() => {
  function setTopic(value) {
    const select = document.getElementById("topic");
    if (select) select.value = value;
  }
  document.querySelectorAll("[data-set-topic]").forEach(button => {
    button.addEventListener("click", () => {
      const v = button.getAttribute("data-set-topic");
      if (v) setTopic(v);
    });
  });
})();

// Accordion for four pillars
(() => {
  const buttons = document.querySelectorAll("[data-accordion]");
  if (!buttons.length) return;
  function toggle(btn) {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    // close all open
    buttons.forEach(b => {
      if (b !== btn && b.getAttribute("aria-expanded") === "true") {
        b.setAttribute("aria-expanded", "false");
        const body = b.nextElementSibling;
        if (body) body.hidden = true;
      }
    });
    const body = btn.nextElementSibling;
    if (!body) return;
    if (expanded) {
      btn.setAttribute("aria-expanded","false");
      body.hidden = true;
    } else {
      btn.setAttribute("aria-expanded","true");
      body.hidden = false;
    }
  }
  buttons.forEach(btn => btn.addEventListener("click", () => toggle(btn)));
})();
