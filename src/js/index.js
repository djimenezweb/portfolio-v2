// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { sayHello } from './demo.js';
import { toggleMenu } from './toggle-menu.js';

sayHello();

const headerElement = document.getElementById('header');
const homeElement = document.getElementById('home');
const headerElementHeight = -1 * headerElement.clientHeight + 'px';
const toggleMenuElement = document.getElementById('toggle-menu');

//toggleMenuElement.addEventListener('click', () => toggleMenu(hamburger));
toggleMenuElement.addEventListener('click', toggleMenu);

/* const handleScroll = () => {
  if (window.scrollY >= homeElement.clientHeight - headerElement.clientHeight) headerElement.classList.add('scrolled');
  else headerElement.classList.remove('scrolled');
};

window.addEventListener('scroll', handleScroll); */

const optionsHeaderScroll = {
  root: null,
  threshold: 0,
  rootMargin: headerElementHeight
};

const observer = new IntersectionObserver(entry => {
  entry[0].isIntersecting ? headerElement.classList.remove('header--scrolled') : headerElement.classList.add('header--scrolled');
}, optionsHeaderScroll);

observer.observe(homeElement);
