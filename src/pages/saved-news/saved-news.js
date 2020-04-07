// Import CSS

import './saved-news.css';

// Import constants and configs

import { COOKIE_NAME_USER, COOKIE_NAME_LOGIN } from '../../js/constants/global-config';
import MAIN_API_URL from '../../js/constants/main-api-config';
import CONSTANTS from '../../js/constants/constants';

// Import Classes

import Cookie from '../../js/components/cookie';
import Header from '../../templates/header/header';
import MainApi from '../../js/api/main-api';
import SavedCard from '../../blocks/cards/card/news-card';
import SavedCardList from '../../blocks/cards/__list/cards-list';
import PopupMessages from '../../blocks/popup-messages/popup-messages';
import NewsInfo from '../../blocks/news-info/news-info';
import PopupConfirm from '../../blocks/popup/popup-confirm';

// Import helpers

import preloader from '../../js/helpers/preload';

// Variable declaration

const pageProps = {
  color: 'white',
  activeLink: 1,
  styles: [
    ['header', 'header_saved-news'],
    ['header__text-logo-link', 'header__text-logo-link_saved-news'],
    ['menu__container', 'menu__container_saved-news'],
    ['menu__link', 'menu__link_saved-news'],
    ['menu__link-item', 'menu__link-item_saved-news'],
    ['menu__link_active', 'menu__link_active_saved-news'],
    ['menu__button', 'menu__button_saved-news'],
    ['menu__logout-img', 'menu__logout-img_saved-news'],
    ['header__universal-button', 'header__universal-button_saved-news']
  ],
  user: null,
  isLogin: null
};

const {
  SERVER_ERROR,
  DELETED_SUCCESS,
  RECOMMENDATION,
  REPEAT_LATER,
  LAST_ARTICLE,
  NO_SAVED_ARTICLES,
  SHORT_ERR_MESSAGE
} = CONSTANTS;

const popupContainer = document.querySelector('.popup');
const templateSigninPopup = document.querySelector('.template_popup_confirm');
const cardListContainer = document.querySelector('.cards__list');
const errMessageContainer = document.querySelector('.server-response');
const popupMessagesContainer = document.querySelector('.popup-messages');
const newsInfoContainer = document.querySelector('.news-info__container');
const headerContainer = document.querySelector('.header');
const menuContainer = document.querySelector('.menu');

const savedCards = [];

const cookie = new Cookie();
const header = new Header(pageProps, headerContainer, menuContainer);
const mainApi = new MainApi(MAIN_API_URL);
const savedCardList = new SavedCardList(cardListContainer, errMessageContainer);
const popupMessages = new PopupMessages(popupMessagesContainer);
const newsInfo = new NewsInfo(newsInfoContainer, cardListContainer, pageProps);
const popupConfirm = new PopupConfirm(templateSigninPopup, popupContainer);

const renderPageAfterCardDelete = (_id, deleteFunction) => {
  deleteFunction();

  savedCards.pop();

  if (!savedCards.length) {
    savedCardList.setResponseFromServer(true, [RECOMMENDATION, NO_SAVED_ARTICLES]);
    popupMessages.render(LAST_ARTICLE);
  } else {
    popupMessages.render(DELETED_SUCCESS);
  }

  newsInfo.render();
};

const deleteNewsCardFromServer = (_id, deleteFunction, loader) => {
  loader();

  mainApi
    .removeArticle(_id)
    .then(() => renderPageAfterCardDelete(_id, deleteFunction))
    .catch(() => popupMessages.render(SHORT_ERR_MESSAGE))
    .finally(() => loader());
};

const createCard = article => {
  const card = new SavedCard(article);

  savedCards.push(card.create(true, true));

  card.setHandlers([
    {
      event: 'click',
      element: card.cardElement.querySelector('.card__button'),
      callback: () => {
        const { _id } = card.data;

        popupConfirm.open();
        popupConfirm.addListeners();

        popupConfirm.setHandlers([
          {
            event: 'click',
            element: document,
            callback: event => {
              if (event.target.classList.contains('popup__button_confirm')) {
                deleteNewsCardFromServer(_id, card.delete, card.renderLoader);
                popupConfirm.close();
              }
            }
          }
        ]);
      }
    }
  ]);
};

const renderCardList = res => {
  if (!res.data.length) {
    savedCardList.setResponseFromServer(true, [RECOMMENDATION, NO_SAVED_ARTICLES]);
  }
  res.data.forEach(article => {
    createCard(article);
  });

  return savedCards;
};

const getSavedNews = () => {
  savedCardList.setResponseFromServer(false);
  savedCardList.renderLoader(true);
  newsInfo.renderLoader();

  mainApi
    .getArticles()
    .then(res => renderCardList(res))
    .then(res => savedCardList.render(res))
    .then(() => newsInfo.render())
    .catch(() => {
      savedCardList.setResponseFromServer(true, [REPEAT_LATER, SERVER_ERROR]);
      newsInfo.setServerError();
    })
    .finally(() => {
      savedCardList.renderLoader(false);
      newsInfo.renderLoader();
    });
};

const leavePage = () => {
  window.location.href = 'index.html';
};

const getStarted = () => {
  if (cookie.getCookie(COOKIE_NAME_LOGIN)) {
    pageProps.user = cookie.getCookie(COOKIE_NAME_USER);
    pageProps.isLogin = cookie.getCookie(COOKIE_NAME_LOGIN);
    header.render();
    getSavedNews();
  } else {
    leavePage();
  }
};

const logOut = event => {
  if (event.target.classList.contains('menu__button_logout')) {
    cookie.deleteCookie(COOKIE_NAME_USER);
    cookie.deleteCookie(COOKIE_NAME_LOGIN);
    leavePage();
  }
};

// Listeners

window.addEventListener('resize', header.listenWidthPage);

document.addEventListener('click', logOut);

// Run functions

preloader();
getStarted();
