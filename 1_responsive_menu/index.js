const menuButtons = Array.from(document.querySelectorAll('.menuButton'));
const closeButtons = Array.from(document.querySelectorAll('.menuButton-close'));

menuButtons.forEach(button => button.addEventListener('click', openMenu));
closeButtons.forEach(button => button.addEventListener('click', closeMenu));

function openMenu(e) {
  const nav = document.querySelector(`.${e.target.dataset.nav}`);

  nav.classList.add('menu--open');
}

function closeMenu(e) {
  const nav = document.querySelector(`.${e.target.dataset.nav}`);

  nav.classList.remove('menu--open');
}
