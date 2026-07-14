document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- About photo rotation ---------- */
const aboutPhotos = [
  "images/about-me/1780659172472.jpg",
  "images/about-me/1780659173027.jpg",
  "images/about-me/1780659173153.jpg",
];
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
    }, 10000);
  }
}

/* ---------- Translations ---------- */
const translations = {
  de: {
    "meta.title": "Dream Lights Photos",
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
    "hero.eyebrow": "Porträts · Love Story · Familie · Fashion · Art · Hochzeiten · Events · Schwangerschaft · Business",
    "hero.titleGradient1": "Licht",
    "hero.title1": "und Emotion",
    "hero.title2": "in jedem",
    "hero.titleGradient2": "Foto",
    "hero.subtitle": "Ich fotografiere Geschichten, die man immer wieder ansehen möchte. Bei Dream Lights Photos bekommt ihr nicht einfach nur Bilder – ihr erlebt einen Raum für echte Emotionen. Mein Blick ist persönlich und das Shooting ein Moment, an den ihr euch genauso gerne erinnert wie an das Ergebnis.",
    "hero.ctaPrimary": "Portfolio ansehen",
    "hero.ctaSecondary": "Kontakt aufnehmen",
    "about.eyebrow": "Über mich",
    "about.title": "Hallo, ich bin Djamel — der Fotograf hinter Dream Lights Photos",
    "about.desc1": "Die Fotografie ist für mich nicht nur ein Beruf, sondern meine größte Leidenschaft – und das schon seit über 5 Jahren. In dieser Zeit habe ich gelernt, dass jedes Bild seine eigene Geschichte erzählt.",
    "about.desc2": "Deshalb liebe ich es, mit verschiedenen Stilen zu experimentieren, Licht bewusst einzusetzen und durch kreative Effekte das gewisse Etwas in meine Aufnahmen zu bringen.",
    "about.desc3": "Als Mensch bin ich offen, humorvoll und immer für ein Gespräch zu haben. Bei meinen Shootings ist mir eine lockere und entspannte Atmosphäre besonders wichtig, damit wir gemeinsam die besten Ergebnisse erzielen können. Ich freue mich darauf, deine Momente einzufangen!",
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
    "gallery.maternity1": "Schwangerschaft · Porträt",
    "gallery.business1": "Business · Porträt",
    "services.eyebrow": "Preise",
    "services.title": "Preise & Pakete",
    "services.noteLabel": "Hinweis:",
    "services.note": "Die Studiomiete wird separat verrechnet und ist im Paketpreis nicht inbegriffen.",
    "services.note2": "Zusätzliche bearbeitete Fotos über das Paket hinaus kosten CHF 25 pro Foto.",
    "service1.title": "Porträtshooting",
    "service1.desc": "Individuelles Fotoshooting im Studio oder vor Ort. Unterstützung bei Styling und Posen.",
    "service1.li1": "1–2 Stunden Shooting",
    "service1.li2": "20 bearbeitete Fotos",
    "service1.li3": "Online-Galerie über die Lightroom-App",
    "service1.price": "ab CHF 150",
    "service2.title": "Love Story",
    "service2.desc": "Romantische Paarfotos an eurem Lieblingsort – authentisch und stimmungsvoll.",
    "service2.li1": "1–2 Stunden Shooting",
    "service2.li2": "25 bearbeitete Fotos",
    "service2.li3": "Online-Galerie über die Lightroom-App",
    "service2.price": "ab CHF 350",
    "service3.title": "Familienshooting",
    "service3.desc": "Entspannte Fotosession mit der ganzen Familie, drinnen oder draußen.",
    "service3.li1": "1–2 Stunden Shooting",
    "service3.li2": "25 bearbeitete Fotos",
    "service3.li3": "Online-Galerie über die Lightroom-App",
    "service3.price": "ab CHF 350",
    "service4.title": "Fashion",
    "service4.desc": "Editorial-Shooting mit kreativem Konzept, bewusstem Licht und Styling.",
    "service4.li1": "1–2 Stunden Shooting",
    "service4.li2": "20 bearbeitete Fotos",
    "service4.li3": "Moodboard & Konzeptberatung",
    "service4.li4": "3 Fotos mit professioneller Hautretusche",
    "service4.li5": "Online-Galerie über die Lightroom-App",
    "service4.price": "ab CHF 450",
    "service5.title": "Art",
    "service5.desc": "Konzeptionelle und experimentelle Fotografie nach deiner Idee.",
    "service5.li1": "Individuelle Planung",
    "service5.li2": "15–20 bearbeitete Fotos",
    "service5.li3": "Kreative Nachbearbeitung",
    "service5.li4": "Online-Galerie über die Lightroom-App",
    "service5.price": "ab CHF 280",
    "service6.title": "Hochzeitsshooting",
    "service6.desc": "Vollständige Begleitung des Hochzeitstags von den Vorbereitungen bis zur Feier.",
    "service6.li1": "Bis zu 10 Stunden Shooting",
    "service6.li2": "300+ bearbeitete Fotos",
    "service6.li3": "Online-Galerie über die Lightroom-App",
    "service6.price": "ab CHF 2400",
    "service7.title": "Events",
    "service7.desc": "Firmenfeiern, Geburtstage, Abschlussfeiern und andere Veranstaltungen.",
    "service7.li1": "Ab 3 Stunden Shooting",
    "service7.li2": "100+ bearbeitete Fotos",
    "service7.li3": "Online-Galerie über die Lightroom-App",
    "service7.price": "ab CHF 500",
    "service9.title": "Schwangerschaft",
    "service9.desc": "Einfühlsame Fotos für eure wertvolle Wartezeit.",
    "service9.li1": "1–2 Stunden Shooting",
    "service9.li2": "20 bearbeitete Fotos",
    "service9.li3": "Online-Galerie über die Lightroom-App",
    "service9.price": "ab CHF 350",
    "service10.title": "Business",
    "service10.desc": "Business-Porträts, Team- und Bewerbungsfotos für Unternehmen und Selbstständige.",
    "service10.li1": "20 Minuten Shooting",
    "service10.li2": "2–3 bearbeitete Fotos",
    "service10.li3": "Nutzung für LinkedIn & Website",
    "service10.li4": "Online-Galerie über die Lightroom-App",
    "service10.price": "ab CHF 175",
    "cta.select": "Auswählen",
    "testimonials.eyebrow": "Referenzen",
    "testimonials.title": "Was Kunden sagen",
    "reviewForm.heading": "Hinterlasse eine Bewertung",
    "reviewForm.note": "Deine Bewertung wird geprüft und danach auf der Website veröffentlicht.",
    "reviewForm.name": "Name",
    "reviewForm.namePh": "Dein Name",
    "reviewForm.text": "Deine Bewertung",
    "reviewForm.textPh": "Erzähl uns von deiner Erfahrung...",
    "reviewForm.submit": "Bewertung senden",
    "reviewForm.success": "Danke für deine Bewertung!",
    "contact.eyebrow": "Kontakt",
    "contact.title1": "Lassen Sie uns",
    "contact.title2": "etwas Schönes erschaffen",
    "contact.desc": "Hinterlassen Sie eine Anfrage — ich melde mich innerhalb eines Tages, um die Details zu besprechen.",
    "contact.location": "Bern · im Einsatz in der ganzen Schweiz",
    "form.name": "Name",
    "form.namePh": "Wie heißen Sie?",
    "form.phone": "Telefon",
    "form.phonePh": "79 123 45 67",
    "form.phoneCountryAria": "Ländervorwahl",
    "form.email": "E-Mail",
    "form.emailPh": "deine@email.ch",
    "form.date": "Wunschtermin",
    "form.type": "Art des Shootings",
    "form.type1": "Porträtshooting",
    "form.type2": "Hochzeitsshooting",
    "form.type3": "Event",
    "form.type4": "Love Story",
    "form.type5": "Sonstiges",
    "form.type6": "Familienshooting",
    "form.type7": "Fashion",
    "form.type8": "Art",
    "form.type10": "Schwangerschaft",
    "form.type11": "Business",
    "form.message": "Nachricht",
    "form.messagePh": "Erzählen Sie kurz von Ihrem Shooting...",
    "form.confirmLabel": "Wichtig:",
    "form.confirmNote": "Die Buchung ist erst verbindlich, wenn ich sie persönlich per Telefon oder E-Mail bestätigt habe.",
    "form.submit": "Anfrage senden",
    "form.success": "Danke! WhatsApp öffnet sich mit deiner Anfrage — bitte dort auf Senden tippen, damit ich sie erhalte.",
    "form.error": "Bitte füllen Sie alle rot markierten Pflichtfelder aus.",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.top": "Nach oben ↑",
    "lightbox.close": "Schließen",
    "lightbox.prev": "Vorheriges Foto",
    "lightbox.next": "Nächstes Foto",
    "whatsapp.fab": "Per WhatsApp schreiben",
    "instagram.fab": "Auf Instagram besuchen",
    "scrolltop.fab": "Nach oben scrollen",
  },
  en: {
    "meta.title": "Dream Lights Photos",
    "meta.description": "Dream Lights Photos — professional photography: portraits, weddings, events, love story.",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.services": "Price",
    "nav.testimonials": "Reviews",
    "nav.contact": "Contact",
    "nav.cta": "Book now",
    "lang.select": "Select language",
    "burger.open": "Open menu",
    "scroll.down": "Scroll down",
    "hero.eyebrow": "Portraits · Love Story · Family · Fashion · Art · Weddings · Events · Maternity · Business",
    "hero.titleGradient1": "Light",
    "hero.title1": "and emotion",
    "hero.title2": "in every",
    "hero.titleGradient2": "photo",
    "hero.subtitle": "I capture stories worth reliving, again and again. At Dream Lights Photos you don't just get pictures – you experience a space for genuine emotion. My eye is personal, and the shoot itself becomes a moment you'll remember as fondly as the result.",
    "hero.ctaPrimary": "View portfolio",
    "hero.ctaSecondary": "Get in touch",
    "about.eyebrow": "About me",
    "about.title": "Hi, I'm Djamel — the photographer behind Dream Lights Photos",
    "about.desc1": "Photography isn't just a job for me — it's been my greatest passion for over 5 years. In that time I've learned that every picture tells its own story.",
    "about.desc2": "That's why I love experimenting with different styles, using light deliberately, and adding that certain something to my shots through creative effects.",
    "about.desc3": "As a person, I'm open, easygoing, and always up for a chat. During shoots, a relaxed, laid-back atmosphere matters a lot to me, so that together we can get the best results. I can't wait to capture your moments!",
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
    "gallery.maternity1": "Maternity · Portrait",
    "gallery.business1": "Business · Portrait",
    "services.eyebrow": "Price",
    "services.title": "Price & Packages",
    "services.noteLabel": "Please note:",
    "services.note": "Studio rental is billed separately and is not included in the package price.",
    "services.note2": "Additional edited photos beyond the package cost CHF 25 per photo.",
    "service1.title": "Portrait session",
    "service1.desc": "A personal photo session in the studio or on location. Help with styling and posing included.",
    "service1.li1": "1–2 hours of shooting",
    "service1.li2": "20 edited photos",
    "service1.li3": "Online gallery via the Lightroom app",
    "service1.price": "from CHF 150",
    "service2.title": "Love Story",
    "service2.desc": "Romantic couple photos at your favorite spot — authentic and full of mood.",
    "service2.li1": "1–2 hours of shooting",
    "service2.li2": "25 edited photos",
    "service2.li3": "Online gallery via the Lightroom app",
    "service2.price": "from CHF 350",
    "service3.title": "Family session",
    "service3.desc": "A relaxed photo session with the whole family, indoors or outdoors.",
    "service3.li1": "1–2 hours of shooting",
    "service3.li2": "25 edited photos",
    "service3.li3": "Online gallery via the Lightroom app",
    "service3.price": "from CHF 350",
    "service4.title": "Fashion",
    "service4.desc": "Editorial shoot with a creative concept, deliberate light, and styling.",
    "service4.li1": "1–2 hours of shooting",
    "service4.li2": "20 edited photos",
    "service4.li3": "Moodboard & concept consulting",
    "service4.li4": "3 photos with professional skin retouching",
    "service4.li5": "Online gallery via the Lightroom app",
    "service4.price": "from CHF 450",
    "service5.title": "Art",
    "service5.desc": "Conceptual and experimental photography built around your idea.",
    "service5.li1": "Custom planning",
    "service5.li2": "15–20 edited photos",
    "service5.li3": "Creative post-production",
    "service5.li4": "Online gallery via the Lightroom app",
    "service5.price": "from CHF 280",
    "service6.title": "Wedding photography",
    "service6.desc": "Full-day coverage of your wedding — from getting ready to the reception.",
    "service6.li1": "Up to 10 hours of shooting",
    "service6.li2": "300+ edited photos",
    "service6.li3": "Online gallery via the Lightroom app",
    "service6.price": "from CHF 2400",
    "service7.title": "Events",
    "service7.desc": "Corporate parties, birthdays, graduations and other events.",
    "service7.li1": "From 3 hours of shooting",
    "service7.li2": "100+ edited photos",
    "service7.li3": "Online gallery via the Lightroom app",
    "service7.price": "from CHF 500",
    "service9.title": "Maternity",
    "service9.desc": "Gentle photos to capture your precious time of waiting.",
    "service9.li1": "1–2 hours of shooting",
    "service9.li2": "20 edited photos",
    "service9.li3": "Online gallery via the Lightroom app",
    "service9.price": "from CHF 350",
    "service10.title": "Business",
    "service10.desc": "Business portraits, team and headshot photography for companies and freelancers.",
    "service10.li1": "20 minutes of shooting",
    "service10.li2": "2–3 edited photos",
    "service10.li3": "Usable for LinkedIn & website",
    "service10.li4": "Online gallery via the Lightroom app",
    "service10.price": "from CHF 175",
    "cta.select": "Choose",
    "testimonials.eyebrow": "Reviews",
    "testimonials.title": "What clients say",
    "reviewForm.heading": "Leave a review",
    "reviewForm.note": "Your review will be checked and then published on the website.",
    "reviewForm.name": "Name",
    "reviewForm.namePh": "Your name",
    "reviewForm.text": "Your review",
    "reviewForm.textPh": "Tell us about your experience...",
    "reviewForm.submit": "Send review",
    "reviewForm.success": "Thank you for your review!",
    "contact.eyebrow": "Contact",
    "contact.title1": "Let's create",
    "contact.title2": "something beautiful",
    "contact.desc": "Leave a request — I'll get back to you within a day to discuss the details.",
    "contact.location": "Bern · working throughout Switzerland",
    "form.name": "Name",
    "form.namePh": "What's your name?",
    "form.phone": "Phone",
    "form.phonePh": "79 123 45 67",
    "form.phoneCountryAria": "Country code",
    "form.email": "Email",
    "form.emailPh": "your@email.com",
    "form.date": "Preferred date",
    "form.type": "Type of shoot",
    "form.type1": "Portrait session",
    "form.type2": "Wedding shoot",
    "form.type3": "Event",
    "form.type4": "Love Story",
    "form.type5": "Other",
    "form.type6": "Family session",
    "form.type7": "Fashion",
    "form.type8": "Art",
    "form.type10": "Maternity",
    "form.type11": "Business",
    "form.message": "Message",
    "form.messagePh": "Tell me a bit about your shoot...",
    "form.confirmLabel": "Important:",
    "form.confirmNote": "Your booking becomes binding only once I've confirmed it with you personally by phone or email.",
    "form.submit": "Send request",
    "form.success": "Thanks! WhatsApp is opening with your request — please tap send there so I receive it.",
    "form.error": "Please fill in all the required fields marked in red.",
    "footer.rights": "All rights reserved.",
    "footer.top": "Back to top ↑",
    "lightbox.close": "Close",
    "lightbox.prev": "Previous photo",
    "lightbox.next": "Next photo",
    "whatsapp.fab": "Message us on WhatsApp",
    "instagram.fab": "Visit us on Instagram",
    "scrolltop.fab": "Scroll to top",
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

  applyGalleryCaptions();

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

/* ---------- Scroll-to-top button ---------- */
const scrollTopBtn = document.getElementById("scrollTopBtn");
const onScrollTopVisibility = () => scrollTopBtn.classList.toggle("visible", window.scrollY > 500);
onScrollTopVisibility();
window.addEventListener("scroll", onScrollTopVisibility);
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

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

/* ---------- Scroll reveal observer (used by gallery + static sections) ---------- */
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

/* ---------- Gallery data ---------- */
const gradients = [
  "linear-gradient(135deg,#1d4ed8,#38bdf8)",
  "linear-gradient(135deg,#0c4a6e,#1d4ed8)",
  "linear-gradient(135deg,#0369a1,#7dd3fc)",
  "linear-gradient(135deg,#1e3a8a,#38bdf8)",
  "linear-gradient(135deg,#0284c7,#1d4ed8)",
  "linear-gradient(135deg,#38bdf8,#0c4a6e)",
  "linear-gradient(135deg,#334155,#1d4ed8)",
  "linear-gradient(135deg,#0f172a,#38bdf8)",
  "linear-gradient(135deg,#1d4ed8,#0284c7)",
];

// Fallback placeholders shown for a category until real photos are uploaded
// to images/portfolio/<category>/ (see manifest.json).
const fallbackPhotos = [
  { category: "portrait", titleKey: "portrait1" },
  { category: "love", titleKey: "love1" },
  { category: "family", titleKey: "family1" },
  { category: "fashion", titleKey: "fashion1" },
  { category: "art", titleKey: "art1" },
  { category: "wedding", titleKey: "wedding1" },
  { category: "event", titleKey: "event1" },
  { category: "maternity", titleKey: "maternity1" },
  { category: "business", titleKey: "business1" },
  { category: "portrait", titleKey: "portrait2" },
];

const galleryCategories = [
  "portrait", "love", "family", "fashion", "art",
  "wedding", "event", "maternity", "business",
];

const gallery = document.getElementById("gallery");
let activeGalleryFilter = "all";

// category -> array of uploaded photo URLs (only set for categories with real photos)
const categoryPhotos = {};
// category -> index of the photo currently shown on the portfolio tile
const categoryRotationIndex = {};
// category -> the tile's .gallery-item__ph element, for rotating the photo in place
const categoryTileEls = {};

// Only start downloading a tile's photo once it's about to scroll into view,
// so opening a category with dozens of photos doesn't fetch them all at once.
const galleryPhotoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const ph = entry.target;
      galleryPhotoObserver.unobserve(ph);
      if (ph.dataset.src) {
        ph.style.backgroundImage = `url('${ph.dataset.src}')`;
        delete ph.dataset.src;
      }
    });
  },
  { rootMargin: "400px 0px" }
);

function makeGalleryItem(category, opts, caption, titleKey) {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.dataset.category = category;
  if (titleKey) item.dataset.titleKey = titleKey;
  const phAttr = opts.lazySrc ? `data-src="${opts.lazySrc}"` : `style="${opts.style}"`;
  item.innerHTML = `
    <div class="gallery-item__ph" ${phAttr}></div>
    <div class="gallery-item__overlay"><span>${caption || ""}</span></div>
  `;
  if (opts.lazySrc) galleryPhotoObserver.observe(item.querySelector(".gallery-item__ph"));
  return item;
}

let galleryManifest = null;

function loadCategoryPhotos(manifest) {
  Object.keys(categoryPhotos).forEach((key) => delete categoryPhotos[key]);
  Object.keys(categoryRotationIndex).forEach((key) => delete categoryRotationIndex[key]);
  galleryCategories.forEach((category) => {
    const uploaded = (manifest && manifest[category]) || [];
    if (uploaded.length) {
      categoryPhotos[category] = uploaded;
      categoryRotationIndex[category] = 0;
    }
  });
}

function animateGalleryItemsIn() {
  gallery.querySelectorAll(".gallery-item").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// "All" view: one rotating tile per category.
function renderAllView() {
  gallery.innerHTML = "";
  let gradientIndex = 0;
  Object.keys(categoryTileEls).forEach((key) => delete categoryTileEls[key]);

  galleryCategories.forEach((category) => {
    const uploaded = categoryPhotos[category];

    if (uploaded && uploaded.length) {
      const item = makeGalleryItem(category, { lazySrc: uploaded[0] }, t(`filter.${category}`));
      categoryTileEls[category] = item.querySelector(".gallery-item__ph");
      item.addEventListener("click", () => {
        const items = categoryPhotos[category].map((src) => ({ type: "image", src }));
        openLightbox(items, categoryRotationIndex[category]);
      });
      gallery.appendChild(item);
    } else {
      const photo = fallbackPhotos.find((p) => p.category === category);
      const gradient = gradients[gradientIndex % gradients.length];
      gradientIndex++;
      const item = makeGalleryItem(category, { style: `background:${gradient}` }, "", photo && photo.titleKey);
      item.addEventListener("click", () => openLightbox([{ type: "gradient", value: gradient }], 0));
      gallery.appendChild(item);
    }
  });

  applyGalleryCaptions();
  animateGalleryItemsIn();
}

// Category view: every photo in the category, as its own tile in a 3-column grid.
function renderCategoryView(category) {
  gallery.innerHTML = "";
  Object.keys(categoryTileEls).forEach((key) => delete categoryTileEls[key]);

  const photos = categoryPhotos[category] || [];

  if (!photos.length) {
    const photo = fallbackPhotos.find((p) => p.category === category);
    const gradient = gradients[0];
    const item = makeGalleryItem(category, { style: `background:${gradient}` }, "", photo && photo.titleKey);
    item.addEventListener("click", () => openLightbox([{ type: "gradient", value: gradient }], 0));
    gallery.appendChild(item);
    applyGalleryCaptions();
    animateGalleryItemsIn();
    return;
  }

  photos.forEach((src, index) => {
    const item = makeGalleryItem(category, { lazySrc: src }, "");
    item.addEventListener("click", () => {
      const items = photos.map((s) => ({ type: "image", src: s }));
      openLightbox(items, index);
    });
    gallery.appendChild(item);
  });

  animateGalleryItemsIn();
}

function renderGallery(manifest) {
  galleryManifest = manifest;
  loadCategoryPhotos(manifest);
  if (activeGalleryFilter === "all") {
    renderAllView();
  } else {
    renderCategoryView(activeGalleryFilter);
  }
}

// Rotate one category's portfolio tile at a time, in turn, with a soft crossfade.
// Only runs in the "all" view — the category grid shows every photo at once, nothing to rotate.
let rotationCategoryPointer = 0;

function rotateGalleryPhotos() {
  if (activeGalleryFilter !== "all") return;

  for (let i = 0; i < galleryCategories.length; i++) {
    const category = galleryCategories[rotationCategoryPointer % galleryCategories.length];
    rotationCategoryPointer++;

    const photos = categoryPhotos[category];
    const el = categoryTileEls[category];
    if (!photos || photos.length < 2 || !el) continue;

    categoryRotationIndex[category] = (categoryRotationIndex[category] + 1) % photos.length;
    const nextSrc = photos[categoryRotationIndex[category]];
    el.style.opacity = "0";
    window.setTimeout(() => {
      if (el.dataset.src) {
        galleryPhotoObserver.unobserve(el);
        delete el.dataset.src;
      }
      el.style.backgroundImage = `url('${nextSrc}')`;
      el.style.opacity = "1";
    }, 700);
    break;
  }
}

window.setInterval(rotateGalleryPhotos, 10000);

function applyGalleryFilter(filter) {
  activeGalleryFilter = filter;
  if (filter === "all") {
    renderAllView();
  } else {
    renderCategoryView(filter);
  }
}

function applyGalleryCaptions() {
  gallery.querySelectorAll(".gallery-item").forEach((item) => {
    const span = item.querySelector(".gallery-item__overlay span");
    if (!span) return;
    span.textContent = item.dataset.titleKey
      ? t(`gallery.${item.dataset.titleKey}`)
      : t(`filter.${item.dataset.category}`);
  });
}

renderGallery(null);

fetch("images/portfolio/manifest.json")
  .then((res) => (res.ok ? res.json() : null))
  .then((manifest) => {
    if (manifest) renderGallery(manifest);
  })
  .catch(() => {});

/* ---------- Testimonial screenshots (uploaded to images/testimonials/) ---------- */
fetch("images/testimonials/manifest.json")
  .then((res) => (res.ok ? res.json() : null))
  .then((shots) => {
    if (!shots || !shots.length) return;
    const track = document.getElementById("testimonialsTrack");
    shots.forEach((src) => {
      const item = document.createElement("div");
      item.className = "testimonial-shot";
      item.innerHTML = `<img src="${src}" alt="" loading="lazy" />`;
      item.style.opacity = "0";
      item.style.transform = "translateY(24px)";
      item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      track.appendChild(item);
      observer.observe(item);
    });
  })
  .catch(() => {});

/* ---------- Published text reviews (added manually to data/reviews.json after moderation) ---------- */
fetch("data/reviews.json")
  .then((res) => (res.ok ? res.json() : null))
  .then((reviews) => {
    if (!reviews || !reviews.length) return;
    const track = document.getElementById("testimonialsTrack");
    reviews.forEach((review) => {
      const card = document.createElement("div");
      card.className = "review-card";
      card.style.opacity = "0";
      card.style.transform = "translateY(24px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

      const text = document.createElement("p");
      text.className = "review-card__text";
      text.textContent = review.text;

      const author = document.createElement("strong");
      author.className = "review-card__author";
      author.textContent = review.name;

      card.appendChild(text);
      card.appendChild(author);
      track.appendChild(card);
      observer.observe(card);
    });
  })
  .catch(() => {});

/* ---------- Review submission form (sent by email, published after moderation) ---------- */
const reviewForm = document.getElementById("reviewForm");
const reviewFormNote = document.getElementById("reviewFormNote");

if (reviewForm) {
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = reviewForm.reviewerName.value.trim();
    const text = reviewForm.reviewerText.value.trim();
    const subject = encodeURIComponent("Neue Bewertung für Dream Lights Photos");
    const body = encodeURIComponent(`Name: ${name}\n\nBewertung:\n${text}`);
    window.location.href = `mailto:dreamlightfotos@hotmail.com?subject=${subject}&body=${body}`;
    reviewFormNote.textContent = t("reviewForm.success");
    reviewFormNote.classList.add("success");
    reviewForm.reset();
  });
}

/* ---------- Filters ---------- */
const filters = document.querySelectorAll(".filter");
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    applyGalleryFilter(btn.dataset.filter);
  });
});

/* ---------- Shoot type custom dropdown ---------- */
const typeSelect = document.getElementById("typeSelect");
const typeSelectBtn = document.getElementById("typeSelectBtn");
const typeSelectLabel = document.getElementById("typeSelectLabel");
const typeSelectValue = document.getElementById("formType");
const typeSelectMenu = document.getElementById("typeSelectMenu");

function selectShootType(value) {
  const opt = typeSelectMenu.querySelector(`[data-value="${value}"]`);
  if (!opt) return;
  typeSelectValue.value = value;
  typeSelectLabel.textContent = opt.textContent;
  typeSelectLabel.dataset.i18n = opt.dataset.i18n;
  typeSelectMenu
    .querySelectorAll(".type-select__option.active")
    .forEach((el) => el.classList.remove("active"));
  opt.classList.add("active");
}

typeSelectBtn.addEventListener("click", () => {
  const isOpen = typeSelect.classList.toggle("open");
  typeSelectBtn.setAttribute("aria-expanded", String(isOpen));
});

typeSelectMenu.querySelectorAll(".type-select__option").forEach((opt) => {
  opt.addEventListener("click", () => {
    selectShootType(opt.dataset.value);
    typeSelect.classList.remove("open");
    typeSelectBtn.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (e) => {
  if (!typeSelect.contains(e.target)) {
    typeSelect.classList.remove("open");
    typeSelectBtn.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    typeSelect.classList.remove("open");
    typeSelectBtn.setAttribute("aria-expanded", "false");
  }
});

/* ---------- Service card "Auswählen" -> pre-fill contact form ---------- */
document.querySelectorAll("[data-service-type]").forEach((btn) => {
  btn.addEventListener("click", () => {
    selectShootType(btn.dataset.serviceType);
  });
});

/* ---------- Lightbox ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxPhoto = document.getElementById("lightboxPhoto");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxCounter = document.getElementById("lightboxCounter");

let lightboxItems = [];
let lightboxIndex = 0;

function showLightboxSlide(index) {
  lightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
  const item = lightboxItems[lightboxIndex];

  if (item.type === "image") {
    lightboxPhoto.classList.remove("lightbox__photo--gradient");
    lightboxPhoto.style.background = "";
    lightboxImg.style.display = "";
    lightboxImg.src = item.src;
  } else {
    lightboxPhoto.classList.add("lightbox__photo--gradient");
    lightboxImg.style.display = "none";
    lightboxImg.src = "";
    lightboxPhoto.style.background = item.value;
  }

  const hasMultiple = lightboxItems.length > 1;
  lightboxPrev.style.display = hasMultiple ? "flex" : "none";
  lightboxNext.style.display = hasMultiple ? "flex" : "none";
  lightboxCounter.textContent = hasMultiple ? `${lightboxIndex + 1} / ${lightboxItems.length}` : "";
}

function openLightbox(items, startIndex) {
  lightboxItems = items;
  showLightboxSlide(startIndex || 0);
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
lightboxPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  showLightboxSlide(lightboxIndex - 1);
});
lightboxNext.addEventListener("click", (e) => {
  e.stopPropagation();
  showLightboxSlide(lightboxIndex + 1);
});
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showLightboxSlide(lightboxIndex - 1);
  if (e.key === "ArrowRight") showLightboxSlide(lightboxIndex + 1);
});

/* ---------- Booking date (earliest bookable: 5 days from today) ---------- */
const formDate = document.getElementById("formDate");
if (formDate) {
  const earliest = new Date();
  earliest.setDate(earliest.getDate() + 5);
  const isoDate = [
    earliest.getFullYear(),
    String(earliest.getMonth() + 1).padStart(2, "0"),
    String(earliest.getDate()).padStart(2, "0"),
  ].join("-");
  formDate.setAttribute("min", isoDate);
  formDate.setAttribute("value", isoDate);
}

/* ---------- Contact form: sends the booking request to WhatsApp ---------- */
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const WHATSAPP_NUMBER = "41767402602";

form.phone.addEventListener("input", () => {
  form.phone.value = form.phone.value.replace(/[^0-9\s]/g, "");
});

/* ---------- Phone country code picker ---------- */
const PHONE_COUNTRIES = [
  { iso: "CH", name: "Switzerland", code: "+41" },
  { iso: "DE", name: "Germany", code: "+49" },
  { iso: "AT", name: "Austria", code: "+43" },
  { iso: "FR", name: "France", code: "+33" },
  { iso: "IT", name: "Italy", code: "+39" },
  { iso: "GB", name: "United Kingdom", code: "+44" },
  { iso: "US", name: "United States", code: "+1" },
  { iso: "CA", name: "Canada", code: "+1" },
  { iso: "ES", name: "Spain", code: "+34" },
  { iso: "PT", name: "Portugal", code: "+351" },
  { iso: "NL", name: "Netherlands", code: "+31" },
  { iso: "BE", name: "Belgium", code: "+32" },
  { iso: "LU", name: "Luxembourg", code: "+352" },
  { iso: "IE", name: "Ireland", code: "+353" },
  { iso: "DK", name: "Denmark", code: "+45" },
  { iso: "SE", name: "Sweden", code: "+46" },
  { iso: "NO", name: "Norway", code: "+47" },
  { iso: "FI", name: "Finland", code: "+358" },
  { iso: "IS", name: "Iceland", code: "+354" },
  { iso: "PL", name: "Poland", code: "+48" },
  { iso: "CZ", name: "Czech Republic", code: "+420" },
  { iso: "SK", name: "Slovakia", code: "+421" },
  { iso: "HU", name: "Hungary", code: "+36" },
  { iso: "RO", name: "Romania", code: "+40" },
  { iso: "BG", name: "Bulgaria", code: "+359" },
  { iso: "GR", name: "Greece", code: "+30" },
  { iso: "HR", name: "Croatia", code: "+385" },
  { iso: "SI", name: "Slovenia", code: "+386" },
  { iso: "RS", name: "Serbia", code: "+381" },
  { iso: "BA", name: "Bosnia and Herzegovina", code: "+387" },
  { iso: "ME", name: "Montenegro", code: "+382" },
  { iso: "MK", name: "North Macedonia", code: "+389" },
  { iso: "AL", name: "Albania", code: "+355" },
  { iso: "XK", name: "Kosovo", code: "+383" },
  { iso: "UA", name: "Ukraine", code: "+380" },
  { iso: "BY", name: "Belarus", code: "+375" },
  { iso: "RU", name: "Russia", code: "+7" },
  { iso: "MD", name: "Moldova", code: "+373" },
  { iso: "LT", name: "Lithuania", code: "+370" },
  { iso: "LV", name: "Latvia", code: "+371" },
  { iso: "EE", name: "Estonia", code: "+372" },
  { iso: "TR", name: "Turkey", code: "+90" },
  { iso: "CY", name: "Cyprus", code: "+357" },
  { iso: "MT", name: "Malta", code: "+356" },
  { iso: "LI", name: "Liechtenstein", code: "+423" },
  { iso: "MC", name: "Monaco", code: "+377" },
  { iso: "AD", name: "Andorra", code: "+376" },
  { iso: "SM", name: "San Marino", code: "+378" },
  { iso: "VA", name: "Vatican City", code: "+379" },
  { iso: "GE", name: "Georgia", code: "+995" },
  { iso: "AM", name: "Armenia", code: "+374" },
  { iso: "AZ", name: "Azerbaijan", code: "+994" },
  { iso: "KZ", name: "Kazakhstan", code: "+7" },
  { iso: "UZ", name: "Uzbekistan", code: "+998" },
  { iso: "IN", name: "India", code: "+91" },
  { iso: "PK", name: "Pakistan", code: "+92" },
  { iso: "BD", name: "Bangladesh", code: "+880" },
  { iso: "LK", name: "Sri Lanka", code: "+94" },
  { iso: "NP", name: "Nepal", code: "+977" },
  { iso: "CN", name: "China", code: "+86" },
  { iso: "JP", name: "Japan", code: "+81" },
  { iso: "KR", name: "South Korea", code: "+82" },
  { iso: "TW", name: "Taiwan", code: "+886" },
  { iso: "HK", name: "Hong Kong", code: "+852" },
  { iso: "SG", name: "Singapore", code: "+65" },
  { iso: "MY", name: "Malaysia", code: "+60" },
  { iso: "TH", name: "Thailand", code: "+66" },
  { iso: "VN", name: "Vietnam", code: "+84" },
  { iso: "PH", name: "Philippines", code: "+63" },
  { iso: "ID", name: "Indonesia", code: "+62" },
  { iso: "IL", name: "Israel", code: "+972" },
  { iso: "AE", name: "United Arab Emirates", code: "+971" },
  { iso: "SA", name: "Saudi Arabia", code: "+966" },
  { iso: "QA", name: "Qatar", code: "+974" },
  { iso: "KW", name: "Kuwait", code: "+965" },
  { iso: "BH", name: "Bahrain", code: "+973" },
  { iso: "OM", name: "Oman", code: "+968" },
  { iso: "JO", name: "Jordan", code: "+962" },
  { iso: "LB", name: "Lebanon", code: "+961" },
  { iso: "EG", name: "Egypt", code: "+20" },
  { iso: "MA", name: "Morocco", code: "+212" },
  { iso: "DZ", name: "Algeria", code: "+213" },
  { iso: "TN", name: "Tunisia", code: "+216" },
  { iso: "ZA", name: "South Africa", code: "+27" },
  { iso: "NG", name: "Nigeria", code: "+234" },
  { iso: "KE", name: "Kenya", code: "+254" },
  { iso: "GH", name: "Ghana", code: "+233" },
  { iso: "ET", name: "Ethiopia", code: "+251" },
  { iso: "AU", name: "Australia", code: "+61" },
  { iso: "NZ", name: "New Zealand", code: "+64" },
  { iso: "MX", name: "Mexico", code: "+52" },
  { iso: "BR", name: "Brazil", code: "+55" },
  { iso: "AR", name: "Argentina", code: "+54" },
  { iso: "CL", name: "Chile", code: "+56" },
  { iso: "CO", name: "Colombia", code: "+57" },
  { iso: "PE", name: "Peru", code: "+51" },
  { iso: "VE", name: "Venezuela", code: "+58" },
  { iso: "EC", name: "Ecuador", code: "+593" },
  { iso: "UY", name: "Uruguay", code: "+598" },
  { iso: "PA", name: "Panama", code: "+507" },
  { iso: "CR", name: "Costa Rica", code: "+506" },
];

const phoneCountry = document.getElementById("phoneCountry");
const phoneCountryBtn = document.getElementById("phoneCountryBtn");
const phoneCountryFlag = document.getElementById("phoneCountryFlag");
const phoneCountryCode = document.getElementById("phoneCountryCode");
const phoneCountryValue = document.getElementById("phoneCountryValue");
const phoneCountryMenu = document.getElementById("phoneCountryMenu");

function flagUrl(iso, size) {
  return `https://flagcdn.com/${size}/${iso.toLowerCase()}.png`;
}

PHONE_COUNTRIES.forEach((country) => {
  const opt = document.createElement("button");
  opt.type = "button";
  opt.className = "phone-country__option";
  opt.dataset.iso = country.iso;
  opt.dataset.code = country.code;
  if (country.iso === "CH") opt.classList.add("active");
  opt.innerHTML = `
    <img src="${flagUrl(country.iso, "20x15")}" alt="" width="20" height="15" onerror="this.style.visibility='hidden'" />
    <span>${country.name}</span>
    <span class="phone-country__dial">${country.code}</span>
  `;
  opt.addEventListener("click", () => {
    phoneCountryFlag.style.visibility = "";
    phoneCountryFlag.src = flagUrl(country.iso, "24x18");
    phoneCountryCode.textContent = country.code;
    phoneCountryValue.value = country.code;
    phoneCountryMenu
      .querySelectorAll(".phone-country__option.active")
      .forEach((el) => el.classList.remove("active"));
    opt.classList.add("active");
    phoneCountry.classList.remove("open");
    phoneCountryBtn.setAttribute("aria-expanded", "false");
  });
  phoneCountryMenu.appendChild(opt);
});

phoneCountryBtn.addEventListener("click", () => {
  const isOpen = phoneCountry.classList.toggle("open");
  phoneCountryBtn.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (e) => {
  if (!phoneCountry.contains(e.target)) {
    phoneCountry.classList.remove("open");
    phoneCountryBtn.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    phoneCountry.classList.remove("open");
    phoneCountryBtn.setAttribute("aria-expanded", "false");
  }
});

const requiredFormFields = [form.name, form.phone, form.email, form.date];

requiredFormFields.forEach((field) => {
  field.addEventListener("input", () => field.classList.remove("field-error"));
});

function validateContactForm() {
  let firstInvalid = null;
  requiredFormFields.forEach((field) => {
    const valid = field.value.trim() !== "" && field.checkValidity();
    field.classList.toggle("field-error", !valid);
    if (!valid && !firstInvalid) firstInvalid = field;
  });
  return firstInvalid;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstInvalid = validateContactForm();
  if (firstInvalid) {
    formNote.textContent = t("form.error");
    formNote.classList.remove("success");
    formNote.classList.add("error");
    firstInvalid.focus();
    firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  formNote.classList.remove("error");

  const name = form.name.value.trim();
  const phone = `${form.phoneCountry.value} ${form.phone.value.trim()}`.trim();
  const email = form.email.value.trim();
  const date = form.date.value;
  const [year, month, day] = date.split("-").map(Number);
  const formattedDate = `${day}.${month}.${year}`;
  const typeLabel = typeSelectLabel.textContent;
  const message = form.message.value.trim();

  const lines = [
    "Neue Anfrage für Fotoshooting",
    `• Name: ${name}`,
    `• Telefon: ${phone}`,
    `• E-Mail: ${email}`,
    `• Wunschtermin: ${formattedDate}`,
    `• Art des Shootings: ${typeLabel}`,
    message ? `• Nachricht: ${message}` : null,
  ].filter(Boolean);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(waUrl, "_blank", "noopener");

  formNote.textContent = t("form.success");
  formNote.classList.add("success");
  form.reset();
  phoneCountryFlag.style.visibility = "";
  phoneCountryFlag.src = flagUrl("CH", "24x18");
  phoneCountryCode.textContent = "+41";
  phoneCountryMenu
    .querySelectorAll(".phone-country__option.active")
    .forEach((el) => el.classList.remove("active"));
  phoneCountryMenu.querySelector('[data-iso="CH"]').classList.add("active");
  selectShootType("portrait");
});

/* ---------- Reveal on scroll ---------- */
const revealTargets = document.querySelectorAll(
  ".about__inner, .service-card, .testimonial-card, .contact__inner"
);

revealTargets.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(24px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

revealTargets.forEach((el) => observer.observe(el));

/* ---------- Init ---------- */
applyLanguage(currentLang);
