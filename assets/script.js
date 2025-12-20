/* assets/script.js
   Site global JS (regenerated with ARIA + navbar threshold logic) */
(function () {
  // -------------------------------
  // FOOTER YEAR
  // -------------------------------
  const yearElem = document.getElementById("year");
  if (yearElem) yearElem.textContent = new Date().getFullYear();

  // -------------------------------
  // NAVBAR: STICKY + AUTO-HIDE AFTER 40%
  // -------------------------------
  const header = document.querySelector(".site-header.auto-hide");
  let lastScroll = window.pageYOffset || 0;
  let ticking = false;
  let threshold = 0;

  const computeThreshold = () => {
    const doc = document.documentElement;
    const maxScroll = Math.max(0, doc.scrollHeight - window.innerHeight);
    threshold = maxScroll * 0.40; // 40%
  };

  const handleHeaderOnScroll = () => {
    if (!header) return;
    const current = window.pageYOffset || 0;

    if (current <= threshold) {
      header.classList.remove("hide"); // keep visible before threshold
      lastScroll = current;
      return;
    }

    // hysteresis to prevent flicker
    if (current > lastScroll + 10) header.classList.add("hide");        // down
    else if (current < lastScroll - 10) header.classList.remove("hide"); // up

    lastScroll = current;
  };

  const onScrollRaf = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      handleHeaderOnScroll();
      ticking = false;
    });
  };

  if (header) {
    computeThreshold();
    window.addEventListener("resize", computeThreshold, { passive: true });
    window.addEventListener("scroll", onScrollRaf, { passive: true });
    handleHeaderOnScroll(); // init
  }

  // -------------------------------
  // NAVIGATION SCROLL-SPY
  // -------------------------------
  (function () {
    const navLinks = document.querySelectorAll(".nav-menu .nav-link");
    const sections = Array.from(navLinks)
      .map((link) => {
        const target = document.querySelector(link.getAttribute("href"));
        return target ? { link, target } : null;
      })
      .filter(Boolean);

    function onScrollSpy() {
      const y = window.pageYOffset + window.innerHeight / 3;
      sections.forEach(({ link, target }) => {
        const top = target.offsetTop;
        const bottom = top + target.offsetHeight;
        if (y >= top && y < bottom) {
          navLinks.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", onScrollSpy, { passive: true });
    window.addEventListener("resize", onScrollSpy, { passive: true });
    document.addEventListener("DOMContentLoaded", onScrollSpy);
  })();

  // -------------------------------
  // MOBILE NAV TOGGLE (ARIA + [hidden])
  // -------------------------------
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-menu]");
  if (navToggle && navMenu) {
    const setMenuVisibility = (show) => {
      navToggle.setAttribute("aria-expanded", String(show));
      navMenu.classList.toggle("open", show);
      if (show) navMenu.removeAttribute("hidden");
      else navMenu.setAttribute("hidden", "");
    };

    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      setMenuVisibility(!expanded);
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 900) setMenuVisibility(false);
      });
    });
  }

  // -------------------------------
  // FLIP CARD INTERACTIONS (single-open + ARIA)
  // -------------------------------
  document.querySelectorAll(".flip-card").forEach((card) => {
    const hit = card.querySelector(".flip-hit");
    if (!hit) return;

    // ensure initial ARIA
    hit.setAttribute("aria-pressed", "false");

    hit.addEventListener("click", (event) => {
      event.preventDefault();

      const isOpen = card.classList.contains("is-flipped");
      // close others
      document.querySelectorAll(".flip-card.is-flipped").forEach((openCard) => {
        if (openCard !== card) {
          openCard.classList.remove("is-flipped");
          const btn = openCard.querySelector(".flip-hit");
          if (btn) btn.setAttribute("aria-pressed", "false");
        }
      });

      // toggle current
      card.classList.toggle("is-flipped");
      hit.setAttribute("aria-pressed", String(!isOpen));
    });
  });

  // -------------------------------
  // ACCORDION (single-open + ARIA)
  // -------------------------------
  const accordionToggles = document.querySelectorAll(".accordion-toggle");
  accordionToggles.forEach((toggle) => {
    // ensure initial ARIA-expanded is false if missing
    if (!toggle.hasAttribute("aria-expanded")) {
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", () => {
      const panel = toggle.nextElementSibling;
      if (!panel) return;

      const wantOpen = !panel.classList.contains("open");

      // close all
      document.querySelectorAll(".accordion-panel.open").forEach((p) => {
        p.classList.remove("open");
        p.setAttribute("aria-hidden", "true");
      });
      document.querySelectorAll(".accordion-toggle.active").forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-expanded", "false");
      });

      // open target if desired
      if (wantOpen) {
        panel.classList.add("open");
        panel.setAttribute("aria-hidden", "false");
        toggle.classList.add("active");
        toggle.setAttribute("aria-expanded", "true");
      } else {
        panel.classList.remove("open");
        panel.setAttribute("aria-hidden", "true");
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // -------------------------------
  // COLLAPSIBLE TOC FOR BLOG PAGES
  // -------------------------------
  document.querySelectorAll(".toc[data-toc]").forEach((tocBlock) => {
    const navList = tocBlock.querySelector("nav");
    if (!navList) return;
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "toc-toggle";
    toggleBtn.textContent = "Mostrar contenido";
    tocBlock.parentNode.insertBefore(toggleBtn, tocBlock);
    tocBlock.classList.add("hidden");
    toggleBtn.addEventListener("click", () => {
      const isHidden = tocBlock.classList.contains("hidden");
      tocBlock.classList.toggle("hidden");
      tocBlock.classList.toggle("visible");
      toggleBtn.textContent = isHidden ? "Ocultar contenido" : "Mostrar contenido";
    });
  });

  // -------------------------------
  // INSTAGRAM EMBED ANIMATION
  // -------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    const instaBlocks = document.querySelectorAll(".insta-embeds .instagram-media");
    instaBlocks.forEach((block, i) => {
      block.style.animationDelay = `${i * 0.15}s`;
    });
  });

  // -------------------------------
  // BLOG CARD APPEAR ON SCROLL
  // -------------------------------
  const blogCards = document.querySelectorAll(".blog-card");
  if (blogCards.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    blogCards.forEach((card) => {
      card.style.animationPlayState = "paused";
      observer.observe(card);
    });
  }

  // -------------------------------
  // CONTACT FORM SUBMISSION
  // -------------------------------
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const submitUrl = contactForm.getAttribute("action");
      try {
        const response = await fetch(submitUrl, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (response.ok) {
          const successElem = document.getElementById("contact-success");
          if (successElem) successElem.classList.add("show");
          contactForm.classList.add("hidden");
        } else {
          alert("Hubo un error al enviar tu mensaje. Intenta de nuevo más tarde.");
        }
      } catch (err) {
        alert("Error de red. Verifica tu conexión e intenta de nuevo.");
      }
    });
  }
})();
