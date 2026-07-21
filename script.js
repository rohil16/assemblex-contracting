const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('site-nav');
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const submitButton = document.getElementById('submit-button');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (form && formMessage && submitButton) {
  const nextInput = form.querySelector('input[name="_next"]');

  if (nextInput) {
    const thankYouUrl = new URL('thank-you.html', window.location.href);
    nextInput.value = thankYouUrl.toString();
  }

  form.addEventListener('submit', () => {
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    formMessage.textContent = 'Sending your message';
  });
}
