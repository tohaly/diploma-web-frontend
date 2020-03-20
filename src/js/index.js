// styles
import '../pages/index.css';

// Toggle mobile menu

const toggleMobileMenu = () => {
  document.querySelector('.header__hamburger').classList.toggle('header__hamburger_open');
  document.querySelector('.header').classList.toggle('header_hamburger-is-active');
  document.querySelector('.menu').classList.toggle('menu_is-open');
  document.querySelector('.page').classList.toggle('page__overflow');
};

document.querySelector('.header__hamburger').addEventListener('click', () => {
  toggleMobileMenu();
});
