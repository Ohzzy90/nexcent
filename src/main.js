document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('nav-menu'),
        toggleMenu = document.getElementById('nav-toggle'),
        closeMenu = document.getElementById('nav-close'),
        navLink = document.querySelectorAll('.nav__link');

  if (toggleMenu && navMenu) {
    toggleMenu.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  if (closeMenu && navMenu) {
    closeMenu.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  }

  navLink.forEach(link => {
    link.addEventListener('click', function () {
      navLink.forEach(n => n.classList.remove('active'));
      this.classList.add('active');
      navMenu.classList.remove('show');
    });
  });
});

document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    window.open(icon.dataset.url, '_blank', 'noopener');
  });
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-5021Q4EHQL');

