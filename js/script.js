document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- About photo rotation ---------- */
const aboutPhotos = ["images/about-me/IMG_1588.JPG", "images/about-me/IMG_1589.JPG"];
const aboutPhotoEl = document.getElementById("aboutPhoto");
let aboutPhotoIndex = 0;

function showAboutPhoto(index) {
  aboutPhotoEl.classList.remove("loaded");
  window.setTimeout(() => {
    aboutPhotoEl.style.display = "";
    aboutPhotoEl.src = aboutPhotos[index];
    aboutPhotoEl.onload = () => aboutPhotoEl.classList.add("loaded");
  }, 400);
}

if (aboutPhotoEl && aboutPhotos.length) {
  showAboutPhoto(aboutPhotoIndex);
  if (aboutPhotos.length > 1) {
    window.setInterval(() => {
      aboutPhotoIndex = (aboutPhotoIndex + 1) % aboutPhotos.length;
      showAboutPhoto(aboutPhotoIndex);
    }, 120000);
  }
}

/* ---------- Translations ---------- */
const translations = {
  de: {
    "meta.title": "Dream Lights Photos — Fotograf",
    "meta.description": "Dream Lights Photos — professionelle Fotografie: Porträts, Hochzeiten, Events, Love Story.",
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.portfolio": "Portfolio",
    "nav.services": "Preise",
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
    "hero.subtitle": "Ich fotografiere Geschichten, die man immer wieder ansehen möchte. Dream Lights Photos steht für einen persönlichen Blick, weiches Licht und echte Emotionen.",
    "hero.ctaPrimary": "Portfolio ansehen",
    "hero.ctaSecondary": "Kontakt aufnehmen",
    "about.eyebrow": "Über mich",
    "about.title": "Hallo, ich bin Djamel — der Fotograf hinter Dream Lights Photos",
    "about.desc": "Die Fotografie ist für mich nicht nur ein Beruf, sondern meine größte Leidenschaft – und das schon seit über 10 Jahren. In dieser Zeit habe ich gelernt, dass jedes Bild seine eigene Geschichte erzählt. Deshalb liebe ich es, mit verschiedenen Stilen zu experimentieren, Licht bewusst einzusetzen und durch kreative Effekte das gewisse Etwas in meine Aufnahmen zu bringen. Als Mensch bin ich offen, humorvoll und immer für ein Gespräch zu haben. Bei meinen Shootings ist mir eine lockere und entspannte Atmosphäre besonders wichtig, damit wir gemeinsam die besten Ergebnisse erzielen können. Ich freue mich darauf, deine Momente einzufangen!",
    "about.badgeLabel": "Jahre Erfahrung",
    "about.stat1Label": "Shootings",
    "about.stat3Label": "Zufriedene Kunden",
    "about.cta": "Shooting besprechen",
    "portfolio.eyebrow": "Portfolio",
    "portfolio.title": "Ausgewählte Arbeiten",
    "filter.all": "Alle",
    "filter.portrait": "Porträts",
    "filter.love": "Love Story",
    "filter.family": "Familie",
    "filter.fashion": "Fashion",
    "filter.art": "Art",
    "filter.wedding": "Hochzeiten",
    "filter.event": "Events",
    "filter.landscape": "Landschaft & Natur",
    "filter.maternity": "Schwangerschaft",
    "filter.business": "Business",
    "gallery.portrait1": "Porträt · Studio",
    "gallery.portrait2": "Porträt · Straße",
    "gallery.love1": "Love Story · Sonnenuntergang",
    "gallery.family1": "Familie · Zuhause",
    "gallery.fashion1": "Fashion · Editorial",
    "gallery.art1": "Art · Konzeptionell",
    "gallery.wedding1": "Hochzeit · Zeremonie",
    "gallery.event1": "Event · Firmenfeier",
    "gallery.landscape1": "Landschaft · Berge",
    "gallery.maternity1": "Schwangerschaft · Porträt",
    "gallery.business1": "Business · Porträt",
    "services.eyebrow": "Preise",
    "services.title": "Preise & Pakete",
    "service1.title": "Porträtshooting",
    "service1.desc": "Individuelles Fotoshooting im Studio oder vor Ort. Unterstützung bei Styling und Posen.",
    "service1.li1": "1–2 Stunden Shooting",
    "service1.li2": "20 bearbeitete Fotos",
    "service1.li3": "Online-Galerie",
    "service1.price": "ab 150 €",
    "service2.title": "Love Story",
    "service2.desc": "Romantische Paarfotos an eurem Lieblingsort – authentisch und stimmungsvoll.",
    "service2.li1": "1–2 Stunden Shooting",
    "service2.li2": "25 bearbeitete Fotos",
    "service2.li3": "Online-Galerie",
    "service2.price": "ab 180 €",
    "service3.title": "Familienshooting",
    "service3.desc": "Entspannte Fotosession mit der ganzen Familie, drinnen oder draußen.",
    "service3.li1": "1–2 Stunden Shooting",
    "service3.li2": "25 bearbeitete Fotos",
    "service3.li3": "Online-Galerie",
    "service3.price": "ab 200 €",
    "service4.title": "Fashion",
    "service4.desc": "Editorial-Shooting mit kreativem Konzept, bewusstem Licht und Styling.",
    "service4.li1": "2–3 Stunden Shooting",
    "service4.li2": "20 bearbeitete Fotos",
    "service4.li3": "Moodboard & Konzeptberatung",
    "service4.price": "ab 280 €",
    "service5.title": "Art",
    "service5.desc": "Konzeptionelle und experimentelle Fotografie nach deiner Idee.",
    "service5.li1": "Individuelle Planung",
    "service5.li2": "15–20 bearbeitete Fotos",
    "service5.li3": "Kreative Nachbearbeitung",
    "service5.price": "ab 280 €",
    "service6.badge": "Beliebt",
    "service6.title": "Hochzeitsshooting",
    "service6.desc": "Vollständige Begleitung des Hochzeitstags von den Vorbereitungen bis zur Feier.",
    "service6.li1": "Bis zu 10 Stunden Shooting",
    "service6.li2": "300+ bearbeitete Fotos",
    "service6.li3": "Video-Highlight (optional)",
    "service6.price": "ab 890 €",
    "service7.title": "Events",
    "service7.desc": "Firmenfeiern, Geburtstage, Abschlussfeiern und andere Veranstaltungen.",
    "service7.li1": "Ab 3 Stunden Shooting",
    "service7.li2": "100+ bearbeitete Fotos",
    "service7.li3": "Schnelle Lieferung",
    "service7.price": "ab 300 €",
    "service8.title": "Landschaft & Natur",
    "service8.desc": "Naturaufnahmen und Landschaftsfotografie für Prints und Portfolios.",
    "service8.li1": "Individuelle Planung",
    "service8.li2": "15+ bearbeitete Fotos",
    "service8.li3": "Hochauflösende Dateien",
    "service8.price": "ab 180 €",
    "service9.title": "Schwangerschaft",
    "service9.desc": "Einfühlsame Fotos für eure wertvolle Wartezeit.",
    "service9.li1": "1 Stunde Shooting",
    "service9.li2": "20 bearbeitete Fotos",
    "service9.li3": "Online-Galerie",
    "service9.price": "ab 180 €",
    "service10.title": "Business",
    "service10.desc": "Business-Porträts, Team- und Bewerbungsfotos für Unternehmen und Selbstständige.",
    "service10.li1": "1–2 Stunden Shooting",
    "service10.li2": "15 bearbeitete Fotos",
    "service10.li3": "Nutzung für LinkedIn & Website",
    "service10.price": "ab 200 €",
    "cta.select": "Auswählen",
    "testimonials.eyebrow": "Referenzen",
    "testimonials.title": "Was Kunden sagen",
    "t1.text": "„Das Shooting war entspannt und hat Spaß gemacht, die Fotos haben alle Erwartungen übertroffen. Danke für die warme Atmosphäre!“",
    "t1.author": "Anna & Dmitri",
    "t1.role": "Hochzeitsshooting",
    "t2.text": "„Sehr aufmerksamer Umgang mit Details, der Fotograf hat mir geholfen, vor der Kamera locker zu werden. Das Ergebnis ist fantastisch!“",
    "t2.author": "Maria K.",
    "t2.role": "Porträtshooting",
    "t3.text": "„Unsere Firmenfeier wurde fotografiert — alles klar, schnell und professionell. Die Fotos hatten wir schon am nächsten Tag.“",
    "t3.author": "Igor S.",
    "t3.role": "Firmenevent",
    "contact.eyebrow": "Kontakt",
    "contact.title1": "Lassen Sie uns",
    "contact.title2": "etwas Schönes erschaffen",
    "contact.desc": "Hinterlassen Sie eine Anfrage — ich melde mich innerhalb eines Tages, um die Details zu besprechen.",
    "contact.location": "Bern · im Einsatz in der ganzen Schweiz",
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
    "form.type6": "Familienshooting",
    "form.type7": "Fashion",
    "form.type8": "Art",
    "form.type9": "Landschaft & Natur",
    "form.type10": "Schwangerschaft",
    "form.type11": "Business",
    "form.message": "Nachricht",
    "form.messagePh": "Erzählen Sie kurz von Ihrem Shooting...",
    "form.submit": "Anfrage senden",
    "form.success": "Danke! Ihre Anfrage wurde gesendet, ich melde mich in Kürze.",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.top": "Nach oben ↑",
    "lightbox.close": "Schließen",
  },
  en: {
    "meta.title": "Dream Lights Photos — Photographer",
    "meta.description": "Dream Lights Photos — professional photography: portraits, weddings, events, love story.",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.services": "Prices",
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
    "hero.subtitle": "I capture stories worth reliving. Dream Lights Photos is about a personal eye, soft light, and genuine emotion.",
    "hero.ctaPrimary": "View portfolio",
    "hero.ctaSecondary": "Get in touch",
    "about.eyebrow": "About me",
    "about.title": "Hi, I'm Djamel — the photographer behind Dream Lights Photos",
    "about.desc": "Photography isn't just a job for me — it's been my greatest passion for over 10 years. In that time I've learned that every picture tells its own story. That's why I love experimenting with different styles, using light deliberately, and adding that certain something to my shots through creative effects. As a person, I'm open, easygoing, and always up for a chat. During shoots, a relaxed, laid-back atmosphere matters a lot to me, so that together we can get the best results. I can't wait to capture your moments!",
    "about.badgeLabel": "Years of experience",
    "about.stat1Label": "Shoots",
    "about.stat3Label": "Happy clients",
    "about.cta": "Discuss a shoot",
    "portfolio.eyebrow": "Portfolio",
    "portfolio.title": "Selected work",
    "filter.all": "All",
    "filter.portrait": "Portraits",
    "filter.love": "Love Story",
    "filter.family": "Family",
    "filter.fashion": "Fashion",
    "filter.art": "Art",
    "filter.wedding": "Weddings",
    "filter.event": "Events",
    "filter.landscape": "Landscape & Nature",
    "filter.maternity": "Maternity",
    "filter.business": "Business",
    "gallery.portrait1": "Portrait · Studio",
    "gallery.portrait2": "Portrait · Street",
    "gallery.love1": "Love Story · Sunset",
    "gallery.family1": "Family · At home",
    "gallery.fashion1": "Fashion · Editorial",
    "gallery.art1": "Art · Conceptual",
    "gallery.wedding1": "Wedding · Ceremony",
    "gallery.event1": "Event · Corporate",
    "gallery.landscape1": "Landscape · Mountains",
    "gallery.maternity1": "Maternity · Portrait",
    "gallery.business1": "Business · Portrait",
    "services.eyebrow": "Prices",
    "services.title": "Prices & Packages",
    "service1.title": "Portrait session",
    "service1.desc": "A personal photo session in the studio or on location. Help with styling and posing included.",
    "service1.li1": "1–2 hours of shooting",
    "service1.li2": "20 edited photos",
    "service1.li3": "Online gallery",
    "service1.price": "from €150",
    "service2.title": "Love Story",
    "service2.desc": "Romantic couple photos at your favorite spot — authentic and full of mood.",
    "service2.li1": "1–2 hours of shooting",
    "service2.li2": "25 edited photos",
    "service2.li3": "Online gallery",
    "service2.price": "from €180",
    "service3.title": "Family session",
    "service3.desc": "A relaxed photo session with the whole family, indoors or outdoors.",
    "service3.li1": "1–2 hours of shooting",
    "service3.li2": "25 edited photos",
    "service3.li3": "Online gallery",
    "service3.price": "from €200",
    "service4.title": "Fashion",
    "service4.desc": "Editorial shoot with a creative concept, deliberate light, and styling.",
    "service4.li1": "2–3 hours of shooting",
    "service4.li2": "20 edited photos",
    "service4.li3": "Moodboard & concept consulting",
    "service4.price": "from €280",
    "service5.title": "Art",
    "service5.desc": "Conceptual and experimental photography built around your idea.",
    "service5.li1": "Custom planning",
    "service5.li2": "15–20 edited photos",
    "service5.li3": "Creative post-production",
    "service5.price": "from €280",
    "service6.badge": "Popular",
    "service6.title": "Wedding photography",
    "service6.desc": "Full-day coverage of your wedding — from getting ready to the reception.",
    "service6.li1": "Up to 10 hours of shooting",
    "service6.li2": "300+ edited photos",
    "service6.li3": "Video highlight (optional)",
    "service6.price": "from €890",
    "service7.title": "Events",
    "service7.desc": "Corporate parties, birthdays, graduations and other events.",
    "service7.li1": "From 3 hours of shooting",
    "service7.li2": "100+ edited photos",
    "service7.li3": "Fast turnaround",
    "service7.price": "from €300",
    "service8.title": "Landscape & Nature",
    "service8.desc": "Nature and landscape photography for prints and portfolios.",
    "service8.li1": "Custom planning",
    "service8.li2": "15+ edited photos",
    "service8.li3": "High-resolution files",
    "service8.price": "from €180",
    "service9.title": "Maternity",
    "service9.desc": "Gentle photos to capture your precious time of waiting.",
    "service9.li1": "1 hour of shooting",
    "service9.li2": "20 edited photos",
    "service9.li3": "Online gallery",
    "service9.price": "from €180",
    "service10.title": "Business",
    "service10.desc": "Business portraits, team and headshot photography for companies and freelancers.",
    "service10.li1": "1–2 hours of shooting",
    "service10.li2": "15 edited photos",
    "service10.li3": "Usable for LinkedIn & website",
    "service10.price": "from €200",
    "cta.select": "Choose",
    "testimonials.eyebrow": "Testimonials",
    "testimonials.title": "What clients say",
    "t1.text": "“The shoot was relaxed and fun, and the photos exceeded every expectation. Thank you for the warm atmosphere!”",
    "t1.author": "Anna & Dmitri",
    "t1.role": "Wedding shoot",
    "t2.text": "“Very attentive to detail — he helped me relax in front of the camera. The results are amazing!”",
    "t2.author": "Maria K.",
    "t2.role": "Portrait session",
    "t3.text": "“We had our corporate event photographed — everything was clear, fast and professional. We got the photos the very next day.”",
    "t3.author": "Igor S.",
    "t3.role": "Corporate event",
    "contact.eyebrow": "Contact",
    "contact.title1": "Let's create",
    "contact.title2": "something beautiful",
    "contact.desc": "Leave a request — I'll get back to you within a day to discuss the details.",
    "contact.location": "Bern · working throughout Switzerland",
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
    "form.type6": "Family session",
    "form.type7": "Fashion",
    "form.type8": "Art",
    "form.type9": "Landscape & Nature",
    "form.type10": "Maternity",
    "form.type11": "Business",
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
  "linear-gradient(135deg,#10b981,#06b6d4)",
  "linear-gradient(135deg,#f472b6,#a78bfa)",
  "linear-gradient(135deg,#64748b,#0ea5e9)",
];

const photos = [
  { category: "portrait", titleKey: "portrait1" },
  { category: "love", titleKey: "love1" },
  { category: "family", titleKey: "family1" },
  { category: "fashion", titleKey: "fashion1" },
  { category: "art", titleKey: "art1" },
  { category: "wedding", titleKey: "wedding1" },
  { category: "event", titleKey: "event1" },
  { category: "landscape", titleKey: "landscape1" },
  { category: "maternity", titleKey: "maternity1" },
  { category: "business", titleKey: "business1" },
  { category: "portrait", titleKey: "portrait2" },
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
