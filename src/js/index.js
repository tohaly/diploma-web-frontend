// styles
import '../pages/index.css';

// Toggle mobile menu

const toggleMobileMenu = () => {
  document.querySelector('.menu').classList.toggle('menu_is-open');
  document.querySelector('.page').classList.toggle('page__overflow');
  if (window.location.pathname !== '/saved-news.html') {
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

// delete card

let timer;

document.addEventListener('click', () => {
  if (event.target.classList.contains('card__button')) {
    event.target.nextElementSibling.classList.toggle('card__confirm_is-active');
  }
});

document.addEventListener('mouseout', event => {
  if (event.target.classList.contains('card__button')) {
    timer = setTimeout(() => {
      event.target.nextElementSibling.classList.remove('card__confirm_is-active');
    }, 1000);
  }
  if (event.target.classList.contains('card__confirm')) {
    timer = setTimeout(() => {
      event.target.classList.remove('card__confirm_is-active');
    }, 1000);
  }
});

document.addEventListener('mouseover', event => {
  if (
    event.target.classList.contains('card__confirm') ||
    event.target.classList.contains('card__button')
  ) {
    clearTimeout(timer);
  }
});

document.addEventListener('click', event => {
  if (event.target.classList.contains('card__confirm_delete')) {
    alert('Новость успешно удалена');
  }
});
