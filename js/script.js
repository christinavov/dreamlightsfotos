document.getElementById("year").textContent = new Date().getFullYear();

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
  { category: "portrait", title: "Портрет · Студия" },
  { category: "wedding", title: "Свадьба · Церемония" },
  { category: "love", title: "Love Story · Закат" },
  { category: "event", title: "Событие · Корпоратив" },
  { category: "portrait", title: "Портрет · Улица" },
  { category: "wedding", title: "Свадьба · Банкет" },
  { category: "love", title: "Love Story · Прогулка" },
  { category: "event", title: "Событие · Концерт" },
  { category: "portrait", title: "Портрет · Естественный свет" },
];

const gallery = document.getElementById("gallery");

photos.forEach((photo, i) => {
  const item = document.createElement("div");
  item.className = "gallery-item";
  item.dataset.category = photo.category;
  item.innerHTML = `
    <div class="gallery-item__ph" style="background:${gradients[i % gradients.length]}"></div>
    <div class="gallery-item__overlay"><span>${photo.title}</span></div>
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
  formNote.textContent = "Спасибо! Заявка отправлена, я свяжусь с вами в ближайшее время.";
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
