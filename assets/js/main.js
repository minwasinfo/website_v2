/* MINWAS — shared page chrome, translations, forms and image zoom. */
(function () {
  'use strict';

  /* ---------- Site settings ---------- */
  const SITE = {
    phone: '+918618208700',
    phoneDisplay: '+91 86182 08700',
    whatsapp: '918618208700',
    email: 'hello@minwas.com',
    maps: 'https://www.google.com/maps/search/?api=1&query=Vijayapura+District%2C+Karnataka%2C+India',
    linkedin: 'https://www.linkedin.com/company/minwas-advanced-recycling-pvt-ltd',
    // Web3Forms access key. Enquiries are emailed to the address the key was created for,
    // which must be hello@minwas.com (create one free at https://web3forms.com; it arrives by email).
    web3formsKey: '',
  };

  const LANGS = {
    en: { name: 'English' },
    kn: { name: 'ಕನ್ನಡ', font: 'https://fonts.googleapis.com/css2?family=Anek+Kannada:wght@500;600;700&family=Noto+Sans+Kannada:wght@400;500;600&display=swap' },
    hi: { name: 'हिन्दी', font: 'https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600&display=swap' },
    mr: { name: 'मराठी', font: 'https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600&display=swap' },
  };
  const STORE_KEY = 'minwas-lang';

  /* ---------- Icons (24px line icons) ---------- */
  const ICONS = {
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    whatsapp: '<path fill="currentColor" stroke="none" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41Z"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    zoom: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/>',
    external: '<path d="M15 3h6v6M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    form: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 13h8M8 17h5"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    rupee: '<path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3M9 13c6.7 0 6.7-10 0-10"/>',
    loop: '<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/>',
    filecheck: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M9 15l2 2 4-4"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    factory: '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1M12 18h1M7 18h1"/>',
    sprout: '<path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8zM14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
    scale: '<path d="m16 16 3-8 3 8c-.9.7-1.9 1-3 1s-2.1-.3-3-1ZM2 16l3-8 3 8c-.9.7-1.9 1-3 1s-2.1-.3-3-1Z"/><path d="M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
    badge: '<circle cx="12" cy="8" r="6"/><path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    tag: '<path d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
    box: '<path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
    ban: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
    droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    sort: '<path d="M3 6h18M7 12h10M10 18h4"/>',
    flask: '<path d="M9 2v7.5L4 20a1.5 1.5 0 0 0 1.4 2h13.2A1.5 1.5 0 0 0 20 20l-5-10.5V2M8 2h8M7 16h10"/>',
    testtube: '<path d="M14.5 2v17.5a2.5 2.5 0 0 1-5 0V2M8.5 2h7M14.5 16h-5"/>',
    layers: '<path d="M12.8 2.2a2 2 0 0 0-1.6 0L2.6 6.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0l8.6-3.9a1 1 0 0 0 0-1.8z"/><path d="m22 12-9.2 4.2a2 2 0 0 1-1.6 0L2 12M22 17l-9.2 4.2a2 2 0 0 1-1.6 0L2 17"/>',
  };

  function injectSprite() {
    const symbols = Object.entries(ICONS)
      .map(([name, body]) => `<symbol id="i-${name}" viewBox="0 0 24 24">${body}</symbol>`).join('');
    document.body.insertAdjacentHTML('afterbegin',
      `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">${symbols}</svg>`);
  }
  const icon = (name, cls = '') => `<svg class="icon ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const waLink = (msg = '') => `https://wa.me/${SITE.whatsapp}${msg ? '?text=' + encodeURIComponent(msg) : ''}`;

  /* ---------- Shared header, footer and contact buttons ---------- */
  function renderChrome() {
    const langOptions = Object.entries(LANGS)
      .map(([code, l]) => `<option value="${code}" lang="${code}">${l.name}</option>`).join('');

    const header = document.getElementById('site-header');
    if (header) header.outerHTML = `
<a class="skip-link" href="#main" data-i18n="a11y.skip">Skip to main content</a>
<div class="site-top">
  <div class="topbar">
    <div class="container">
      <div class="topbar-links">
        <a class="topbar-phone" href="tel:${SITE.phone}">${icon('phone')}<span class="t-label"><span class="t-word" data-i18n="top.call">Call</span> ${SITE.phoneDisplay}</span></a>
        <a href="mailto:${SITE.email}" data-i18n-attr="aria-label:top.emailAria" aria-label="Email us">${icon('mail')}<span class="t-label">${SITE.email}</span></a>
        <a href="${SITE.maps}" target="_blank" rel="noopener" data-i18n-attr="aria-label:top.mapAria" aria-label="Open Vijayapura district in Google Maps">${icon('pin')}<span class="t-label" data-i18n="common.location">Vijayapura dist, Karnataka, India</span></a>
      </div>
      <label class="lang-picker">
        <span class="sr-only" data-i18n="top.language">Choose language</span>
        ${icon('globe')}
        <select id="lang-select">${langOptions}</select>
        ${icon('chevron', 'chev')}
      </label>
    </div>
  </div>
  <header class="header">
    <div class="container">
      <a class="brand" href="index.html" data-i18n-attr="aria-label:nav.homeAria" aria-label="MINWAS home page">
        <img src="assets/img/logo.webp" width="48" height="48" alt=""><span>MINWAS</span>
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        ${icon('menu', 'icon-menu')}${icon('close', 'icon-close')}<span data-i18n="nav.menu">Menu</span>
      </button>
      <nav id="site-nav" class="nav" data-i18n-attr="aria-label:nav.aria" aria-label="Main">
        <a href="sell.html" data-nav="sell" data-i18n="nav.sell">Sell Plastic</a>
        <a href="buy.html" data-nav="buy" data-i18n="nav.buy">Buy Products</a>
        <a href="about.html" data-nav="about" data-i18n="nav.about">About</a>
        <a class="btn btn-petrol" href="contact.html" data-nav="contact" data-i18n="nav.contact">Contact</a>
      </nav>
    </div>
  </header>
</div>`;

    const footer = document.getElementById('site-footer');
    if (footer) footer.outerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand-line" href="index.html" style="opacity:1">
          <img src="assets/img/logo.webp" width="52" height="52" alt="MINWAS logo">
          <strong>MINWAS<br>Advanced Recycling Pvt. Ltd.</strong>
        </a>
        <span data-i18n="footer.tagline">Plastic resource recovery, built for India</span>
        <span class="muted">GSTIN: 29AAUCM4725B1Z8</span>
        <span class="muted">CIN: U38210KA2026PTC215421</span>
        <ul class="footer-list" style="margin-top:6px">
          <li>${icon('pin')}<a href="${SITE.maps}" target="_blank" rel="noopener" data-i18n="common.location">Vijayapura dist, Karnataka, India</a></li>
        </ul>
      </div>
      <div>
        <h2 data-i18n="footer.enquiries">Enquiries</h2>
        <ul class="footer-list">
          <li><a href="sell.html#enquiry" data-i18n="footer.sellWaste">Sell plastic waste</a></li>
          <li><a href="buy.html#enquiry" data-i18n="footer.buyProducts">Buy products</a></li>
          <li><a href="contact.html#enquiry" data-i18n="footer.general">General enquiry</a></li>
        </ul>
      </div>
      <div>
        <h2 data-i18n="footer.contact">Contact</h2>
        <ul class="footer-list">
          <li>${icon('phone')}<a href="tel:${SITE.phone}">${SITE.phoneDisplay}</a></li>
          <li>${icon('mail')}<a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li>${icon('clock')}<span data-i18n="common.hours">Monday – Saturday, 9:00 AM – 6:00 PM IST</span></li>
          <li>${icon('linkedin')}<a href="${SITE.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-i18n="footer.rights">© 2026 Minwas Advanced Recycling Private Limited. All rights reserved.</span>
      <a href="privacy.html" data-i18n="footer.privacy">Privacy Policy</a>
    </div>
  </div>
</footer>
<div class="fab">
  <a class="fab-wa" href="${waLink()}" data-wa="wa.general" target="_blank" rel="noopener" data-i18n-attr="aria-label:cta.waAria" aria-label="Chat with us on WhatsApp">${icon('whatsapp')}</a>
  <a class="fab-call" href="tel:${SITE.phone}" data-i18n-attr="aria-label:cta.callAria" aria-label="Call us">${icon('phone')}</a>
</div>
<div class="action-bar">
  <a class="btn btn-petrol" href="tel:${SITE.phone}">${icon('phone')}<span data-i18n="cta.call">Call</span></a>
  <a class="btn btn-whatsapp" href="${waLink()}" data-wa="wa.general" target="_blank" rel="noopener">${icon('whatsapp')}<span>WhatsApp</span></a>
</div>
<dialog class="lightbox" id="lightbox">
  <button class="lightbox-close" type="button">${icon('close')}<span data-i18n="common.close">Close</span></button>
  <div class="lightbox-inner"><img alt=""></div>
</dialog>`;

    // Expand icon placeholders written in page markup: <i data-icon="name"></i>
    document.querySelectorAll('i[data-icon]').forEach(el => { el.outerHTML = icon(el.dataset.icon); });

    const page = document.body.dataset.page;
    document.querySelectorAll(`.nav a[data-nav="${page}"]`).forEach(a => a.setAttribute('aria-current', 'page'));

    const top = document.querySelector('.site-top');
    const toggle = document.querySelector('.menu-toggle');
    toggle.addEventListener('click', () => {
      const open = top.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && top.classList.contains('menu-open')) { top.classList.remove('menu-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.focus(); }
    });
  }

  /* ---------- Translations ---------- */
  window.MINWAS_I18N = window.MINWAS_I18N || {};
  let currentLang = 'en';
  const t = (key, fallback) => (window.MINWAS_I18N[currentLang] || {})[key] ?? fallback;

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src; s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  const loadedFonts = {};
  function loadFont(href) {
    if (!href) return Promise.resolve();
    if (!loadedFonts[href]) {
      loadedFonts[href] = new Promise(resolve => {
        const l = document.createElement('link');
        l.rel = 'stylesheet'; l.href = href; l.onload = resolve; l.onerror = resolve;
        document.head.appendChild(l);
      });
    }
    return loadedFonts[href];
  }
  const timeout = ms => new Promise(r => setTimeout(r, ms));

  function applyLang(lang) {
    currentLang = lang;
    const dict = window.MINWAS_I18N[lang] || {};
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (el.dataset.orig === undefined) el.dataset.orig = el.innerHTML;
      const v = lang === 'en' ? undefined : dict[el.dataset.i18n];
      el.innerHTML = v ?? el.dataset.orig;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split('|').forEach(pair => {
        const [attr, key] = pair.split(':');
        const store = 'orig' + attr.replace(/[^a-z]/gi, '');
        if (el.dataset[store] === undefined) el.dataset[store] = el.getAttribute(attr) || '';
        const v = lang === 'en' ? undefined : dict[key];
        el.setAttribute(attr, v ?? el.dataset[store]);
      });
    });
    document.querySelectorAll('[data-wa]').forEach(a => {
      a.href = waLink(t(a.dataset.wa, WA_TEXT[a.dataset.wa] || ''));
    });
    document.documentElement.lang = lang;
    const sel = document.getElementById('lang-select');
    if (sel) sel.value = lang;
  }

  const WA_TEXT = {
    'wa.general': 'Hello MINWAS, I have a question.',
    'wa.sell': 'Hello MINWAS, I want to sell plastic waste.',
  };

  async function setLang(lang, save) {
    if (!LANGS[lang]) lang = 'en';
    if (lang !== 'en') {
      const font = Promise.race([loadFont(LANGS[lang].font), timeout(1500)]);
      if (!window.MINWAS_I18N[lang]) {
        try { await loadScript(`assets/i18n/${lang}.js`); } catch (e) { lang = 'en'; }
      }
      await font;
    }
    applyLang(lang);
    if (save) { try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* storage blocked */ } }
    document.documentElement.classList.remove('i18n-pending');
  }

  function initialLang() {
    let saved = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) { /* storage blocked */ }
    if (saved && LANGS[saved]) return saved;
    const browser = ((navigator.languages && navigator.languages[0]) || navigator.language || '').slice(0, 2);
    return LANGS[browser] ? browser : 'en';
  }

  /* ---------- Process timelines: numbered circles joined by a dashed wave ---------- */
  function renderTimelines() {
    // The 800-unit-wide box maps onto the four equal columns, so circle centres fall at x = 100, 300, 500, 700
    // on the centre line (y = 60). The wave dips below between 1–2 and 3–4 and rises above between 2–3.
    // It is stretched to the row width; non-scaling-stroke keeps the dashes and line weight constant.
    const wave = 'M100 60 C140 100 160 106 200 106 C240 106 260 100 300 60 C340 20 360 14 400 14 C440 14 460 20 500 60 C540 100 560 106 600 106 C640 106 660 100 700 60';
    document.querySelectorAll('.timeline').forEach(tl => {
      tl.insertAdjacentHTML('afterbegin',
        `<svg class="timeline-wave" viewBox="0 0 800 120" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="${wave}" vector-effect="non-scaling-stroke"/></svg>`);
    });
  }

  /* ---------- Image zoom ---------- */
  function initZoom() {
    const dlg = document.getElementById('lightbox');
    if (!dlg || typeof dlg.showModal !== 'function') return;
    const img = dlg.querySelector('img');
    document.querySelectorAll('a[data-zoom]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      img.src = a.href;
      img.alt = a.querySelector('img')?.alt || '';
      dlg.showModal();
    }));
    dlg.querySelector('.lightbox-close').addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', e => { if (e.target === dlg || e.target.classList.contains('lightbox-inner')) dlg.close(); });
  }

  /* ---------- Enquiry forms ---------- */
  // Indian numbers: an optional +91 / 91 / 0091 / 0 prefix, then a 10-digit number starting 2–9
  // (6–9 for mobiles, 2–8 for landlines with STD code). Returns "+91 XXXXX XXXXX" or null.
  function normalizeIndianPhone(value) {
    let d = value.replace(/[\s\-().]/g, '');
    if (!/^\+?\d+$/.test(d)) return null;
    d = d.replace(/^\+/, '');
    if (d.length === 14 && d.startsWith('0091')) d = d.slice(4);
    else if (d.length === 12 && d.startsWith('91')) d = d.slice(2);
    else if (d.length === 11 && d.startsWith('0')) d = d.slice(1);
    if (!/^[2-9]\d{9}$/.test(d) || /^(\d)\1{9}$/.test(d)) return null;
    return `+91 ${d.slice(0, 5)} ${d.slice(5)}`;
  }
  const isValidEmail = v => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/.test(v) && !/\.\./.test(v);

  const ERRORS = {
    'form.errRequired': 'Please fill in this field.',
    'form.errPhone': 'Enter a valid Indian phone number, e.g. 98765 43210 or +91 98765 43210.',
    'form.errEmail': 'Enter a valid email address, e.g. name@example.com – or leave it empty.',
    'form.errTickOne': 'Tick at least one option.',
    'form.errConsent': 'Please tick this box to agree before sending.',
  };

  function initForms() {
    const forms = document.querySelectorAll('form[data-enquiry]');
    if (!forms.length) return;

    forms.forEach(f => {
      f.noValidate = true; // our own inline, translated messages replace the browser's tooltips
      const slot = f.querySelector('.captcha-slot');
      if (slot) slot.innerHTML = '<div class="h-captcha" data-captcha="true"></div>';
      // Honeypot: hidden from people, filled in by bots; Web3Forms drops those submissions.
      f.insertAdjacentHTML('afterbegin', '<input type="checkbox" name="botcheck" class="sr-only" tabindex="-1" autocomplete="off" aria-hidden="true">');
    });
    loadScript('https://web3forms.com/client/script.js').catch(() => {});

    // Inline error under a field. The message element carries data-i18n so it follows language switches.
    function setError(target, key) {
      const anchor = target.closest('.check-group, .consent') || target;
      let msg = anchor.nextElementSibling;
      if (!msg || !msg.classList.contains('field-error')) {
        if (!key) return;
        msg = document.createElement('p');
        msg.className = 'field-error';
        msg.id = `${target.id || target.name.replace(/\W+/g, '-')}-error`;
        anchor.after(msg);
      }
      const field = anchor.closest('.field, .consent') || anchor;
      if (!key) { msg.remove(); field.classList.remove('is-invalid'); target.removeAttribute('aria-invalid'); return; }
      msg.dataset.i18n = key;
      msg.dataset.orig = ERRORS[key];
      msg.textContent = t(key, ERRORS[key]);
      field.classList.add('is-invalid');
      target.setAttribute('aria-invalid', 'true');
      target.setAttribute('aria-describedby', msg.id);
    }

    // Returns the error key for one control, or null when it is fine.
    function check(el, form) {
      const v = (el.value || '').trim();
      if (el.type === 'checkbox' && el.name === 'consent') return el.checked ? null : 'form.errConsent';
      if (el.matches('.check-group input')) {
        const group = el.closest('.check-group');
        return group.querySelector('input:checked') ? null : 'form.errTickOne';
      }
      if (el.required && !v) return 'form.errRequired';
      if (el.type === 'tel' && v && !normalizeIndianPhone(v)) return 'form.errPhone';
      if (el.type === 'email' && v && !isValidEmail(v)) return 'form.errEmail';
      return null;
    }

    function validate(form) {
      let first = null;
      const done = new Set();
      form.querySelectorAll('input:not([name="botcheck"]), select, textarea').forEach(el => {
        const group = el.closest('.check-group');
        if (group) { if (done.has(group)) return; done.add(group); }
        if (el.type === 'checkbox' && !group && el.name !== 'consent') return;
        const key = check(el, form);
        setError(group ? group.querySelector('input') : el, key);
        if (key && !first) first = el;
      });
      return first;
    }

    forms.forEach(form => {
      const status = form.querySelector('.form-status');
      const button = form.querySelector('button[type="submit"]');
      const show = (key, fallback, kind) => {
        status.innerHTML = t(key, fallback);
        status.className = `form-status is-shown ${kind}`;
        status.setAttribute('role', kind === 'err' ? 'alert' : 'status');
      };
      const hide = () => { status.className = 'form-status'; };

      // Re-check a field as soon as the visitor fixes it (only once it has shown an error).
      form.addEventListener('input', e => {
        const el = e.target;
        const group = el.closest('.check-group');
        const anchor = group ? group.querySelector('input') : el;
        if ((anchor.closest('.field, .consent') || anchor).classList.contains('is-invalid')) setError(anchor, check(el, form));
      });
      form.querySelectorAll('input[type="tel"]').forEach(el => el.addEventListener('blur', () => {
        const n = normalizeIndianPhone(el.value);
        if (n) el.value = n; // show the cleaned-up number so people can see it was understood
      }));

      form.addEventListener('submit', async e => {
        e.preventDefault();
        hide();
        const firstInvalid = validate(form);
        if (firstInvalid) {
          show('form.errFix', 'Please correct the fields marked in red.', 'err');
          firstInvalid.focus({ preventScroll: true });
          firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
        const data = new FormData(form);
        if (!data.get('h-captcha-response')) {
          show('form.captcha', 'Please complete the captcha check before sending.', 'err');
          return;
        }
        if (!SITE.web3formsKey) {
          console.error('MINWAS forms: SITE.web3formsKey is empty, so enquiries cannot be sent.');
          show('form.error', 'Your message could not be sent. Please try again, or call or WhatsApp us on +91 86182 08700.', 'err');
          return;
        }

        // Field names and option values are English, so the email reads the same whatever language the visitor used.
        const payload = new FormData();
        payload.append('access_key', SITE.web3formsKey);
        payload.append('subject', `${form.dataset.enquiry} — ${data.get('Name') || ''}`.trim());
        payload.append('from_name', 'MINWAS website');
        payload.append('h-captcha-response', data.get('h-captcha-response'));
        if (data.get('botcheck')) payload.append('botcheck', 'on');
        const seen = new Set(['consent', 'botcheck', 'h-captcha-response', 'g-recaptcha-response']);
        for (const [name] of data) {
          if (seen.has(name)) continue;
          seen.add(name);
          let val = data.getAll(name).filter(Boolean).join(', ').trim();
          if (form.querySelector(`[name="${name}"]`)?.type === 'tel') val = normalizeIndianPhone(val) || val;
          if (val) payload.append(name, val);
        }
        payload.append('Language', LANGS[currentLang].name);
        payload.append('Page', location.pathname);
        if (data.get('Email')) payload.append('replyto', data.get('Email'));

        button.disabled = true;
        show('form.sending', 'Sending…', 'ok');
        try {
          const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: payload, headers: { Accept: 'application/json' } });
          const json = await res.json();
          if (!json.success) throw new Error(json.message);
          form.reset();
          if (window.hcaptcha) window.hcaptcha.reset();
          show('form.success', 'Thank you! Your enquiry has been sent. We typically respond within 24 hours.', 'ok');
        } catch (err) {
          console.error('MINWAS forms:', err);
          if (window.hcaptcha) window.hcaptcha.reset();
          show('form.error', 'Your message could not be sent. Please try again, or call or WhatsApp us on +91 86182 08700.', 'err');
        } finally {
          button.disabled = false;
        }
      });
    });
  }

  /* ---------- Boot ---------- */
  injectSprite();
  renderChrome();
  renderTimelines();
  initZoom();
  initForms();
  const sel = document.getElementById('lang-select');
  if (sel) sel.addEventListener('change', () => setLang(sel.value, true));
  setLang(initialLang(), false);
})();
