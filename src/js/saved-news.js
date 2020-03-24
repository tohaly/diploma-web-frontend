import '../pages/saved-news.css';

const toggleMobileMenu = () => {
  document.querySelector('.menu').classList.toggle('menu_is-open');
  document.querySelector('.menu__button').classList.toggle('menu__button_mobile');
  document.querySelector('.page').classList.toggle('page_overflow');
  if (!window.location.pathname.includes('/saved-news.html')) {
    document.querySelector('.header').classList.toggle('header_mobile-menu');
    document
      .querySelector('.header__universal-button')
      .classList.toggle('header__universal-button_close');
  } else {
    document
      .querySelector('.header__universal-button')
      .classList.toggle('header__universal-button_close_saved-news');
  }
};

document.addEventListener('click', event => {
  if (
    event.target.classList.contains('header__universal-button') ||
    event.target.classList.contains('menu__button_mobile')
  ) {
    toggleMobileMenu();
  }
});

let timer;

document.addEventListener('click', event => {
  if (event.target.classList.contains('card__button')) {
    event.target.nextElementSibling.classList.toggle('card__confirm_is-active');
  }
});

document.addEventListener('mouseout', event => {
  if (event.target.classList.contains('card__button')) {
    timer = setTimeout(() => {
      event.target.nextElementSibling.classList.remove('card__confirm_is-active');
    }, 500);
  }
  if (event.target.classList.contains('card__confirm')) {
    timer = setTimeout(() => {
      event.target.classList.remove('card__confirm_is-active');
    }, 500);
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
    // eslint-disable-next-line no-alert
    alert('Новость успешно удалена');
  }
});
