const buttons = Array.from(document.querySelectorAll('.menuButton'));

buttons.forEach(button => button.addEventListener('click', toggleMenu));

function toggleMenu(e) {
  const nav = document.querySelector(`.${e.target.dataset.nav}`);

  nav.classList.toggle('menu--open');
}
