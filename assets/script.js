(() => {
  const $ = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => Array.from(c.querySelectorAll(s));
  const base = document.body.getAttribute('data-base') || ''; // why: path reconciliation for /blog/* pages

  // Header tone on scroll
  const header = $('[data-header]');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    onScroll(); addEventListener('scroll', onScroll, {passive:true});
  }

  // Mobile nav
  const navBtn = $('[data-nav-toggle]'); const menu = $('[data-menu]');
  if (navBtn && menu) navBtn.addEventListener('click', () => {
    const expanded = navBtn.getAttribute('aria-expanded') === 'true';
    navBtn.setAttribute('aria-expanded', String(!expanded));
    menu.style.display = expanded ? '' : 'flex'; // why: small, accessible toggle
  });

  // Reveal on scroll
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((ents)=>ents.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target);}}),{threshold:.15});
    reveals.forEach(el=>io.observe(el));
  } else { reveals.forEach(el=>el.classList.add('revealed')); }

  // Close sibling <details> (keep UI tidy)
  $$('.card details').forEach((d)=>d.addEventListener('toggle',()=>{ if(d.open){ $$('.card details').forEach(o=>{if(o!==d) o.open=false;}); }}));

  // Dynamic year
  const y = $('#year'); if (y) y.textContent = String(new Date().getFullYear());

  // Reading progress (article pages)
  const progress = document.querySelector('[data-progress]');
  if (progress) {
    const onProg = () => {
      const max = Math.max(1, document.body.scrollHeight - innerHeight);
      progress.style.width = (Math.min(1, scrollY / max) * 100).toFixed(2) + '%';
    };
    onProg(); addEventListener('scroll', onProg, {passive:true}); addEventListener('resize', onProg);
  }

  // Build ToC
  const toc = document.querySelector('[data-toc] nav');
  if (toc) {
    const hs = $$('.post__body h2, .post__body h3');
    hs.forEach(h => {
      if (!h.id) h.id = h.textContent.toLowerCase().trim().replace(/[^\wáéíóúüñ]+/gi,'-');
      const a = document.createElement('a'); a.href = `#${h.id}`; a.textContent = h.textContent; toc.appendChild(a);
    });
  }

  // Compute reading time on article pages
  const rt = document.querySelector('[data-reading-time]');
  const body = $('.post__body');
  if (rt && body) {
    const words = body.textContent.trim().split(/\s+/).length;
    const mins = Math.max(1, Math.ceil(words / 200));
    rt.textContent = `${mins} min · Por Mentes en Movimiento`;
  }

  // Serverless form validation (client-side only)
  const form = document.querySelector('[data-validate]');
  if (form) {
    form.addEventListener('submit', (e) => {
      let ok = true;
      const setErr = (id, msg) => { const p = form.querySelector(`[data-err-for="${id}"]`); if (p) p.textContent = msg || ''; };
      ['nombre','email','mensaje'].forEach(id => setErr(id,''));
      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const mensaje = form.mensaje.value.trim();
      if (!nombre) { setErr('nombre','Añade tu nombre.'); ok=false; }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setErr('email','Email no válido.'); ok=false; }
      if (mensaje.length < 10) { setErr('mensaje','Cuéntanos un poco más.'); ok=false; }
      if (!ok) e.preventDefault();
    });
  }

  // Dynamic blog cards
  const homeWrap = document.querySelector('[data-blog-home]');
  const archiveWrap = document.querySelector('[data-blog-archive]');
  if (homeWrap || archiveWrap) {
    const postsPath = base ? 'posts.json' : 'blog/posts.json';
    fetch(postsPath).then(r => r.json()).then(posts => {
      const tpl = (p, isArchive=false) => {
        const cover = (base ? '../' : '') + p.cover; // path fix for /blog/*
        const href = (base ? '' : 'blog/') + `${p.slug}.html`;
        return `
          <article class="blog-card reveal">
            <a class="blog-card__link" href="${href}">
              <img loading="lazy" src="${cover}" alt="" class="blog-card__img" />
              <div class="blog-card__body">
                <span class="badge">${p.tag}</span>
                <h3>${p.title}</h3>
                <p class="muted">${p.excerpt}</p>
                <p class="meta">${p.minutes} min · Lectura</p>
              </div>
            </a>
          </article>`;
      };
      if (homeWrap) homeWrap.innerHTML = posts.slice(0,3).map(p => tpl(p)).join('');
      if (archiveWrap) archiveWrap.innerHTML = posts.map(p => tpl(p, true)).join('');
      // trigger reveal animation on injected nodes
      $$('.reveal').forEach(el => el.classList.add('revealed'));
    }).catch(()=>{ /* leave fallbacks */ });
  }
})();
