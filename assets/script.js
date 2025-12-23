/* assets/script.js */
(function () {
  // Translation strings for multilingual support
  const translations = {
    es: {
      meta: {
        title: "Mentes en Movimiento · Clínica de desarrollo infantil",
        description: "Clínica de desarrollo infantil (Costa Daurada) con enfoque integrado: movimiento, regulación, comunicación y aprendizaje. Cada niño, su propio camino."
      },
      nav: { servicios: "Servicios", enfoque: "Enfoque", blog: "Blog", instagram: "Instagram", legal: "Legal" },
      hero: {
        slogan: "Cada niño, su propio camino",
        lead: "Acompañamos a niños y adolescentes que presentan dificultades en regulación, aprendizaje, comunicación o adaptación escolar, con un enfoque integrado: mente, cuerpo y acción.",
        cta_primary: "Cuéntanos tu caso",
        cta_secondary: "Ver cómo trabajamos"
      },
      equipo: {
        title: "Quiénes somos",
        text: "Un equipo con base en educación y movimiento, con una mirada cálida y profesional. Lo importante: estrategias que funcionan en la vida real (casa y colegio).",
        trust: [
          { title: "Trabajo centrado en el niño", text: "Ajustamos el plan al perfil, ritmo y contexto del niño: no hay “talla única”." },
          { title: "Intervención con sentido", text: "Priorizamos objetivos funcionales: participación, autonomía y bienestar." },
          { title: "Seguimiento y ajustes", text: "Revisamos avances y adaptamos estrategias con claridad (qué funciona y por qué)." }
        ]
      },
      servicios: {
        title: "Servicios",
        text: "Haz clic en cada área para ver detalles y conocer al profesional responsable.",
        areas: {
          educacion: {
            title: "Educación Especial",
            desc: "Aprendizaje funcional, adaptación y participación en contextos reales.",
            bullets: [
              "Apoyos para aprendizaje y autonomía",
              "Planificación visual y estructura",
              "Estrategias para casa y colegio",
              "Objetivos funcionales y medibles"
            ],
            team_name: "Mónica Herrero Vargas",
            team_role: "Educación especial · Intervención individualizada",
            team_text: "Acompaña a niños y familias con estrategias prácticas para mejorar participación, adaptación escolar y rutinas diarias. Enfoque cálido, estructurado y centrado en fortalezas."
          },
          fisio: {
            title: "Fisioterapia Pediátrica",
            desc: "Postura, coordinación y fuerza funcional para la vida diaria.",
            bullets: [
              "Equilibrio, coordinación y control postural",
              "Patrones de movimiento y habilidades motoras",
              "Objetivos claros (seguimiento y ajustes)"
            ],
            team_name: "Profesional de Fisioterapia",
            team_role: "Fisioterapia pediátrica",
            team_text: "Intervención basada en objetivos funcionales y participación. Trabajo coordinado con familia y escuela para generalizar avances.",
            placeholder_note: "(Si aún no has definido nombre/foto, esto queda como placeholder.)"
          },
          logopedia: {
            title: "Logopedia",
            desc: "Comunicación funcional: comprensión, intención y contexto.",
            bullets: [
              "Comunicación más allá del habla",
              "Comprensión, turnos, juego e interacción",
              "Apoyos visuales y estrategias prácticas"
            ],
            team_name: "Profesional de Logopedia",
            team_role: "Logopedia · Comunicación funcional",
            team_text: "Enfoque centrado en participación: reducir frustración, aumentar iniciativa comunicativa y mejorar comprensión en rutinas reales.",
            placeholder_note: "(Placeholder editable: nombre, foto y credenciales.)"
          },
          movimiento: {
            title: "Movimiento y Regulación",
            desc: "Preparación para aprender: cuerpo organizado, mente disponible.",
            bullets: [
              "Rutinas de regulación (activación ↔ calma)",
              "Movimiento con intención (no “gastar energía”)",
              "Preparación para tareas (learning readiness)"
            ],
            team_name: "Micah",
            team_role: "Movimiento · Ejercicio terapéutico",
            team_text: "Diseña actividades y rutinas para ayudar a regular el cuerpo y facilitar atención, participación y aprendizaje. Enfoque práctico y progresivo, adaptado al perfil del niño."
          }
        }
      },
      enfoque: {
        title: "Un enfoque integrado",
        text: "Títulos siempre visibles. El contenido cambia automáticamente (12s) y se sincroniza con la barra de progreso.",
        steps: [
          { title: "Explorar", body: "Escuchar y observar con atención, recopilando contexto familiar y escolar para entender fortalezas y retos reales." },
          { title: "Evaluar", body: "Evaluar funciones y habilidades en contextos reales para identificar necesidades y prioridades de intervención." },
          { title: "Planificar", body: "Diseñar un plan centrado en objetivos claros, medibles y relevantes para el niño y su entorno." },
          { title: "Implementar", body: "Aplicar estrategias y prácticas funcionales en la vida diaria del niño, con ajustes continuos." },
          { title: "Revisar", body: "Monitorear resultados, recopilar retroalimentación y adaptar el plan para fomentar autonomía y bienestar." }
        ]
      },
      blogSection: {
        title: "Blog",
        text: "Lecturas cortas y aplicables para familias y profesionales.",
        posts: [
          { title: "Movimiento y desarrollo infantil", text: "Atención, regulación y preparación para aprender." },
          { title: "Logopedia funcional", text: "Comunicación más allá del habla: intención, comprensión y contexto." },
          { title: "Intervención individualizada", text: "Objetivos funcionales y coordinación familia–escuela." }
        ]
      },
      instagram: {
        title: "Instagram",
        text: "Contenido educativo: desarrollo, regulación, aprendizaje y estrategias prácticas."
      },
      contacto: {
        title: "Contacto",
        text: "Cuéntanos tu caso (sin compromiso). Responderemos con claridad y orientación inicial.",
        form: {
          name: "Nombre",
          email: "Email",
          message: "Mensaje",
          send: "Enviar",
          success: "Gracias. Hemos recibido tu mensaje."
        }
      },
      footer: {
        contact: "Contacto",
        privacy: "Datos y privacidad",
        privacyText: "Usamos tus datos únicamente para responder a tu consulta. Cumplimos con la normativa aplicable de protección de datos (RGPD).",
        approach: "Nuestro enfoque"
      },
      common: {
        prev: "Anterior",
        next: "Siguiente",
        close: "Cerrar",
        toggle: "Abrir menú",
        skip: "Saltar al contenido"
      }
    },
    ca: {
      meta: {
        title: "Mentes en Movimiento · Clínica de desenvolupament infantil",
        description: "Clínica de desenvolupament infantil (Costa Daurada) amb enfocament integrat: moviment, regulació, comunicació i aprenentatge. Cada nen, el seu propi camí."
      },
      nav: { servicios: "Serveis", enfoque: "Enfocament", blog: "Blog", instagram: "Instagram", legal: "Avís legal" },
      hero: {
        slogan: "Cada nen, el seu propi camí",
        lead: "Acompanyem nens i adolescents que presenten dificultats en regulació, aprenentatge, comunicació o adaptació escolar, amb un enfocament integrat: ment, cos i acció.",
        cta_primary: "Explica'ns el teu cas",
        cta_secondary: "Veure com treballem"
      },
      equipo: {
        title: "Qui som",
        text: "Un equip amb base en educació i moviment, amb una mirada càlida i professional. L'important: estratègies que funcionen en la vida real (casa i escola).",
        trust: [
          { title: "Treball centrat en el nen", text: "Ajustem el pla al perfil, ritme i context del nen: no hi ha \"talla única\"." },
          { title: "Intervenció amb sentit", text: "Prioritzem objectius funcionals: participació, autonomia i benestar." },
          { title: "Seguiment i ajustos", text: "Revisem avanços i adaptem estratègies amb claredat (què funciona i per què)." }
        ]
      },
      servicios: {
        title: "Serveis",
        text: "Clica a cada àrea per veure detalls i conèixer el professional responsable.",
        areas: {
          educacion: {
            title: "Educació Especial",
            desc: "Aprenentatge funcional, adaptació i participació en contextos reals.",
            bullets: [
              "Suports per a l'aprenentatge i l'autonomia",
              "Planificació visual i estructura",
              "Estratègies per a casa i escola",
              "Objectius funcionals i mesurables"
            ],
            team_name: "Mónica Herrero Vargas",
            team_role: "Educació especial · Intervenció individualitzada",
            team_text: "Acompanya nens i famílies amb estratègies pràctiques per millorar la participació, l'adaptació escolar i les rutines diàries. Enfocament càlid, estructurat i centrat en les fortaleses."
          },
          fisio: {
            title: "Fisioteràpia Pediàtrica",
            desc: "Postura, coordinació i força funcional per a la vida diària.",
            bullets: [
              "Equilibri, coordinació i control postural",
              "Patrons de moviment i habilitats motores",
              "Objectius clars (seguiment i ajustos)"
            ],
            team_name: "Professional de Fisioteràpia",
            team_role: "Fisioteràpia pediàtrica",
            team_text: "Intervenció basada en objectius funcionals i participació. Treball coordinat amb la família i l'escola per generalitzar avenços.",
            placeholder_note: "(Si encara no has definit nom/foto, això queda com a placeholder.)"
          },
          logopedia: {
            title: "Logopèdia",
            desc: "Comunicació funcional: comprensió, intenció i context.",
            bullets: [
              "Comunicació més enllà de la parla",
              "Comprensió, torns, joc i interacció",
              "Suports visuals i estratègies pràctiques"
            ],
            team_name: "Professional de Logopèdia",
            team_role: "Logopèdia · Comunicació funcional",
            team_text: "Enfocament centrat en la participació: reduir la frustració, augmentar la iniciativa comunicativa i millorar la comprensió en rutines reals.",
            placeholder_note: "(Text substituïble: nom, foto i credencials.)"
          },
          movimiento: {
            title: "Moviment i Regulació",
            desc: "Preparació per aprendre: cos organitzat, ment disponible.",
            bullets: [
              "Rutines de regulació (activació ↔ calma)",
              "Moviment amb intenció (no només \"cremar energia\")",
              "Preparació per a tasques (learning readiness)"
            ],
            team_name: "Micah",
            team_role: "Moviment · Exercici terapèutic",
            team_text: "Dissenya activitats i rutines per ajudar a regular el cos i facilitar l'atenció, la participació i l'aprenentatge. Enfocament pràctic i progressiu, adaptat al perfil del nen."
          }
        }
      },
      enfoque: {
        title: "Un enfocament integrat",
        text: "Títols sempre visibles. El contingut canvia automàticament (12s) i es sincronitza amb la barra de progrés.",
        steps: [
          { title: "Explorar", body: "Escoltar i observar amb atenció, recollint el context familiar i escolar per entendre fortaleses i reptes reals." },
          { title: "Avaluar", body: "Avaluar funcions i habilitats en contextos reals per identificar necessitats i prioritats d'intervenció." },
          { title: "Planificar", body: "Dissenyar un pla centrat en objectius clars, mesurables i rellevants per al nen i el seu entorn." },
          { title: "Implementar", body: "Aplicar estratègies i pràctiques funcionals en la vida diària del nen, amb ajustos continus." },
          { title: "Revisar", body: "Monitoritzar resultats, recollir retroalimentació i adaptar el pla per fomentar l'autonomia i el benestar." }
        ]
      },
      blogSection: {
        title: "Blog",
        text: "Lectures breus i aplicables per a famílies i professionals.",
        posts: [
          { title: "Moviment i desenvolupament infantil", text: "Atenció, regulació i preparació per aprendre." },
          { title: "Logopèdia funcional", text: "Comunicació més enllà de la parla: intenció, comprensió i context." },
          { title: "Intervenció individualitzada", text: "Objectius funcionals i coordinació família–escola." }
        ]
      },
      instagram: {
        title: "Instagram",
        text: "Contingut educatiu: desenvolupament, regulació, aprenentatge i estratègies pràctiques."
      },
      contacto: {
        title: "Contacte",
        text: "Explica'ns el teu cas (sense compromís). Et respondrem amb claredat i orientació inicial.",
        form: {
          name: "Nom",
          email: "Email",
          message: "Missatge",
          send: "Enviar",
          success: "Gràcies. Hem rebut el teu missatge."
        }
      },
      footer: {
        contact: "Contacte",
        privacy: "Dades i privacitat",
        privacyText: "Utilitzem les teves dades únicament per respondre a la teva consulta. Complim amb la normativa aplicable de protecció de dades (RGPD).",
        approach: "El nostre enfocament"
      },
      common: {
        prev: "Anterior",
        next: "Següent",
        close: "Tancar",
        toggle: "Obrir menú",
        skip: "Salta al contingut"
      }
    },
    en: {
      meta: {
        title: "Mentes en Movimiento · Child development clinic",
        description: "Child development clinic (Costa Daurada) with an integrated approach: movement, regulation, communication, and learning. Every child, their own path."
      },
      nav: { servicios: "Services", enfoque: "Approach", blog: "Blog", instagram: "Instagram", legal: "Legal" },
      hero: {
        slogan: "Each child, their own path",
        lead: "We support children and adolescents who experience challenges in regulation, learning, communication, or school adaptation, through an integrated approach: mind, body, and action.",
        cta_primary: "Tell us your story",
        cta_secondary: "See how we work"
      },
      equipo: {
        title: "Who we are",
        text: "A team grounded in education and movement, with a warm and professional approach. What matters: strategies that work in real life (home and school).",
        trust: [
          { title: "Child-centered work", text: "We tailor the plan to the child's profile, pace, and context: no \"one-size-fits-all\"." },
          { title: "Meaningful intervention", text: "We prioritize functional goals: participation, autonomy, and well-being." },
          { title: "Follow-up and adjustments", text: "We review progress and adapt strategies with clarity (what works and why)." }
        ]
      },
      servicios: {
        title: "Services",
        text: "Click on each area to see details and meet the professional in charge.",
        areas: {
          educacion: {
            title: "Special Education",
            desc: "Functional learning, adaptation, and participation in real contexts.",
            bullets: [
              "Supports for learning and autonomy",
              "Visual planning and structure",
              "Strategies for home and school",
              "Functional and measurable goals"
            ],
            team_name: "Mónica Herrero Vargas",
            team_role: "Special education · Individualized intervention",
            team_text: "Supports children and families with practical strategies to improve participation, school adaptation, and daily routines. Warm, structured, and strengths-focused approach."
          },
          fisio: {
            title: "Pediatric Physiotherapy",
            desc: "Posture, coordination, and functional strength for daily life.",
            bullets: [
              "Balance, coordination, and postural control",
              "Movement patterns and motor skills",
              "Clear objectives (monitoring and adjustments)"
            ],
            team_name: "Physiotherapy Professional",
            team_role: "Pediatric physiotherapy",
            team_text: "Intervention based on functional goals and participation. Works in coordination with family and school to generalize progress.",
            placeholder_note: "(If name/photo not yet defined, this remains as a placeholder.)"
          },
          logopedia: {
            title: "Speech Therapy",
            desc: "Functional communication: comprehension, intent, and context.",
            bullets: [
              "Communication beyond speech",
              "Comprehension, turn-taking, play and interaction",
              "Visual supports and practical strategies"
            ],
            team_name: "Speech Therapy Professional",
            team_role: "Speech therapy · Functional communication",
            team_text: "Participation-centered approach: reduce frustration, increase communicative initiative, and improve comprehension in real routines.",
            placeholder_note: "(Placeholder: name, photo, and credentials.)"
          },
          movimiento: {
            title: "Movement & Regulation",
            desc: "Ready to learn: organized body, engaged mind.",
            bullets: [
              "Regulation routines (alert ↔ calm)",
              "Intentional movement (not just \"burning energy\")",
              "Preparation for tasks (learning readiness)"
            ],
            team_name: "Micah",
            team_role: "Movement · Therapeutic exercise",
            team_text: "Designs activities and routines to help regulate the body and facilitate attention, participation, and learning. Practical and progressive approach, adapted to the child's profile."
          }
        }
      },
      enfoque: {
        title: "An integrated approach",
        text: "Titles always visible. Content changes automatically (12s) and is synced with the progress bar.",
        steps: [
          { title: "Explore", body: "Listen and observe closely, gathering family and school context to understand real strengths and challenges." },
          { title: "Evaluate", body: "Evaluate functions and skills in real contexts to identify intervention needs and priorities." },
          { title: "Plan", body: "Design a plan centered on clear, measurable, and relevant goals for the child and their environment." },
          { title: "Implement", body: "Apply strategies and functional practices in the child's daily life, with continuous adjustments." },
          { title: "Review", body: "Monitor results, gather feedback, and adapt the plan to foster autonomy and well-being." }
        ]
      },
      blogSection: {
        title: "Blog",
        text: "Short, practical reads for families and professionals.",
        posts: [
          { title: "Movement and child development", text: "Attention, regulation, and preparation for learning." },
          { title: "Functional speech therapy", text: "Communication beyond speech: intention, comprehension, and context." },
          { title: "Individualized intervention", text: "Functional goals and family–school coordination." }
        ]
      },
      instagram: {
        title: "Instagram",
        text: "Educational content: development, regulation, learning, and practical strategies."
      },
      contacto: {
        title: "Contact",
        text: "Tell us about your case (no obligation). We will reply with clear initial guidance.",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send",
          success: "Thank you. We have received your message."
        }
      },
      footer: {
        contact: "Contact",
        privacy: "Data & Privacy",
        privacyText: "We use your data only to respond to your inquiry. We comply with the applicable data protection regulations (GDPR).",
        approach: "Our approach"
      },
      common: {
        prev: "Previous",
        next: "Next",
        close: "Close",
        toggle: "Open menu",
        skip: "Skip to content"
      }
    }
  };

  // Language detection and persistence
  const storedLang = localStorage.getItem('lang');
  let currentLang;
  if (storedLang) {
    currentLang = storedLang;
  } else {
    const browserLang = navigator.language || navigator.userLanguage || '';
    if (browserLang.toLowerCase().startsWith('ca')) currentLang = 'ca';
    else if (browserLang.toLowerCase().startsWith('en')) currentLang = 'en';
    else currentLang = 'es';
    localStorage.setItem('lang', currentLang);
  }
  document.documentElement.setAttribute('lang', currentLang);

  // Function to apply translations to the DOM
  function setLanguage(lang) {
    // Update page title and description meta
    if (translations[lang].meta) {
      document.title = translations[lang].meta.title;
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) descMeta.setAttribute('content', translations[lang].meta.description);
    }
    // Translate all elements with data-i18n attribute
    const trans = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const keys = el.getAttribute('data-i18n').split('.');
      let text = trans;
      for (let k of keys) {
        if (text && typeof text === 'object') {
          text = text[k];
        }
      }
      if (typeof text === 'string') {
        el.textContent = text;
      }
    });
    // Update any dynamic attributes (aria-labels, etc.)
    const navToggleSr = document.querySelector('[data-nav-toggle] .sr-only');
    if (navToggleSr) navToggleSr.textContent = trans.common.toggle;
    const modalCloseBtn = document.getElementById('modal-close');
    if (modalCloseBtn) modalCloseBtn.setAttribute('aria-label', trans.common.close);
    const timelineModalContent = document.querySelector('#timeline-modal .modal-content');
    if (timelineModalContent) timelineModalContent.setAttribute('aria-label', trans.enfoque.title);
    const timelinePrevButtons = document.querySelectorAll('.timeline-arrow[aria-label]');
    timelinePrevButtons.forEach(btn => {
      // update only if it's a prev/next arrow
      if (btn.getAttribute('aria-label') && (btn.getAttribute('aria-label').match(/Anterior|Anterior|Previous/))) {
        btn.setAttribute('aria-label', trans.common.prev);
      } else if (btn.getAttribute('aria-label') && (btn.getAttribute('aria-label').match(/Siguiente|Següent|Next/))) {
        btn.setAttribute('aria-label', trans.common.next);
      }
    });
    const blogPrev = document.querySelector('.blog-arrow.left');
    const blogNext = document.querySelector('.blog-arrow.right');
    if (blogPrev) blogPrev.setAttribute('aria-label', trans.common.prev);
    if (blogNext) blogNext.setAttribute('aria-label', trans.common.next);
  }

  // Apply initial language to content
  setLanguage(currentLang);

  // FOOTER YEAR
  const yearElem = document.getElementById("year");
  if (yearElem) yearElem.textContent = new Date().getFullYear();

  // NAVBAR: hide on scroll down, show on scroll up (after initial 40%)
  const header = document.querySelector(".site-header.auto-hide");
  let lastScroll = window.pageYOffset || 0;
  let hideThreshold = 0;
  const computeThreshold = () => {
    const doc = document.documentElement;
    const maxScroll = Math.max(0, doc.scrollHeight - window.innerHeight);
    hideThreshold = maxScroll * 0.40;
  };
  const handleHeaderOnScroll = () => {
    if (!header) return;
    const current = window.pageYOffset || 0;
    if (current <= hideThreshold) {
      header.classList.remove("hide");
      lastScroll = current;
      return;
    }
    if (current > lastScroll + 10) {
      header.classList.add("hide");
    } else if (current < lastScroll - 10) {
      header.classList.remove("hide");
    }
    lastScroll = current;
  };
  let ticking = false;
  const onScrollThrottled = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleHeaderOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  };
  if (header) {
    computeThreshold();
    window.addEventListener("resize", computeThreshold, { passive: true });
    window.addEventListener("scroll", onScrollThrottled, { passive: true });
    handleHeaderOnScroll();
  }

  // SCROLL SPY (highlight nav link for current section in view)
  (function () {
    const navLinks = document.querySelectorAll(".nav-menu .nav-link");
    const sections = Array.from(navLinks).map(link => {
      const href = link.getAttribute("href");
      if (!href || !href.includes("#")) return null;
      const hash = href.substring(href.indexOf("#"));
      const target = document.querySelector(hash);
      return target ? { link, target } : null;
    }).filter(Boolean);
    function onScrollSpy() {
      const y = window.pageYOffset + window.innerHeight / 3;
      sections.forEach(({ link, target }) => {
        const top = target.offsetTop;
        const bottom = top + target.offsetHeight;
        if (y >= top && y < bottom) {
          navLinks.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
        }
      });
    }
    window.addEventListener("scroll", onScrollSpy, { passive: true });
    window.addEventListener("resize", onScrollSpy, { passive: true });
    document.addEventListener("DOMContentLoaded", onScrollSpy);
  })();

  // MOBILE NAV TOGGLE (show/hide nav menu on small screens)
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-menu]");
  if (navToggle && navMenu) {
    const setMenuVisibility = (show) => {
      navToggle.setAttribute("aria-expanded", String(show));
      navMenu.classList.toggle("open", show);
    };
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      setMenuVisibility(!expanded);
    });
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 900) setMenuVisibility(false);
      });
    });
  }

  // LANGUAGE SWITCHER (update language on button click)
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const newLang = btn.getAttribute("data-lang");
      if (newLang && translations[newLang]) {
        localStorage.setItem('lang', newLang);
        // Reload page to fully apply new language
        window.location.reload();
      }
    });
  });

  // SERVICES: expand/collapse cards (single open at a time)
  (function () {
    const grid = document.querySelector("[data-services]");
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll("[data-service]"));
    const EXPANDED_CLASS_PREFIX = "expanded-";
    const clearExpandedClasses = () => {
      grid.classList.remove("has-expanded");
      grid.className.split(" ").forEach(cls => {
        if (cls.startsWith(EXPANDED_CLASS_PREFIX)) grid.classList.remove(cls);
      });
    };
    const applyExpandedClasses = () => {
      clearExpandedClasses();
      const expandedCard = grid.querySelector(".service-card.is-expanded");
      if (!expandedCard) return;
      const id = expandedCard.getAttribute("data-service-id") || "";
      if (!id) return;
      grid.classList.add("has-expanded");
      grid.classList.add(`${EXPANDED_CLASS_PREFIX}${id}`);
    };
    const closeAll = (exceptCard) => {
      cards.forEach(card => {
        if (exceptCard && card === exceptCard) return;
        card.classList.remove("is-expanded");
        const hit = card.querySelector(".service-hit");
        if (hit) hit.setAttribute("aria-expanded", "false");
      });
      applyExpandedClasses();
    };
    cards.forEach(card => {
      const hit = card.querySelector(".service-hit");
      if (!hit) return;
      hit.addEventListener("click", e => {
        e.preventDefault();
        const isOpen = card.classList.contains("is-expanded");
        closeAll(card);
        if (!isOpen) {
          card.classList.add("is-expanded");
          hit.setAttribute("aria-expanded", "true");
        } else {
          card.classList.remove("is-expanded");
          hit.setAttribute("aria-expanded", "false");
        }
        applyExpandedClasses();
        // If expanding, populate detail bullets with translated content
        if (!isOpen) {
          const serviceId = card.getAttribute("data-service-id");
          if (serviceId && translations[currentLang].servicios.areas[serviceId]) {
            const detail = card.querySelector(".service-detail");
            if (detail) {
              const ul = detail.querySelector("ul");
              const bullets = translations[currentLang].servicios.areas[serviceId].bullets;
              if (ul && bullets) {
                ul.innerHTML = "";
                bullets.forEach(pt => {
                  const li = document.createElement("li");
                  li.textContent = pt;
                  ul.appendChild(li);
                });
              }
            }
          }
        }
      });
      // Allow closing with Escape
      card.addEventListener("keydown", e => {
        if (e.key === "Escape") closeAll();
      });
    });
    document.addEventListener("click", e => {
      const clickedInside = e.target.closest("[data-services]");
      if (!clickedInside) closeAll();
    });
    applyExpandedClasses();
  })();

  // TIMELINE: initialize timeline components (autoplay, controls)
  (function () {
    const timelineRoots = document.querySelectorAll("[data-timeline]");
    if (!timelineRoots.length) return;
    timelineRoots.forEach(root => {
      const titles = Array.from(root.querySelectorAll(".timeline-title"));
      const contentEl = root.querySelector("[data-timeline-content]");
      const prevBtn = root.querySelector("[data-timeline-prev]");
      const nextBtn = root.querySelector("[data-timeline-next]");
      const bar = root.querySelector("[data-timeline-bar]");
      const steps = translations[currentLang].enfoque.steps;
      let index = 0;
      let running = false;
      let timeoutId = null;
      let barStartTs = null;
      let elapsedMs = 0;
      const INTERVAL = 12000;
      const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      const clearTimer = () => { if (timeoutId) clearTimeout(timeoutId); timeoutId = null; };
      const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
      const setBarInstant = (pct) => {
        if (!bar) return;
        bar.style.transition = "none";
        bar.style.width = `${pct}%`;
        void bar.offsetWidth;
      };
      const animateBarToEnd = (remainingMs, fromPct) => {
        if (!bar) return;
        if (prefersReducedMotion) {
          setBarInstant(100);
          return;
        }
        setBarInstant(fromPct);
        bar.style.transition = `width ${remainingMs}ms linear`;
        bar.style.width = "100%";
      };
      const renderStep = (i) => {
        index = (i + steps.length) % steps.length;
        titles.forEach((btn, n) => {
          const active = n === index;
          btn.classList.toggle("is-active", active);
          btn.setAttribute("aria-selected", String(active));
        });
        if (contentEl) {
          const step = steps[index];
          contentEl.innerHTML = `<h3>${step.title}</h3><p>${step.body}</p>`;
        }
      };
      const scheduleNext = (delayMs) => {
        if (prefersReducedMotion || !running) return;
        clearTimer();
        timeoutId = setTimeout(() => {
          if (!running) return;
          elapsedMs = 0;
          barStartTs = performance.now();
          renderStep(index + 1);
          animateBarToEnd(INTERVAL, 0);
          scheduleNext(INTERVAL);
        }, delayMs);
      };
      const startAutoplay = () => {
        if (prefersReducedMotion || running) return;
        running = true;
        elapsedMs = clamp(elapsedMs, 0, INTERVAL);
        const remaining = clamp(INTERVAL - elapsedMs, 0, INTERVAL);
        const fromPct = (elapsedMs / INTERVAL) * 100;
        barStartTs = performance.now();
        animateBarToEnd(remaining, fromPct);
        scheduleNext(remaining);
      };
      const stopAutoplay = () => {
        if (!running) return;
        running = false;
        clearTimer();
        if (barStartTs != null) {
          const now = performance.now();
          elapsedMs = clamp(elapsedMs + (now - barStartTs), 0, INTERVAL);
        }
        barStartTs = null;
        const pct = (elapsedMs / INTERVAL) * 100;
        setBarInstant(pct);
      };
      const userAdvance = (nextIndex) => {
        renderStep(nextIndex);
        elapsedMs = 0;
        barStartTs = running ? performance.now() : null;
        if (bar) setBarInstant(0);
        if (running && !prefersReducedMotion) {
          animateBarToEnd(INTERVAL, 0);
          scheduleNext(INTERVAL);
        }
      };
      const next = () => userAdvance(index + 1);
      const prev = () => userAdvance(index - 1);
      titles.forEach(btn => {
        btn.addEventListener("click", () => {
          const stepIndex = Number(btn.getAttribute("data-step"));
          userAdvance(Number.isFinite(stepIndex) ? stepIndex : 0);
        });
        btn.addEventListener("keydown", e => {
          if (e.key === "ArrowRight") { e.preventDefault(); next(); }
          if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
        });
      });
      if (nextBtn) nextBtn.addEventListener("click", () => next());
      if (prevBtn) prevBtn.addEventListener("click", () => prev());
      // Use IntersectionObserver to auto-play only when timeline is in view
      let isInView = false;
      const sectionElem = root.closest("section") || root;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.target !== sectionElem) return;
          isInView = entry.isIntersecting && entry.intersectionRatio >= 0.35;
          if (isInView) startAutoplay();
          else stopAutoplay();
        });
      }, { threshold: [0, 0.15, 0.35, 0.6, 1] });
      observer.observe(sectionElem);
      renderStep(0);
      if (bar) setBarInstant(0);
      // Keyboard convenience on section: allow arrow keys to navigate timeline when focused
      sectionElem.addEventListener("keydown", e => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      });
    });
  })();

  // BLOG POSTS CAROUSEL: horizontal scroll with arrows
  (function () {
    const container = document.querySelector(".blog-cards");
    const prevBtn = document.querySelector(".blog-arrow.left");
    const nextBtn = document.querySelector(".blog-arrow.right");
    if (!container || !prevBtn || !nextBtn) return;
    const updateArrows = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      prevBtn.style.display = (container.scrollLeft > 5) ? "block" : "none";
      nextBtn.style.display = (container.scrollLeft < maxScroll - 5) ? "block" : "none";
    };
    updateArrows();
    container.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows, { passive: true });
    prevBtn.addEventListener("click", () => {
      container.scrollBy({ left: -container.clientWidth * 0.8, behavior: 'smooth' });
    });
    nextBtn.addEventListener("click", () => {
      container.scrollBy({ left: container.clientWidth * 0.8, behavior: 'smooth' });
    });
  })();

  // TIMELINE MODAL: show once on first load, and allow reopen via footer link
  (function () {
    const modal = document.getElementById("timeline-modal");
    const overlay = document.getElementById("modal-overlay");
    const closeBtn = document.getElementById("modal-close");
    const openLink = document.getElementById("open-timeline-modal");
    if (!modal) return;
    // Show the modal on first visit
    const shownBefore = localStorage.getItem('timelineModalShown');
    if (!shownBefore) {
      modal.classList.remove("hidden");
      localStorage.setItem('timelineModalShown', 'yes');
    }
    const closeModal = () => {
      modal.classList.add("hidden");
      modal.setAttribute("aria-hidden", "true");
    };
    if (overlay) overlay.addEventListener("click", closeModal);
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (openLink) {
      openLink.addEventListener("click", e => {
        e.preventDefault();
        modal.classList.remove("hidden");
        modal.setAttribute("aria-hidden", "false");
        // Re-run scroll spy in case modal content triggers any changes
        document.dispatchEvent(new Event('DOMContentLoaded'));
      });
    }
  })();
})();
