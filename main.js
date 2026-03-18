// ── Mobile nav toggle ──────────────────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close mobile nav when any nav link is clicked
document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ── Scroll-reveal animation ────────────────────────────────────
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(function (el) {
  observer.observe(el);
});
