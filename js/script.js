document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Translations ---------- */
const translations = {
  de: {
    "meta.title": "DreamLights Fotos — Fotograf",
    "meta.description": "DreamLights Fotos — professionelle Fotografie: Porträts, Hochzeiten, Events, Love Story.",
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.portfolio": "Portfolio",
    "nav.services": "Leistungen",
    "nav.testimonials": "Referenzen",
    "nav.contact": "Kontakt",
    "nav.cta": "Termin buchen",
    "lang.select": "Sprache wählen",
    "burger.open": "Menü öffnen",
    "scroll.down": "Nach unten scrollen",
    "hero.eyebrow": "Fotograf · Porträts · Hochzeiten · Events",
    "hero.title1": "Licht und Emotionen",
    "hero.title2": "in jedem",
    "hero.titleGradient": "Bild",
    "hero.subtitle": "Ich fotografiere Geschichten, die man immer wieder ansehen möchte. DreamLights Fotos steht für einen persönlichen Blick, weiches Licht und echte Emotionen.",
    "hero.ctaPrimary": "Portfolio ansehen",
    "hero.ctaSecondary": "Kontakt aufnehmen",
    "about.eyebrow": "Über mich",
    "about.title": "Hallo, ich bin die Fotografin hinter DreamLights Fotos",
    "about.desc": "Seit mehr als sieben Jahren helfe ich Menschen, wichtige Momente festzuhalten — Hochzeiten, Verlobungen, Familienporträts und Love Storys. Mein Stil: natürliches Licht, eine warme Atmosphäre und ein Blick fürs Detail, der jedes Bild lebendig macht.",
    "about.badgeLabel": "Jahre Erfahrung",
    "about.stat1Label": "Shootings",
    "about.stat2Label": "Hochzeiten",
    "about.stat3Label": "Zufriedene Kunden",
    "about.cta": "Shooting besprechen",
    "portfolio.eyebrow": "Portfolio",
    "portfolio.title": "Ausgewählte Arbeiten",
    "filter.all": "Alle",
    "filter.portrait": "Porträts",
    "filter.wedding": "Hochzeiten",
    "filter.event": "Events",
    "filter.love": "Love Story",
    "gallery.portrait1": "Porträt · Studio",
    "gallery.wedding1": "Hochzeit · Zeremonie",
    "gallery.love1": "Love Story · Sonnenuntergang",
    "gallery.event1": "Event · Firmenfeier",
    "gallery.portrait2": "Porträt · Straße",
    "gallery.wedding2": "Hochzeit · Feier",
    "gallery.love2": "Love Story · Spaziergang",
    "gallery.event2": "Event · Konzert",
    "gallery.portrait3": "Porträt · Natürliches Licht",
    "services.eyebrow": "Leistungen",
    "services.title": "Shooting-Pakete",
    "service1.title": "Porträtshooting",
    "service1.desc": "Individuelles Fotoshooting im Studio oder vor Ort. Unterstützung bei Styling und Posen.",
    "service1.li1": "1–2 Stunden Shooting",
    "service1.li2": "20 bearbeitete Fotos",
    "service1.li3": "Online-Galerie",
    "service1.price": "ab 150 €",
    "service2.badge": "Beliebt",
    "service2.title": "Hochzeitsshooting",
    "service2.desc": "Vollständige Begleitung des Hochzeitstags von den Vorbereitungen bis zur Feier.",
    "service2.li1": "Bis zu 10 Stunden Shooting",
    "service2.li2": "300+ bearbeitete Fotos",
    "service2.li3": "Video-Highlight (optional)",
    "service2.price": "ab 890 €",
    "service3.title": "Events",
    "service3.desc": "Firmenfeiern, Geburtstage, Abschlussfeiern und andere Veranstaltungen.",
    "service3.li1": "Ab 3 Stunden Shooting",
    "service3.li2": "100+ bearbeitete Fotos",
    "service3.li3": "Schnelle Lieferung",
    "service3.price": "ab 300 €",
    "cta.select": "Auswählen",
    "testimonials.eyebrow": "Referenzen",
    "testimonials.title": "Was Kunden sagen",
    "t1.text": "„Das Shooting war entspannt und hat Spaß gemacht, die Fotos haben alle Erwartungen übertroffen. Danke für die warme Atmosphäre!“",
    "t1.author": "Anna & Dmitri",
    "t1.role": "Hochzeitsshooting",
    "t2.text": "„Sehr aufmerksamer Umgang mit Details, die Fotografin hat mir geholfen, vor der Kamera locker zu werden. Das Ergebnis ist fantastisch!“",
    "t2.author": "Maria K.",
    "t2.role": "Porträtshooting",
    "t3.text": "„Unsere Firmenfeier wurde fotografiert — alles klar, schnell und professionell. Die Fotos hatten wir schon am nächsten Tag.“",
    "t3.author": "Igor S.",
    "t3.role": "Firmenevent",
    "contact.eyebrow": "Kontakt",
    "contact.title1": "Lassen Sie uns",
    "contact.title2": "etwas Schönes erschaffen",
    "contact.desc": "Hinterlassen Sie eine Anfrage — ich melde mich innerhalb eines Tages, um die Details zu besprechen.",
    "contact.location": "Moskau · Anfahrt in der ganzen Region",
    "form.name": "Name",
    "form.namePh": "Wie heißen Sie?",
    "form.phone": "Telefon",
    "form.phonePh": "+49 ___ ________",
    "form.type": "Art des Shootings",
    "form.type1": "Porträtshooting",
    "form.type2": "Hochzeitsshooting",
    "form.type3": "Event",
    "form.type4": "Love Story",
    "form.type5": "Sonstiges",
    "form.message": "Nachricht",
    "form.messagePh": "Erzählen Sie kurz von Ihrem Shooting...",
    "form.submit": "Anfrage senden",
    "form.success": "Danke! Ihre Anfrage wurde gesendet, ich melde mich in Kürze.",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.top": "Nach oben ↑",
    "lightbox.close": "Schließen",
  },
  en: {
    "meta.title": "DreamLights Fotos — Photographer",
    "meta.description": "DreamLights Fotos — professional photography: portraits, weddings, events, love story.",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.services": "Services",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.cta": "Book now",
    "lang.select": "Select language",
    "burger.open": "Open menu",
    "scroll.down": "Scroll down",
    "hero.eyebrow": "Photographer · Portraits · Weddings · Events",
    "hero.title1": "Light and emotion",
    "hero.title2": "in every",
    "hero.titleGradient": "frame",
    "hero.subtitle": "I capture stories worth reliving. DreamLights Fotos is about a personal eye, soft light, and genuine emotion.",
    "hero.ctaPrimary": "View portfolio",
    "hero.ctaSecondary": "Get in touch",
    "about.eyebrow": "About me",
    "about.title": "Hi, I'm the photographer behind DreamLights Fotos",
    "about.desc": "For over seven years I've helped people preserve life's important moments — weddings, engagements, family portraits and love stories. My style is natural light, a warm atmosphere, and an eye for detail that brings every shot to life.",
    "about.badgeLabel": "Years of experience",
    "about.stat1Label": "Shoots",
    "about.stat2Label": "Weddings",
    "about.stat3Label": "Happy clients",
    "about.cta": "Discuss a shoot",
    "portfolio.eyebrow": "Portfolio",
    "portfolio.title": "Selected work",
    "filter.all": "All",
    "filter.portrait": "Portraits",
    "filter.wedding": "Weddings",
    "filter.event": "Events",
    "filter.love": "Love Story",
    "gallery.portrait1": "Portrait · Studio",
    "gallery.wedding1": "Wedding · Ceremony",
    "gallery.love1": "Love Story · Sunset",
    "gallery.event1": "Event · Corporate",
    "gallery.portrait2": "Portrait · Street",
    "gallery.wedding2": "Wedding · Reception",
    "gallery.love2": "Love Story · Walk",
    "gallery.event2": "Event · Concert",
    "gallery.portrait3": "Portrait · Natural light",
    "services.eyebrow": "Services",
    "services.title": "Shoot packages",
    "service1.title": "Portrait session",
    "service1.desc": "A personal photo session in the studio or on location. Help with styling and posing included.",
    "service1.li1": "1–2 hours of shooting",
    "service1.li2": "20 edited photos",
    "service1.li3": "Online gallery",
    "service1.price": "from €150",
    "service2.badge": "Popular",
    "service2.title": "Wedding photography",
    "service2.desc": "Full-day coverage of your wedding — from getting ready to the reception.",
    "service2.li1": "Up to 10 hours of shooting",
    "service2.li2": "300+ edited photos",
    "service2.li3": "Video highlight (optional)",
    "service2.price": "from €890",
    "service3.title": "Events",
    "service3.desc": "Corporate parties, birthdays, graduations and other events.",
    "service3.li1": "From 3 hours of shooting",
    "service3.li2": "100+ edited photos",
    "service3.li3": "Fast turnaround",
    "service3.price": "from €300",
    "cta.select": "Choose",
    "testimonials.eyebrow": "Testimonials",
    "testimonials.title": "What clients say",
    "t1.text": "“The shoot was relaxed and fun, and the photos exceeded every expectation. Thank you for the warm atmosphere!”",
    "t1.author": "Anna & Dmitri",
    "t1.role": "Wedding shoot",
    "t2.text": "“Very attentive to detail — she helped me relax in front of the camera. The results are amazing!”",
    "t2.author": "Maria K.",
    "t2.role": "Portrait session",
    "t3.text": "“We had our corporate event photographed — everything was clear, fast and professional. We got the photos the very next day.”",
    "t3.author": "Igor S.",
    "t3.role": "Corporate event",
    "contact.eyebrow": "Contact",
    "contact.title1": "Let's create",
    "contact.title2": "something beautiful",
    "contact.desc": "Leave a request — I'll get back to you within a day to discuss the details.",
    "contact.location": "Moscow · available region-wide",
    "form.name": "Name",
    "form.namePh": "What's your name?",
    "form.phone": "Phone",
    "form.phonePh": "+1 ___ ___-____",
    "form.type": "Type of shoot",
    "form.type1": "Portrait session",
    "form.type2": "Wedding shoot",
    "form.type3": "Event",
    "form.type4": "Love Story",
    "form.type5": "Other",
    "form.message": "Message",
    "form.messagePh": "Tell me a bit about your shoot...",
    "form.submit": "Send request",
    "form.success": "Thank you! Your request has been sent, I'll be in touch shortly.",
    "footer.rights": "All rights reserved.",
    "footer.top": "Back to top ↑",
    "lightbox.close": "Close",
  },
};

const languageMeta = {
  de: { flagClass: "flag-de", name: "Deutsch" },
  en: { flagClass: "flag-en", name: "English" },
};

const STORAGE_KEY = "dreamlights-lang";
let currentLang = localStorage.getItem(STORAGE_KEY) || "de";
if (!translations[currentLang]) currentLang = "de";

function t(key) {
  return translations[currentLang][key] || translations.de[key] || key;
}

function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (el.tagName === "TITLE") {
      el.textContent = t(key);
    } else if (el.hasAttribute("data-i18n-attr")) {
      el.setAttribute(el.getAttribute("data-i18n-attr"), t(key));
    } else {
      el.textContent = t(key);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });

  document.querySelectorAll(".gallery-item").forEach((item) => {
    const span = item.querySelector(".gallery-item__overlay span");
    if (span) span.textContent = t(`gallery.${item.dataset.titleKey}`);
  });

  const meta = languageMeta[lang];
  langBtnFlag.className = `lang-switch__flag ${meta.flagClass}`;
  langBtnName.textContent = meta.name;
  document.querySelectorAll(".lang-switch__option").forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.lang === lang);
  });
}

/* ---------- Header scroll state ---------- */
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll);

/* ---------- Mobile nav ---------- */
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
  burger.classList.toggle("open");
});

nav.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

/* ---------- Language switch ---------- */
const langSwitch = document.getElementById("langSwitch");
const langBtn = document.getElementById("langBtn");
const langBtnFlag = document.getElementById("langBtnFlag");
const langBtnName = document.getElementById("langBtnName");
const langMenu = document.getElementById("langMenu");

langBtn.addEventListener("click", () => {
  const isOpen = langSwitch.classList.toggle("open");
  langBtn.setAttribute("aria-expanded", String(isOpen));
});

langMenu.querySelectorAll(".lang-switch__option").forEach((opt) => {
  opt.addEventListener("click", () => {
    applyLanguage(opt.dataset.lang);
    langSwitch.classList.remove("open");
    langBtn.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (e) => {
  if (!langSwitch.contains(e.target)) {
    langSwitch.classList.remove("open");
    langBtn.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    langSwitch.classList.remove("open");
    langBtn.setAttribute("aria-expanded", "false");
  }
});

/* ---------- Gallery data ---------- */
const gradients = [
  "linear-gradient(135deg,#7c3aed,#3b82f6)",
  "linear-gradient(135deg,#ec4899,#7c3aed)",
  "linear-gradient(135deg,#3b82f6,#06b6d4)",
  "linear-gradient(135deg,#f97316,#ec4899)",
  "linear-gradient(135deg,#7c3aed,#ec4899)",
  "linear-gradient(135deg,#06b6d4,#7c3aed)",
];

const photos = [
  { category: "portrait", titleKey: "portrait1" },
  { category: "wedding", titleKey: "wedding1" },
  { category: "love", titleKey: "love1" },
  { category: "event", titleKey: "event1" },
  { category: "portrait", titleKey: "portrait2" },
  { category: "wedding", titleKey: "wedding2" },
  { category: "love", titleKey: "love2" },
  { category: "event", titleKey: "event2" },
  { category: "portrait", titleKey: "portrait3" },
];

const gallery = document.getElementById("gallery");

photos.forEach((photo, i) => {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.dataset.category = photo.category;
  item.dataset.titleKey = photo.titleKey;
  item.innerHTML = `
    <div class="gallery-item__ph" style="background:${gradients[i % gradients.length]}"></div>
    <div class="gallery-item__overlay"><span></span></div>
  `;
  item.addEventListener("click", () => openLightbox(gradients[i % gradients.length]));
  gallery.appendChild(item);
});

/* ---------- Filters ---------- */
const filters = document.querySelectorAll(".filter");
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    gallery.querySelectorAll(".gallery-item").forEach((item) => {
      const match = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("hidden", !match);
    });
  });
});

/* ---------- Lightbox ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxPhoto = document.getElementById("lightboxPhoto");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(gradient) {
  lightboxPhoto.style.background = gradient;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

/* ---------- Contact form (demo, no backend) ---------- */
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formNote.textContent = t("form.success");
  formNote.classList.add("success");
  form.reset();
});

/* ---------- Reveal on scroll ---------- */
const revealTargets = document.querySelectorAll(
  ".about__inner, .gallery-item, .service-card, .testimonial-card, .contact__inner"
);

revealTargets.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(24px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => observer.observe(el));

/* ---------- Init ---------- */
applyLanguage(currentLang);
