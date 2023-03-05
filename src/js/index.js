// El styles lo importamos aquí, ya se carga después al compilar todo
//sayHello();
//import { sayHello } from './demo.js';

import '../scss/styles.scss';
import { toggleMenu } from './toggle-menu.js';

const toggleButton = document.getElementById('toggle-button');
const headerElement = document.getElementById('header');
const headerHeight = -1 * headerElement.clientHeight + 'px';
const homeElement = document.getElementById('home');

const optionsHeaderScroll = {
  root: null,
  threshold: 0,
  rootMargin: headerHeight
};

toggleButton.addEventListener('click', toggleMenu);

const observer = new IntersectionObserver(entry => {
  entry[0].isIntersecting ? headerElement.classList.remove('header--scrolled') : headerElement.classList.add('header--scrolled');
}, optionsHeaderScroll);

observer.observe(homeElement);
