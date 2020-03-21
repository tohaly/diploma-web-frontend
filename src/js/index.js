// styles
import '../pages/index.css';

// Toggle mobile menu

const toggleMobileMenu = () => {
  document.querySelector('.menu').classList.toggle('menu_is-open');
  document.querySelector('.page').classList.toggle('page__overflow');

  if (window.location.pathname === '/index.html') {
    document.querySelector('.header').classList.toggle('header_hamburger-is-active');
    document.querySelector('.header__hamburger').classList.toggle('header__hamburger_open');
  } else {
    document
      .querySelector('.header__hamburger')
      .classList.toggle('header__hamburger_open_saved_news');
  }
};

document.querySelector('.header__hamburger').addEventListener('click', () => {
  toggleMobileMenu();
});
