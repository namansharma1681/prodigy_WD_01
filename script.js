// Change navbar color on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Highlight section on click
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    sections.forEach(section => section.classList.remove('active'));
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.classList.add('active');
    }
  });
});
