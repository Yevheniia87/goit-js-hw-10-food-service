import menuCardTmpl from './templates/menu.hbs'
import menuCards from './menu.json'

const refs = {
    body: document.body,
    menu: document.querySelector('.js-menu'),
    input: document.querySelector('#theme-switch-toggle')
   
}
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const menuList = createMenu(menuCards)
refs.menu.insertAdjacentHTML('beforeend', menuList)

// function createMenu(menuCards) { 
//     return menuCards.map(menuCardTmpl).join('');
// };

function createMenu(menuCards) {
  return menuCards.map(el => menuCardTmpl(el)).join('');   
};
createMenu(menuCards);


refs.input.addEventListener('change', onInputChange);

 function onInputChange() {
  if (refs.input.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};


const keepOfTheme = () => {
const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
  refs.body.classList.add(savedTheme);
 }
  if (savedTheme === Theme.DARK) {
  refs.input.checked = true;
   }
 };
keepOfTheme();