// styles
import '../pages/index.css';

// Toggle mobile menu

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

// Fast delete card

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

// Fast popups

// eslint-disable-next-line import/first
import { SIGNIN_POPUP, SIGNUP_POPUP, SUCCESSES_POPUP } from './popups';

const clearPopupContainer = () => {
  document.querySelector('.popup').innerHTML = '';
};

const popupIsActive = () => {
  document.querySelector('.popup').classList.add('popup_is-active');
};

const popupUnActive = () => {
  document.querySelector('.popup').classList.remove('popup_is-active');
};

const toggleUniversalButton = () => {
  if (!window.location.pathname.includes('/saved-news.html')) {
    document
      .querySelector('.header__universal-button')
      .classList.toggle('header__universal-button_close');
    document
      .querySelector('.header__universal-button')
      .classList.toggle('header__universal-button_close_popup');
  } else {
    document
      .querySelector('.header__universal-button')
      .classList.toggle('header__universal-button_close_saved-news');
    document
      .querySelector('.header__universal-button')
      .classList.toggle('header__universal-button_close_popup');
  }
};

const addPopup = popup => {
  const element = document.createElement('div');
  element.insertAdjacentHTML('beforeend', popup.trim());
  document.querySelector('.popup').appendChild(element.firstChild);

  if (window.screen.availWidth <= 510) {
    toggleUniversalButton();
  }
  popupIsActive();
};

const removePopup = () => {
  clearPopupContainer();
  popupUnActive();
};

document.addEventListener('click', event => {
  if (
    event.target.classList.contains('menu__button_authorization') ||
    event.target.classList.contains('popup__alternative-link_signin')
  ) {
    clearPopupContainer();
    addPopup(SIGNIN_POPUP);
  }
});

document.addEventListener('click', event => {
  if (event.target.classList.contains('popup__alternative-link_signup')) {
    clearPopupContainer();
    addPopup(SIGNUP_POPUP);
  }
});

document.addEventListener('click', event => {
  if (
    event.target.classList.contains('popup__close') ||
    event.target.classList.contains('header__universal-button_close_popup')
  ) {
    if (window.screen.availWidth <= 510) {
      toggleUniversalButton();
    }
    removePopup();
  }
});

document.addEventListener('click', event => {
  if (event.target.classList.contains('popup__button_signup')) {
    clearPopupContainer();
    addPopup(SUCCESSES_POPUP);
  }
});

document.addEventListener('click', event => {
  if (event.target.classList.contains('card__confirm_signin')) {
    clearPopupContainer();
    addPopup(SIGNIN_POPUP);
  }
});

// Fast search result

document.addEventListener('click', event => {
  if (event.target.classList.contains('search-form__button')) {
    event.preventDefault();
    document.querySelector('.loader').classList.add('loader_is-active');
    document.querySelector('.cards').classList.remove('cards_is-active');
    document
      .querySelector('.search-result__nothing')
      .classList.remove('search-result__nothing_is-active');
    setTimeout(() => {
      document.querySelector('.loader').classList.remove('loader_is-active');
      document
        .querySelector('.search-result__nothing')
        .classList.add('search-result__nothing_is-active');
    }, 4000);
  }
});
