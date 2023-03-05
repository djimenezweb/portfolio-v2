const toggleButton = document.getElementById('toggle-button');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

const openMenu = () => {
  toggleButton.dataset.status = 'open';
  hamburger.classList.add('hamburger--close');
  nav.classList.add('nav--show');
  document.body.classList.add('overflow--hidden');
};

const closeMenu = () => {
  toggleButton.dataset.status = 'closed';
  hamburger.classList.remove('hamburger--close');
  nav.classList.remove('nav--show');
  document.body.classList.remove('overflow--hidden');
};

const toggleMenu = () => {
  if (toggleButton.dataset.status === 'closed') {
    openMenu();
  } else if (toggleButton.dataset.status === 'open') {
    closeMenu();
  }
};

export { toggleMenu };
