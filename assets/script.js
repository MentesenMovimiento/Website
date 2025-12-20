(() => {
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

  // Header on scroll
  const header = $('[data-header]');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
  }

  // Mobile nav
  const navBtn = $('[data-nav-toggle]');
  const menu = $('[data-menu]');
  if (navBtn && menu) {
    navBtn.addEventListener('click', () => {
      const expanded = navBtn.getAttribute('aria-expanded') === 'true';
      navBtn.setAttribute('aria-expanded', String(!expanded));
      menu.style.display = expanded ? '' : 'flex';
    });
  }

  // Scroll hint
  const hint = $('[data-scroll-hint]');
  if (hint) hint.addEventListener('click', () => window.scrollTo({top: window.innerHeight - 80, behavior: 'smooth'}));

  // Reveal on scroll
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }
      }
    }, {threshold: 0.15});
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('revealed'));
  }

  // details/summary a11y: rotate chevron and close siblings (keeps UI clean)
  $$('.card details').forEach((d) => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        $$('.card details').forEach(other => { if (other !== d) other.open = false; });
      }
    });
  });

  // Simple form validation
  const form = document.querySelector('[data-validate]');
  if (form) {
    form.addEventListener('submit', (e) => {
      let ok = true;
      const setErr = (id, msg) => { const p = form.querySelector(`[data-err-for="${id}"]`); if (p) p.textContent = msg || '';};
      ['nombre','email','mensaje'].forEach(id => setErr(id,''));
      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const mensaje = form.mensaje.value.trim();
      if (!nombre) { setErr('nombre','Añade tu nombre.'); ok = false; }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setErr('email','Email no válido.'); ok = false; }
      if (mensaje.length < 10) { setErr('mensaje','Cuéntanos un poco más.'); ok = false; }
      if (!ok) e.preventDefault();
    });
  }

  // Reading progress (article pages)
  const progress = document.querySelector('[data-progress]');
  if (progress) {
    const onProg = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const pct = Math.max(0, Math.min(1, window.scrollY / max));
      progress.style.width = (pct * 100).toFixed(2) + '%';
    };
    onProg();
    window.addEventListener('scroll', onProg, {passive:true});
    window.addEventListener('resize', onProg);
  }

  // Build table of contents automatically
  const toc = document.querySelector('[data-toc] nav');
  if (toc) {
    const headings = $$('.post__body h2, .post__body h3');
    headings.forEach(h => {
      if (!h.id) h.id = h.textContent.toLowerCase().trim().replace(/[^\wáéíóúüñ]+/gi,'-');
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.textContent = h.textContent;
      toc.appendChild(a);
    });
  }

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
