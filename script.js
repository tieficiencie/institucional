const WHATSAPP_PHONE = ""; // Formato esperado: 5567999999999
const WHATSAPP_MESSAGE = "Olá! Quero saber quanto posso economizar na minha conta de energia com a Eficiencie.";

const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');

function setMenu(open) {
  menuButton?.setAttribute('aria-expanded', String(open));
  if (mobileMenu) mobileMenu.hidden = !open;
  if (menuButton) menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

menuButton?.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

document.querySelectorAll('.js-whatsapp').forEach(link => {
  link.addEventListener('click', event => {
    if (!WHATSAPP_PHONE) {
      event.preventDefault();
      const notice = document.querySelector('#whatsapp-notice');
      if (notice) {
        notice.textContent = 'O número oficial de WhatsApp será configurado antes da publicação.';
        notice.hidden = false;
        notice.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
      }
      return;
    }
    link.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
});

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach(item => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -24px' });

  revealItems.forEach(item => observer.observe(item));
}

document.querySelector('#year').textContent = new Date().getFullYear();
