const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const menuLinks = document.querySelectorAll('.nav-links a');

function closeMenu() {
  document.body.classList.remove('menu-open');
  navLinks.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  document.body.classList.toggle('menu-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
