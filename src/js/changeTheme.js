const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
buttonSwitch.addEventListener('click', changeTheme);

const buttonSwitch = document.querySelector('.theme-switch__toggle');

function changeTheme(evt) {
    if (!evt.target.checked) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
        return
    }
}
document.body.classList.add(localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'));
buttonSwitch.checked = localStorage.getItem('theme') === Theme.DARK;