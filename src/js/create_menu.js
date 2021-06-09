import createMenu from '../templates/templMenu.hbs';
import items from '../menu.json';

const menu = document.querySelector('.js-menu');
menu.insertAdjacentElement('beforeend', createMenu(items));