// El styles lo importamos aquí, ya se carga después al compilar todo
//sayHello();
//import { sayHello } from './demo.js';

import '../scss/styles.scss';
import { toggleMenu } from './toggle-menu.js';

const toggleButton = document.getElementById('toggle-button');
const headerElement = document.getElementById('header');
const headerHeight = headerElement.clientHeight;
const homeElement = document.getElementById('home');
const rootStyles = document.documentElement.style;
const animatedEntries = document.querySelectorAll('.animate');

const optionsHeaderScroll = {
  root: null,
  threshold: 0,
  rootMargin: -1 * headerHeight + 'px'
};

const optionsProjects = {
  root: null,
  threshold: 0.3,
  rootMargin: '-100px'
};

const observerHeader = new IntersectionObserver(entry => {
  entry[0].isIntersecting ? headerElement.classList.remove('header--scrolled') : headerElement.classList.add('header--scrolled');
}, optionsHeaderScroll);

const observerProjects = new IntersectionObserver((entries, observerProjects) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observerProjects.unobserve(entry.target);
    }
  });
}, optionsProjects);

observerHeader.observe(homeElement);
animatedEntries.forEach(entry => {
  observerProjects.observe(entry);
});
rootStyles.setProperty('--scroll-padding', headerHeight + 18 + 'px');
toggleButton.addEventListener('click', toggleMenu);
