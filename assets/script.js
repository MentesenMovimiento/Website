/* assets/script.js */
(function () {
  // FOOTER YEAR
  const yearElem = document.getElementById("year");
  if (yearElem) yearElem.textContent = new Date().getFullYear();

  // NAVBAR: visible for first 40% then hide on down / show on up
  const header = document.querySelector(".site-header.auto-hide");
  let lastScroll = window.pageYOffset || 0;
  let ticking = false;
  let threshold = 0;

  const computeThreshold = () => {
    const doc = document.documentElement;
    const maxScroll = Math.max(0, doc.scrollHeight - window.innerHeight);
    threshold = maxScroll * 0.40;
  };

  const handleHeaderOnScroll = () => {
    if (!header) return;
    const current = window.pageYOffset || 0;

    if (current <= threshold) {
      header.classList.remove("hide");
      lastScroll = current;
      return;
    }

    if (current > lastScroll + 10) header.classList.add("hide");
    else if (current < lastScroll - 10) header.classList.remove("hide");

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
    handleHeaderOnScroll();
  }

  // SCROLL SPY (nav link highlighting)
  (function () {
    const navLinks = document.querySelectorAll(".nav-menu .nav-link");
    const sections = Array.from(navLinks)
      .map((link) => {
        const href = link.getAttribute("href");
        if (!href || !href.includes("#")) return null;
        const hash = href.substring(href.indexOf("#"));
        const target = document.querySelector(hash);
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

  // MOBILE NAV TOGGLE
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

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 900) setMenuVisibility(false);
      });
    });
  }

  /* MULTILINGUAL SYSTEM */
  const translations = {
    "es": {
      "skip_link": "Saltar al contenido",
      "nav_servicios": "Servicios",
      "nav_enfoque": "Enfoque",
      "nav_blog": "Blog",
      "nav_instagram": "Instagram",
      "nav_legal": "Legal",
      "nav_open_menu": "Abrir menú",
      "nav_aria_main": "Navegación principal",
      "hero_trust1": "Enfoque funcional y aplicable",
      "hero_trust2": "Coordinación familia–escuela",
      "hero_trust3": "Objetivos claros y medibles",
      "hero_slogan": "Cada niño, su propio camino",
      "hero_lead": "Acompañamos a niños y adolescentes que presentan dificultades en <strong>regulación</strong>, <strong>aprendizaje</strong>, <strong>comunicación</strong> o <strong>adaptación escolar</strong>, con un enfoque integrado: mente, cuerpo y acción.",
      "hero_cta_primary": "Cuéntanos tu caso",
      "hero_cta_secondary": "Ver cómo trabajamos",
      "who_heading": "Quiénes somos",
      "who_desc": "Un equipo con base en educación y movimiento, con una mirada cálida y profesional. Lo importante: estrategias que funcionan en la vida real (casa y colegio).",
      "trust1_title": "Trabajo centrado en el niño",
      "trust1_text": "Ajustamos el plan al perfil, ritmo y contexto del niño: no hay “talla única”.",
      "trust2_title": "Intervención con sentido",
      "trust2_text": "Priorizamos objetivos funcionales: participación, autonomía y bienestar.",
      "trust3_title": "Seguimiento y ajustes",
      "trust3_text": "Revisamos avances y adaptamos estrategias con claridad (qué funciona y por qué).",
      "services_heading": "Servicios",
      "services_intro": "Haz clic en cada área para ver detalles y conocer al profesional responsable.",
      "serv_educacion_title": "Educación Especial",
      "serv_educacion_tag": "Aprendizaje funcional, adaptación y participación en contextos reales.",
      "serv_educacion_detail_title": "Educación Especial",
      "serv_educacion_list1": "Apoyos para aprendizaje y autonomía",
      "serv_educacion_list2": "Planificación visual y estructura",
      "serv_educacion_list3": "Estrategias para casa y colegio",
      "serv_educacion_list4": "Objetivos funcionales y medibles",
      "serv_educacion_team_role": "Educación especial · Intervención individualizada",
      "serv_educacion_team_text": "Acompaña a niños y familias con estrategias prácticas para mejorar participación, adaptación escolar y rutinas diarias. Enfoque cálido, estructurado y centrado en fortalezas.",
      "serv_fisio_title": "Fisioterapia Pediátrica",
      "serv_fisio_tag": "Postura, coordinación y fuerza funcional para la vida diaria.",
      "serv_fisio_detail_title": "Fisioterapia Pediátrica",
      "serv_fisio_list1": "Equilibrio, coordinación y control postural",
      "serv_fisio_list2": "Patrones de movimiento y habilidades motoras",
      "serv_fisio_list3": "Objetivos claros (seguimiento y ajustes)",
      "serv_fisio_team_alt": "Profesional de fisioterapia pediátrica",
      "serv_fisio_team_name": "Profesional de Fisioterapia",
      "serv_fisio_team_role": "Fisioterapia pediátrica",
      "serv_fisio_team_text": "Intervención basada en objetivos funcionales y participación. Trabajo coordinado con familia y escuela para generalizar avances.",
      "serv_fisio_team_placeholder": "(Si aún no has definido nombre/foto, esto queda como placeholder.)",
      "serv_logo_title": "Logopedia",
      "serv_logo_tag": "Comunicación funcional: comprensión, intención y contexto.",
      "serv_logo_detail_title": "Logopedia",
      "serv_logo_list1": "Comunicación más allá del habla",
      "serv_logo_list2": "Comprensión, turnos, juego e interacción",
      "serv_logo_list3": "Apoyos visuales y estrategias prácticas",
      "serv_logo_team_alt": "Profesional de logopedia",
      "serv_logo_team_name": "Profesional de Logopedia",
      "serv_logo_team_role": "Logopedia · Comunicación funcional",
      "serv_logo_team_text": "Enfoque centrado en participación: reducir frustración, aumentar iniciativa comunicativa y mejorar comprensión en rutinas reales.",
      "serv_logo_team_placeholder": "(Placeholder editable: nombre, foto y credenciales.)",
      "serv_mov_title": "Movimiento y Regulación",
      "serv_mov_tag": "Preparación para aprender: cuerpo organizado, mente disponible.",
      "serv_mov_detail_title": "Movimiento y Regulación",
      "serv_mov_list1": "Rutinas de regulación (activación ↔ calma)",
      "serv_mov_list2": "Movimiento con intención (no “gastar energía”)",
      "serv_mov_list3": "Preparación para tareas (learning readiness)",
      "serv_mov_team_role": "Movimiento · Ejercicio terapéutico",
      "serv_mov_team_text": "Diseña actividades y rutinas para ayudar a regular el cuerpo y facilitar atención, participación y aprendizaje. Enfoque práctico y progresivo, adaptado al perfil del niño.",
      "enfoque_heading": "Un enfoque integrado",
      "enfoque_desc": "Títulos siempre visibles. El contenido cambia automáticamente (12s) y se sincroniza con la barra de progreso.",
      "timeline_step1": "Explorar",
      "timeline_step2": "Evaluar",
      "timeline_step3": "Planificar",
      "timeline_step4": "Implementar",
      "timeline_step5": "Revisar",
      "timeline_aria_list": "Etapas del enfoque",
      "timeline_aria_panel": "Contenido del enfoque",
      "timeline_aria_controls": "Controles de enfoque",
      "timeline_aria_prev": "Anterior",
      "timeline_aria_next": "Siguiente",
      "timeline_body1": "Escuchar y observar con atención, recopilando contexto familiar y escolar para entender fortalezas y retos reales.",
      "timeline_body2": "Evaluar funciones y habilidades en contextos reales para identificar necesidades y prioridades de intervención.",
      "timeline_body3": "Diseñar un plan centrado en objetivos claros, medibles y relevantes para el niño y su entorno.",
      "timeline_body4": "Aplicar estrategias y prácticas funcionales en la vida diaria del niño, con ajustes continuos.",
      "timeline_body5": "Monitorear resultados, recopilar retroalimentación y adaptar el plan para fomentar autonomía y bienestar.",
      "blog_heading": "Blog",
      "blog_desc": "Lecturas cortas y aplicables para familias y profesionales.",
      "blog1_title": "Movimiento y desarrollo infantil",
      "blog1_excerpt": "Atención, regulación y preparación para aprender.",
      "blog1_img_alt": "Movimiento y desarrollo infantil",
      "blog2_title": "Logopedia funcional",
      "blog2_excerpt": "Comunicación más allá del habla: intención, comprensión y contexto.",
      "blog2_img_alt": "Logopedia y desarrollo global",
      "blog3_title": "Intervención individualizada",
      "blog3_excerpt": "Objetivos funcionales y coordinación familia–escuela.",
      "blog3_img_alt": "Intervención individualizada",
      "blog_all": "Ver todos los artículos",
      "instagram_heading": "Instagram",
      "instagram_desc": "Contenido educativo: desarrollo, regulación, aprendizaje y estrategias prácticas.",
      "instagram_card_text": "Integra aquí tus embeds reales o enlaces a reels destacados.",
      "contact_heading": "Contacto",
      "contact_desc": "Cuéntanos tu caso (sin compromiso). Responderemos con claridad y orientación inicial.",
      "contact_name_label": "Nombre",
      "contact_email_label": "Email",
      "contact_message_label": "Mensaje",
      "contact_send": "Enviar",
      "contact_success": "Gracias. Hemos recibido tu mensaje.",
      "contact_error_send": "Hubo un error al enviar tu mensaje. Intenta de nuevo más tarde.",
      "contact_error_network": "Error de red. Verifica tu conexión e intenta de nuevo.",
      "legal_contact_label": "Contacto",
      "legal_privacy_label": "Datos y privacidad",
      "legal_privacy_text": "Usamos tus datos únicamente para responder a tu consulta. Cumplimos con la normativa aplicable de protección de datos (RGPD).",
      "serv_educacion_toggle": "Abrir: Educación Especial",
      "serv_educacion_region": "Detalle: Educación Especial",
      "serv_fisio_toggle": "Abrir: Fisioterapia Pediátrica",
      "serv_fisio_region": "Detalle: Fisioterapia Pediátrica",
      "serv_logo_toggle": "Abrir: Logopedia",
      "serv_logo_region": "Detalle: Logopedia",
      "serv_mov_toggle": "Abrir: Movimiento y Regulación",
      "serv_mov_region": "Detalle: Movimiento y Regulación"
    },
    "ca": {
      "skip_link": "Salta al contingut",
      "nav_servicios": "Serveis",
      "nav_enfoque": "Enfocament",
      "nav_blog": "Blog",
      "nav_instagram": "Instagram",
      "nav_legal": "Legal",
      "nav_open_menu": "Obrir menú",
      "nav_aria_main": "Navegació principal",
      "hero_trust1": "Enfocament funcional i aplicable",
      "hero_trust2": "Coordinació família–escola",
      "hero_trust3": "Objectius clars i mesurables",
      "hero_slogan": "Cada infant, el seu propi camí",
      "hero_lead": "Acompanyem infants i adolescents que presenten dificultats en la <strong>regulació</strong>, l'<strong>aprenentatge</strong>, la <strong>comunicació</strong> o l'<strong>adaptació escolar</strong>, amb un enfocament integrat: ment, cos i acció.",
      "hero_cta_primary": "Explica'ns el teu cas",
      "hero_cta_secondary": "Veure com treballem",
      "who_heading": "Qui som",
      "who_desc": "Un equip amb base en educació i moviment, amb una mirada càlida i professional. L'important: estratègies que funcionen en la vida real (casa i escola).",
      "trust1_title": "Treball centrat en l'infant",
      "trust1_text": "Ajustem el pla al perfil, ritme i context de l'infant: no hi ha “talla única”.",
      "trust2_title": "Intervenció amb sentit",
      "trust2_text": "Prioritzem objectius funcionals: participació, autonomia i benestar.",
      "trust3_title": "Seguiment i ajustos",
      "trust3_text": "Revisem avenços i adaptem estratègies amb claredat (què funciona i per què).",
      "services_heading": "Serveis",
      "services_intro": "Fes clic a cada àrea per veure detalls i conèixer el professional responsable.",
      "serv_educacion_title": "Educació Especial",
      "serv_educacion_tag": "Aprenentatge funcional, adaptació i participació en contextos reals.",
      "serv_educacion_detail_title": "Educació Especial",
      "serv_educacion_list1": "Suports per a l'aprenentatge i l'autonomia",
      "serv_educacion_list2": "Planificació visual i estructura",
      "serv_educacion_list3": "Estratègies per a casa i escola",
      "serv_educacion_list4": "Objectius funcionals i mesurables",
      "serv_educacion_team_role": "Educació especial · Intervenció individualitzada",
      "serv_educacion_team_text": "Acompanya infants i famílies amb estratègies pràctiques per millorar la participació, l'adaptació escolar i les rutines diàries. Enfocament càlid, estructurat i centrat en fortaleses.",
      "serv_fisio_title": "Fisioteràpia Pediàtrica",
      "serv_fisio_tag": "Postura, coordinació i força funcional per a la vida diària.",
      "serv_fisio_detail_title": "Fisioteràpia Pediàtrica",
      "serv_fisio_list1": "Equilibri, coordinació i control postural",
      "serv_fisio_list2": "Patrons de moviment i habilitats motrius",
      "serv_fisio_list3": "Objectius clars (seguiment i ajustaments)",
      "serv_fisio_team_alt": "Professional de fisioteràpia pediàtrica",
      "serv_fisio_team_name": "Professional de Fisioteràpia",
      "serv_fisio_team_role": "Fisioteràpia pediàtrica",
      "serv_fisio_team_text": "Intervenció basada en objectius funcionals i participació. Treball coordinat amb la família i l'escola per generalitzar els avenços.",
      "serv_fisio_team_placeholder": "(Si encara no has definit nom/foto, això queda com a placeholder.)",
      "serv_logo_title": "Logopèdia",
      "serv_logo_tag": "Comunicació funcional: comprensió, intenció i context.",
      "serv_logo_detail_title": "Logopèdia",
      "serv_logo_list1": "Comunicació més enllà de la parla",
      "serv_logo_list2": "Comprensió, torns, joc i interacció",
      "serv_logo_list3": "Suports visuals i estratègies pràctiques",
      "serv_logo_team_alt": "Professional de logopèdia",
      "serv_logo_team_name": "Professional de Logopèdia",
      "serv_logo_team_role": "Logopèdia · Comunicació funcional",
      "serv_logo_team_text": "Enfocament centrat en la participació: reduir la frustració, augmentar la iniciativa comunicativa i millorar la comprensió en rutines reals.",
      "serv_logo_team_placeholder": "(Marcador editable: nom, foto i credencials.)",
      "serv_mov_title": "Moviment i Regulació",
      "serv_mov_tag": "Preparació per aprendre: cos organitzat, ment disponible.",
      "serv_mov_detail_title": "Moviment i Regulació",
      "serv_mov_list1": "Rutines de regulació (activació ↔ calma)",
      "serv_mov_list2": "Moviment amb intenció (no “cremar energia”)",
      "serv_mov_list3": "Preparació per a tasques (learning readiness)",
      "serv_mov_team_role": "Moviment · Exercici terapèutic",
      "serv_mov_team_text": "Dissenya activitats i rutines per ajudar a regular el cos i facilitar l'atenció, la participació i l'aprenentatge. Enfocament pràctic i progressiu, adaptat al perfil de l'infant.",
      "enfoque_heading": "Un enfocament integrat",
      "enfoque_desc": "Títols sempre visibles. El contingut canvia automàticament (12s) i es sincronitza amb la barra de progrés.",
      "timeline_step1": "Explorar",
      "timeline_step2": "Avaluar",
      "timeline_step3": "Planificar",
      "timeline_step4": "Implementar",
      "timeline_step5": "Revisar",
      "timeline_aria_list": "Etapes de l'enfocament",
      "timeline_aria_panel": "Contingut de l'enfocament",
      "timeline_aria_controls": "Controls de l'enfocament",
      "timeline_aria_prev": "Anterior",
      "timeline_aria_next": "Següent",
      "timeline_body1": "Escoltar i observar amb atenció, recopilant context familiar i escolar per entendre fortaleses i reptes reals.",
      "timeline_body2": "Avaluar funcions i habilitats en contextos reals per identificar necessitats i prioritats d'intervenció.",
      "timeline_body3": "Dissenyar un pla centrat en objectius clars, mesurables i rellevants per a l'infant i el seu entorn.",
      "timeline_body4": "Aplicar estratègies i pràctiques funcionals en el dia a dia de l'infant, amb ajustaments continus.",
      "timeline_body5": "Supervisar resultats, recopilar feedback i adaptar el pla per fomentar l'autonomia i el benestar.",
      "blog_heading": "Blog",
      "blog_desc": "Lectures curtes i aplicables per a famílies i professionals.",
      "blog1_title": "Moviment i desenvolupament infantil",
      "blog1_excerpt": "Atenció, regulació i preparació per aprendre.",
      "blog1_img_alt": "Moviment i desenvolupament infantil",
      "blog2_title": "Logopèdia funcional",
      "blog2_excerpt": "Comunicació més enllà de la parla: intenció, comprensió i context.",
      "blog2_img_alt": "Logopèdia i desenvolupament global",
      "blog3_title": "Intervenció individualitzada",
      "blog3_excerpt": "Objectius funcionals i coordinació família–escola.",
      "blog3_img_alt": "Intervenció individualitzada",
      "blog_all": "Veure tots els articles",
      "instagram_heading": "Instagram",
      "instagram_desc": "Contingut educatiu: desenvolupament, regulació, aprenentatge i estratègies pràctiques.",
      "instagram_card_text": "Introdueix aquí els teus embeds reals of enllaços a reels destacats.",
      "contact_heading": "Contacte",
      "contact_desc": "Explica'ns el teu cas (sense compromís). Et respondrem amb claredat i orientació inicial.",
      "contact_name_label": "Nom",
      "contact_email_label": "Email",
      "contact_message_label": "Missatge",
      "contact_send": "Enviar",
      "contact_success": "Gràcies. Hem rebut el teu missatge.",
      "contact_error_send": "Hi ha hagut un error en enviar el teu missatge. Torna-ho a provar més tard.",
      "contact_error_network": "Error de xarxa. Comprova la teva connexió i torna-ho a provar.",
      "legal_contact_label": "Contacte",
      "legal_privacy_label": "Dades i privacitat",
      "legal_privacy_text": "Fem servir les teves dades només per respondre a la teva consulta. Complim la normativa aplicable de protecció de dades (RGPD).",
      "serv_educacion_toggle": "Obrir: Educació Especial",
      "serv_educacion_region": "Detall: Educació Especial",
      "serv_fisio_toggle": "Obrir: Fisioteràpia Pediàtrica",
      "serv_fisio_region": "Detall: Fisioteràpia Pediàtrica",
      "serv_logo_toggle": "Obrir: Logopèdia",
      "serv_logo_region": "Detall: Logopèdia",
      "serv_mov_toggle": "Obrir: Moviment i Regulació",
      "serv_mov_region": "Detall: Moviment i Regulació"
    },
    "en": {
      "skip_link": "Skip to content",
      "nav_servicios": "Services",
      "nav_enfoque": "Approach",
      "nav_blog": "Blog",
      "nav_instagram": "Instagram",
      "nav_legal": "Legal",
      "nav_open_menu": "Open menu",
      "nav_aria_main": "Main navigation",
      "hero_trust1": "Functional and practical approach",
      "hero_trust2": "Family–school coordination",
      "hero_trust3": "Clear, measurable goals",
      "hero_slogan": "Each child, their own path",
      "hero_lead": "We support children and adolescents who face challenges in <strong>regulation</strong>, <strong>learning</strong>, <strong>communication</strong>, or <strong>adapting to school</strong>, through an integrated approach: mind, body, and action.",
      "hero_cta_primary": "Tell us about your case",
      "hero_cta_secondary": "See how we work",
      "who_heading": "Who we are",
      "who_desc": "A team grounded in education and movement, with a warm and professional approach. What matters: strategies that work in real life (home and school).",
      "trust1_title": "Child-centered work",
      "trust1_text": "We tailor the plan to the child's profile, pace, and context — no “one-size-fits-all.”",
      "trust2_title": "Meaningful intervention",
      "trust2_text": "We prioritize functional goals: participation, autonomy, and well-being.",
      "trust3_title": "Follow-up and adjustments",
      "trust3_text": "We review progress and adapt strategies with clarity (what works and why).",
      "services_heading": "Services",
      "services_intro": "Click on each area to see details and meet the professional in charge.",
      "serv_educacion_title": "Special Education",
      "serv_educacion_tag": "Functional learning, adaptation, and participation in real-life settings.",
      "serv_educacion_detail_title": "Special Education",
      "serv_educacion_list1": "Supports for learning and autonomy",
      "serv_educacion_list2": "Visual planning and structure",
      "serv_educacion_list3": "Strategies for home and school",
      "serv_educacion_list4": "Functional and measurable goals",
      "serv_educacion_team_role": "Special Education · Individualized intervention",
      "serv_educacion_team_text": "Guides children and families with practical strategies to improve participation, school adaptation, and daily routines. Warm, structured approach focused on strengths.",
      "serv_fisio_title": "Pediatric Physiotherapy",
      "serv_fisio_tag": "Posture, coordination, and functional strength for daily life.",
      "serv_fisio_detail_title": "Pediatric Physiotherapy",
      "serv_fisio_list1": "Balance, coordination, and postural control",
      "serv_fisio_list2": "Movement patterns and motor skills",
      "serv_fisio_list3": "Clear goals (monitoring and adjustments)",
      "serv_fisio_team_alt": "Pediatric physiotherapy professional",
      "serv_fisio_team_name": "Physiotherapy Professional",
      "serv_fisio_team_role": "Pediatric physiotherapy",
      "serv_fisio_team_text": "Intervention based on functional goals and participation. Works in coordination with family and school to generalize progress.",
      "serv_fisio_team_placeholder": "(If name/photo not set yet, this remains a placeholder.)",
      "serv_logo_title": "Speech Therapy",
      "serv_logo_tag": "Functional communication: comprehension, intention, and context.",
      "serv_logo_detail_title": "Speech Therapy",
      "serv_logo_list1": "Communication beyond speech",
      "serv_logo_list2": "Comprehension, turn-taking, play, and interaction",
      "serv_logo_list3": "Visual supports and practical strategies",
      "serv_logo_team_alt": "Speech therapist",
      "serv_logo_team_name": "Speech Therapist",
      "serv_logo_team_role": "Speech Therapy · Functional communication",
      "serv_logo_team_text": "Participation-focused approach: reducing frustration, increasing communicative initiative, and improving comprehension in real routines.",
      "serv_logo_team_placeholder": "(Editable placeholder: name, photo, and credentials.)",
      "serv_mov_title": "Movement & Regulation",
      "serv_mov_tag": "Ready to learn: organized body, engaged mind.",
      "serv_mov_detail_title": "Movement & Regulation",
      "serv_mov_list1": "Regulation routines (activation ↔ calming)",
      "serv_mov_list2": "Movement with intention (not just “burning off energy”)",
      "serv_mov_list3": "Preparation for tasks (learning readiness)",
      "serv_mov_team_role": "Movement · Therapeutic exercise",
      "serv_mov_team_text": "Designs activities and routines to help regulate the body and facilitate attention, participation, and learning. Practical, progressive approach, adapted to the child's profile.",
      "enfoque_heading": "An integrated approach",
      "enfoque_desc": "Titles always visible. Content changes automatically (12s) and syncs with the progress bar.",
      "timeline_step1": "Explore",
      "timeline_step2": "Assess",
      "timeline_step3": "Plan",
      "timeline_step4": "Implement",
      "timeline_step5": "Review",
      "timeline_aria_list": "Approach stages",
      "timeline_aria_panel": "Approach content",
      "timeline_aria_controls": "Approach controls",
      "timeline_aria_prev": "Previous",
      "timeline_aria_next": "Next",
      "timeline_body1": "Listen and observe closely, gathering family and school context to understand real strengths and challenges.",
      "timeline_body2": "Assess functions and skills in real contexts to identify needs and intervention priorities.",
      "timeline_body3": "Design a plan focused on clear, measurable, and relevant goals for the child and their environment.",
      "timeline_body4": "Apply functional strategies and practices in the child's daily life, with continuous adjustments.",
      "timeline_body5": "Monitor results, gather feedback, and adapt the plan to foster autonomy and well-being.",
      "blog_heading": "Blog",
      "blog_desc": "Short, practical reads for families and professionals.",
      "blog1_title": "Movement and Child Development",
      "blog1_excerpt": "Attention, regulation, and getting ready to learn.",
      "blog1_img_alt": "Movement and child development",
      "blog2_title": "Functional Speech Therapy",
      "blog2_excerpt": "Communication beyond speaking: intention, comprehension, and context.",
      "blog2_img_alt": "Speech therapy and overall development",
      "blog3_title": "Individualized Intervention",
      "blog3_excerpt": "Functional goals and family–school coordination.",
      "blog3_img_alt": "Individualized intervention",
      "blog_all": "See all articles",
      "instagram_heading": "Instagram",
      "instagram_desc": "Educational content: development, regulation, learning, and practical strategies.",
      "instagram_card_text": "Embed your actual posts or links to featured reels here.",
      "contact_heading": "Contact",
      "contact_desc": "Tell us about your case (no obligation). We will reply with clarity and initial guidance.",
      "contact_name_label": "Name",
      "contact_email_label": "Email",
      "contact_message_label": "Message",
      "contact_send": "Send",
      "contact_success": "Thank you. We have received your message.",
      "contact_error_send": "There was an error sending your message. Please try again later.",
      "contact_error_network": "Network error. Check your connection and try again.",
      "legal_contact_label": "Contact",
      "legal_privacy_label": "Data & Privacy",
      "legal_privacy_text": "We use your data only to respond to your inquiry. We comply with applicable data protection regulations (GDPR).",
      "serv_educacion_toggle": "Open: Special Education",
      "serv_educacion_region": "Detail: Special Education",
      "serv_fisio_toggle": "Open: Pediatric Physiotherapy",
      "serv_fisio_region": "Detail: Pediatric Physiotherapy",
      "serv_logo_toggle": "Open: Speech Therapy",
      "serv_logo_region": "Detail: Speech Therapy",
      "serv_mov_toggle": "Open: Movement & Regulation",
      "serv_mov_region": "Detail: Movement & Regulation"
    }
  };
  let currentLang;
  const storedLang = localStorage.getItem("lang");
  const browserLang = navigator.language || navigator.userLanguage;
  if (storedLang && ['es', 'ca', 'en'].includes(storedLang)) {
    currentLang = storedLang;
  } else if (browserLang) {
    if (browserLang.startsWith('ca')) currentLang = 'ca';
    else if (browserLang.startsWith('en')) currentLang = 'en';
    else currentLang = 'es';
  } else {
    currentLang = 'es';
  }

  function setLanguage(lang) {
    currentLang = ['es', 'ca', 'en'].includes(lang) ? lang : 'es';
    document.documentElement.setAttribute('lang', currentLang);
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[currentLang] && translations[currentLang][key]) {
        el.innerHTML = translations[currentLang][key];
      }
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
      const key = el.getAttribute("data-i18n-alt");
      if (translations[currentLang] && translations[currentLang][key]) {
        el.setAttribute("alt", translations[currentLang][key]);
      }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const key = el.getAttribute("data-i18n-aria");
      if (translations[currentLang] && translations[currentLang][key]) {
        el.setAttribute("aria-label", translations[currentLang][key]);
      }
    });
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });
    if (window.timelineRender && window.timelineGetIndex) {
      window.timelineRender(window.timelineGetIndex());
    }
  }

  // Apply initial language
  setLanguage(currentLang);

  // Language switcher events
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      localStorage.setItem("lang", lang);
      setLanguage(lang);
    });
  });

  // SERVICES: expand on click (single-open) + dynamic layout classes
  (function () {
    const grid = document.querySelector("[data-services]");
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll("[data-service]"));
    const EXPANDED_CLASS_PREFIX = "expanded-";

    const clearExpandedStateClasses = () => {
      grid.classList.remove("has-expanded");
      Array.from(grid.classList).forEach((cls) => {
        if (cls.startsWith(EXPANDED_CLASS_PREFIX)) grid.classList.remove(cls);
      });
    };

    const applyExpandedStateClasses = () => {
      clearExpandedStateClasses();

      const expandedCard = grid.querySelector(".service-card.is-expanded");
      if (!expandedCard) return;

      const id = expandedCard.getAttribute("data-service-id") || "";
      if (!id) return;

      grid.classList.add("has-expanded");
      grid.classList.add(`${EXPANDED_CLASS_PREFIX}${id}`);
    };

    const closeAll = (exceptCard) => {
      cards.forEach((card) => {
        if (exceptCard && card === exceptCard) return;
        card.classList.remove("is-expanded");
        const hit = card.querySelector(".service-hit");
        if (hit) hit.setAttribute("aria-expanded", "false");
      });
      applyExpandedStateClasses();
    };

    cards.forEach((card) => {
      const hit = card.querySelector(".service-hit");
      if (!hit) return;

      hit.addEventListener("click", (e) => {
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
        applyExpandedStateClasses();
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeAll();
      });
    });

    document.addEventListener("click", (e) => {
      const clickedInside = e.target.closest("[data-services]");
      if (!clickedInside) closeAll();
    });

    applyExpandedStateClasses();
  })();

  // TIMELINE: autoplay and controls
  (function () {
    const root = document.querySelector("[data-timeline]");
    if (!root) return;

    const titles = Array.from(root.querySelectorAll(".timeline-title"));
    const contentEl = root.querySelector("[data-timeline-content]");
    const prevBtn = root.querySelector("[data-timeline-prev]");
    const nextBtn = root.querySelector("[data-timeline-next]");
    const bar = root.querySelector("[data-timeline-bar]");

    // Dynamic timeline steps based on currentLang
    const numSteps = 5;
    const getStep = (n) => {
      const tKey = `timeline_step${n + 1}`;
      const bKey = `timeline_body${n + 1}`;
      return {
        title: translations[currentLang][tKey],
        body: translations[currentLang][bKey]
      };
    };

    const INTERVAL = 12000;
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    let index = 0;
    let running = false;
    let timeoutId = null;
    let barStartTs = null;
    let elapsedMs = 0;

    const clearTimer = () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = null;
    };

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

    const render = (i) => {
      index = ((i % numSteps) + numSteps) % numSteps;
      titles.forEach((btn, n) => {
        const active = n === index;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", String(active));
      });
      if (contentEl) {
        const step = getStep(index);
        contentEl.innerHTML = `<h3>${step.title}</h3><p>${step.body}</p>`;
      }
    };

    const scheduleNextSwap = (delayMs) => {
      if (prefersReducedMotion) return;
      if (!running) return;
      clearTimer();
      timeoutId = window.setTimeout(() => {
        if (!running) return;
        elapsedMs = 0;
        barStartTs = performance.now();
        render(index + 1);
        animateBarToEnd(INTERVAL, 0);
        scheduleNextSwap(INTERVAL);
      }, delayMs);
    };

    const startAutoplay = () => {
      if (prefersReducedMotion) return;
      if (running) return;
      running = true;
      elapsedMs = clamp(elapsedMs, 0, INTERVAL);
      const remaining = clamp(INTERVAL - elapsedMs, 0, INTERVAL);
      const pct = (elapsedMs / INTERVAL) * 100;
      barStartTs = performance.now();
      animateBarToEnd(remaining, pct);
      scheduleNextSwap(remaining);
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
      render(nextIndex);
      elapsedMs = 0;
      barStartTs = running ? performance.now() : null;
      if (bar) setBarInstant(0);
      if (running && !prefersReducedMotion) {
        animateBarToEnd(INTERVAL, 0);
        scheduleNextSwap(INTERVAL);
      }
    };

    const next = () => userAdvance(index + 1);
    const prev = () => userAdvance(index - 1);

    titles.forEach((btn) => {
      btn.addEventListener("click", () => {
        const stepIndex = Number(btn.getAttribute("data-step"));
        userAdvance(Number.isFinite(stepIndex) ? stepIndex : 0);
      });
      btn.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); next(); }
        if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      });
    });

    if (nextBtn) nextBtn.addEventListener("click", () => next());
    if (prevBtn) prevBtn.addEventListener("click", () => prev());

    let isInView = false;
    const section = root.closest("section") || root;

    root.addEventListener("mouseenter", () => { if (running) stopAutoplay(); });
    root.addEventListener("mouseleave", () => { if (isInView && !prefersReducedMotion) startAutoplay(); });
    root.addEventListener("focusin", () => { if (running) stopAutoplay(); });
    root.addEventListener("focusout", () => { if (isInView && !prefersReducedMotion) startAutoplay(); });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target !== section) continue;
          isInView = entry.isIntersecting && entry.intersectionRatio >= 0.35;
          if (isInView) startAutoplay();
          else stopAutoplay();
        }
      },
      { threshold: [0, 0.15, 0.35, 0.6, 1] }
    );

    observer.observe(section);
    render(0);
    if (bar) setBarInstant(0);

    // Expose for language refresh
    window.timelineRender = render;
    window.timelineGetIndex = () => index;

    // keyboard convenience
    if (section) {
      section.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      });
    }
  })();

  // CONTACT FORM AJAX (with basic error handling)
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
          if (successElem) {
            successElem.hidden = false;
            successElem.classList.add("show");
          }
          contactForm.classList.add("hidden");
        } else {
          alert(translations[currentLang]["contact_error_send"]);
        }
      } catch (err) {
        alert(translations[currentLang]["contact_error_network"]);
      }
    });
  }
})();
