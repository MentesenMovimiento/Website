// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
});

// Mobile nav toggling
(() => {
  const openBtn = document.querySelector("[data-nav-open]");
  const closeEls = document.querySelectorAll("[data-nav-close], #nav-panel-backdrop");
  const panel = document.getElementById("nav-panel");
  const backdrop = document.getElementById("nav-panel-backdrop");

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

// Reveal on scroll (respect reduced motion)
(() => {
  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const elements = document.querySelectorAll("[data-reveal]");
  if (!elements.length) return;
  if (prefersReduced) {
    elements.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  elements.forEach(el => observer.observe(el));
})();

// Preselect topic in contact form based on CTA clicks
(() => {
  function setTopic(value) {
    const select = document.getElementById("topic");
    if (select) select.value = value;
  }
  document.querySelectorAll("[data-set-topic]").forEach(btn => {
    btn.addEventListener("click", () => {
      const value = btn.getAttribute("data-set-topic");
      if (value) setTopic(value);
    });
  });
})();

// Accordion for four pillars
(() => {
  const buttons = document.querySelectorAll("[data-accordion]");
  if (!buttons.length) return;

  function toggleAccordion(btn) {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    // Close all
    buttons.forEach(b => {
      if (b !== btn && b.getAttribute("aria-expanded") === "true") {
        b.setAttribute("aria-expanded", "false");
        const body = b.nextElementSibling;
        if (body) body.hidden = true;
      }
    });
    // Toggle current
    const body = btn.nextElementSibling;
    if (!body) return;
    if (expanded) {
      btn.setAttribute("aria-expanded", "false");
      body.hidden = true;
    } else {
      btn.setAttribute("aria-expanded", "true");
      body.hidden = false;
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => toggleAccordion(btn));
  });
})();
