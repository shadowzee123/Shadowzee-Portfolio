// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Scroll reveal for sections
const sections = document.querySelectorAll('.section');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  // Change icon
  if (body.classList.contains('dark')) {
    darkModeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    darkModeToggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
});

// Contact form handling with simple validation and success message
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple validation
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill out all fields.';
    formMessage.style.color = 'red';
    return;
  }

  // Basic email regex check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = 'Thanks for your message! I will get back to you soon.';
  formMessage.style.color = 'green';

  // Clear form
  contactForm.reset();
});
