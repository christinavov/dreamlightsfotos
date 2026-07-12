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
    }, 20000);
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
    "form.email": "E-Mail (optional)",
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
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.top": "Nach oben ↑",
    "lightbox.close": "Schließen",
    "whatsapp.fab": "Per WhatsApp schreiben",
  },
  en: {
    "meta.title": "Dream Lights Photos — Photographer",
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
    "form.email": "Email (optional)",
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
    "footer.rights": "All rights reserved.",
    "footer.top": "Back to top ↑",
    "lightbox.close": "Close",
    "whatsapp.fab": "Message us on WhatsApp",
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

function makeGalleryItem(category, background, caption, titleKey) {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.dataset.category = category;
  if (titleKey) item.dataset.titleKey = titleKey;
  item.innerHTML = `
    <div class="gallery-item__ph" style="${background}"></div>
    <div class="gallery-item__overlay"><span>${caption || ""}</span></div>
  `;
  return item;
}

function renderGallery(manifest) {
  gallery.innerHTML = "";
  let gradientIndex = 0;

  galleryCategories.forEach((category) => {
    const uploaded = (manifest && manifest[category]) || [];

    if (uploaded.length) {
      uploaded.forEach((src) => {
        const bg = `background-image:url('${src}')`;
        const item = makeGalleryItem(category, bg, t(`filter.${category}`));
        item.addEventListener("click", () => openLightbox(`url('${src}') center/cover no-repeat`));
        gallery.appendChild(item);
      });
    } else {
      fallbackPhotos
        .filter((p) => p.category === category)
        .forEach((photo) => {
          const gradient = gradients[gradientIndex % gradients.length];
          gradientIndex++;
          const item = makeGalleryItem(category, `background:${gradient}`, "", photo.titleKey);
          item.addEventListener("click", () => openLightbox(gradient));
          gallery.appendChild(item);
        });
    }
  });

  applyGalleryCaptions();
  applyGalleryFilter(activeGalleryFilter);

  gallery.querySelectorAll(".gallery-item").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

function applyGalleryFilter(filter) {
  activeGalleryFilter = filter;
  gallery.querySelectorAll(".gallery-item").forEach((item) => {
    const match = filter === "all" || item.dataset.category === filter;
    item.classList.toggle("hidden", !match);
  });
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

/* ---------- Service card "Auswählen" -> pre-fill contact form ---------- */
const formTypeSelect = document.getElementById("formType");
document.querySelectorAll("[data-service-type]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (formTypeSelect) formTypeSelect.value = btn.dataset.serviceType;
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

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const phone = `${form.phoneCountry.value} ${form.phone.value.trim()}`.trim();
  const email = form.email.value.trim();
  const date = form.date.value;
  const typeLabel = form.type.options[form.type.selectedIndex].textContent;
  const message = form.message.value.trim();

  const lines = [
    "Neue Anfrage von der Website:",
    `Name: ${name}`,
    `Telefon: ${phone}`,
    email ? `E-Mail: ${email}` : null,
    date ? `Wunschtermin: ${date}` : null,
    `Art des Shootings: ${typeLabel}`,
    message ? `Nachricht: ${message}` : null,
  ].filter(Boolean);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(waUrl, "_blank", "noopener");

  formNote.textContent = t("form.success");
  formNote.classList.add("success");
  form.reset();
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
