// Import CSS

import './index.css';

// Import constants and configs

import {
  LOCATION,
  COOKIE_MAX_AGE,
  COOKIE_NAME_USER,
  COOKIE_NAME_LOGIN,
  WIDTH_FOR_MOBILE_MENU
} from '../../js/constants/global-config';
import CONSTANTS from '../../js/constants/constants';
import NEWS_API_CONFIG from '../../js/constants/news-api-config';
import MAIN_API_URL from '../../js/constants/main-api-config';
import DEFAULT_IMAGE from '../../images/default-img.png';

// Import Classes

import Cookie from '../../js/components/cookie';
import Header from '../../templates/header/header';
import SearchForm from '../../blocks/search-form/search-form';
import NewsApi from '../../js/api/news-api';
import MainApi from '../../js/api/main-api';
import CardListFoundNews from '../../blocks/cards/__list/card-list-found-news';
import NewsCard from '../../blocks/cards/card/news-card';
import PopupMessages from '../../blocks/popup-messages/popup-messages';
import Popup from '../../blocks/popup/popup';
import Form from '../../js/components/form';

// Import helpers

import preloader from '../../js/helpers/preload';

// Variable declaration

const {
  SOMETHING_WRONG,
  SERVER_ERROR,
  ADDED_SUCCESS,
  DELETED_SUCCESS,
  REPEAT_LATER,
  NOTHING_FOUND,
  NOTHING_FOUND_MORE
} = CONSTANTS;

const cards = {
  classCopy: [],
  nodes: [],
  savedCards: []
};

const pageProps = {
  activeLink: 0,
  user: null,
  isLogin: null
};

const popupContainer = document.querySelector('.popup');
const templateSigninPopup = document.querySelector('.template_popup_signin');
const templateSignupPopup = document.querySelector('.template_popup_signup');
const templateSuccessPopup = document.querySelector('.template_popup_success');
const popupMessagesContainer = document.querySelector('.popup-messages');
const cardListContainer = document.querySelector('.cards__list');
const errMessageContainer = document.querySelector('.server-response');
const headerContainer = document.querySelector('.header');
const menuContainer = document.querySelector('.menu');

const cookie = new Cookie();
const header = new Header(pageProps, headerContainer, menuContainer);
const searchForm = new SearchForm('cards');
const cardList = new CardListFoundNews(cardListContainer, errMessageContainer);
const newsApi = new NewsApi(NEWS_API_CONFIG);
const mainApi = new MainApi(MAIN_API_URL);
const popupMessages = new PopupMessages(popupMessagesContainer);
const popupSignin = new Popup(templateSigninPopup, popupContainer);
const popupSignup = new Popup(templateSignupPopup, popupContainer);
const popupSuccess = new Popup(templateSuccessPopup, popupContainer);
const form = new Form();

//  Function declaration

const logOut = () => {
  pageProps.user = cookie.deleteCookie(COOKIE_NAME_USER);
  pageProps.isLogin = cookie.deleteCookie(COOKIE_NAME_LOGIN);

  header.renderButtons();

  cards.classCopy.forEach(copy => {
    copy.renderMarkButtonAfterActions(false);
  });

  cards.savedCards = [];
};

const handleLogout = event => {
  if (event.target.classList.contains('menu__button_logout')) {
    logOut();
  }
};

const getNewId = (oldId, newId, cardsList) => {
  cardsList.forEach(card => {
    if (String(card.getAttribute('_id').trim()) === String(oldId).trim()) {
      card.setAttribute('_id', `${newId}`);
    }
  });
  popupMessages.render(ADDED_SUCCESS);

  return newId;
};

const addCardToSavedCardList = (newId, card) => {
  card._id = newId;
  cards.savedCards.push(card);
};

const deleteCardFromSavedCardList = _id => {
  const arr = [];

  cards.savedCards.forEach(card => {
    if (_id !== card._id) {
      arr.push(card);
    }
  });

  cards.savedCards = arr;
};

const addOrDeleteCardFromServer = (data, loader, switchButton) => {
  loader();

  if (typeof data === 'object') {
    const oldId = data._id;
    mainApi
      .createArticle(data)
      .then(results => getNewId(oldId, results._id, cards.elements))
      .then(_id => addCardToSavedCardList(_id, data))
      .then(() => switchButton())
      .catch(() => popupMessages.render(SERVER_ERROR))
      .finally(() => loader());
  } else {
    mainApi
      .removeArticle(data)
      .then(() => switchButton())
      .then(() => popupMessages.render(DELETED_SUCCESS))
      .then(() => deleteCardFromSavedCardList(data))
      .catch(() => popupMessages.render(SERVER_ERROR))
      .finally(() => loader());
  }
};

const parsingArticle = (data, keyword, _id) => {
  return {
    _id,
    keyword,
    title: data.title,
    text: data.description,
    date: data.publishedAt,
    source: data.source.name,
    link: data.url,
    image: data.urlToImage || `${LOCATION}/${DEFAULT_IMAGE}`
  };
};

const getAlreadyMarkedCards = (article, list) => {
  for (let i = 0; i < list.length; i += 1) {
    if (article.title.startsWith(list[i].title.substring(0, 20))) {
      article._id = list[i]._id;
      return true;
    }
  }
  return false;
};

const createCard = (article, keyword, _id) => {
  const { isLogin } = pageProps;
  const parsedArticle = parsingArticle(article, keyword, _id);
  const isMarked = isLogin ? getAlreadyMarkedCards(parsedArticle, cards.savedCards) : false;
  const newsCard = new NewsCard(parsedArticle);

  cards.classCopy.push(newsCard);
  cards.elements.push(newsCard.create(isLogin, false, isMarked));
  newsCard.setHandlers([
    {
      event: 'click',
      element: newsCard.cardElement.querySelector('.card__button'),
      callback: () => {
        const data = newsCard.getCardData();
        addOrDeleteCardFromServer(data, newsCard.renderLoader, newsCard.switchMarkButton);
      }
    }
  ]);
};

const getResultsFromApi = (result, keyword) => {
  const { articles } = result;

  if (!articles.length) {
    cardList.setResponseFromServer(true, [NOTHING_FOUND_MORE, NOTHING_FOUND]);
    return;
  }

  articles.forEach((article, _id) => createCard(article, keyword, _id));
  cardList.render(cards.elements);
};

const clearCards = () => {
  cards.elements = [];

  cards.classCopy.forEach(copy => {
    copy.removeHandlers();
  });

  cards.classCopy = [];
  cardList.clearCardList();
};

const submitSearchForm = event => {
  if (event.target.classList.contains('search-form__button') && searchForm.validate()) {
    event.preventDefault();

    const keyword = searchForm.setKeyword();

    if (cards.elements.length) {
      clearCards();
    }

    cardList.switchCardList(false);
    cardList.renderLoader(true);
    cardList.setResponseFromServer(false);
    searchForm.goToResults();

    newsApi
      .getNews(keyword)
      .then(result => getResultsFromApi(result, keyword))
      .catch(() => {
        searchForm.setErrorMessage(SOMETHING_WRONG);
        cardList.setResponseFromServer(true, [REPEAT_LATER, SERVER_ERROR]);
      })
      .finally(() => cardList.renderLoader(false));
  }
};
const signup = event => {
  if (event.target.classList.contains('popup__button_signup')) {
    const signupForm = document.querySelector('.popup__form');
    const userData = form.submitForm(signupForm);

    popupSignup.renderLoader(true);
    mainApi
      .signup(userData)
      .then(() => popupSuccess.open())
      .catch(err => form.setServerError(err.status))
      .finally(() => popupSignup.renderLoader(false));
  }
};

const getMarkedCards = list => {
  cards.classCopy.forEach(copy => {
    const isMarked = getAlreadyMarkedCards(copy.data, list);

    copy.renderMarkButtonAfterActions(true, isMarked);
  });
};

const errLogout = () => {
  popupMessages.render(SERVER_ERROR);
  logOut();
};

const lazyLoadSavedCards = () => {
  return mainApi
    .getArticles()
    .then(res => {
      cards.savedCards = res.data;

      return res.data;
    })
    .catch(() => errLogout());
};

const ClosePopupsEvent = () => {
  if (window.innerWidth <= WIDTH_FOR_MOBILE_MENU) {
    header.addMobileListeners();
  }

  window.addEventListener('resize', header.listenWidthPage);
  form.removeHandlers();
  header.switchCloseButton(false);
};

const login = event => {
  if (event.target.classList.contains('popup__button_signin')) {
    const signinForm = document.querySelector('.popup__form');
    const userData = form.submitForm(signinForm);

    popupSignin.renderLoader(true);
    mainApi
      .signin(userData)
      .then(results => {
        pageProps.user = cookie.setCookie(COOKIE_NAME_USER, results.name, {
          'max-age': COOKIE_MAX_AGE
        });
        pageProps.isLogin = cookie.setCookie(COOKIE_NAME_LOGIN, 'true', {
          'max-age': COOKIE_MAX_AGE
        });
      })
      .then(() => lazyLoadSavedCards())
      .then(res => getMarkedCards(res))
      .then(() => header.renderButtons())
      .then(() => popupSignin.close())
      .then(() => ClosePopupsEvent())
      .catch(err => form.setServerError(err.status))
      .finally(() => popupSignin.renderLoader(false));
  }
};

const handleClosePopupEvents = event => {
  const { target } = event;

  switch (event.type) {
    case 'keydown': {
      if (Number(event.which) === 27 && document.querySelector('.popup_is-active')) {
        ClosePopupsEvent();
      }
      break;
    }
    case 'mousedown': {
      if (target.classList.contains('popup_is-active')) {
        ClosePopupsEvent();
      }
      break;
    }
    default: {
      if (
        target.classList.contains('popup__close') ||
        target.classList.contains('header__universal-button_close')
      ) {
        ClosePopupsEvent();
      }
    }
  }
};

const openSigninPopup = event => {
  if (
    event.target.classList.contains('menu__button_authorization') ||
    event.target.classList.contains('popup__alternative-link_signin')
  ) {
    if (window.innerWidth <= WIDTH_FOR_MOBILE_MENU) {
      header.removeHandlers();
    }

    header.switchMobileMenu(false);
    popupSignin.open();
    form.render();
    header.switchCloseButton(true);
    window.removeEventListener('resize', header.listenWidthPage);
  }
};

const popupSignupOpen = event => {
  if (event.target.classList.contains('popup__alternative-link_signup')) {
    if (window.innerWidth <= WIDTH_FOR_MOBILE_MENU) {
      header.removeHandlers();
    }

    header.switchMobileMenu(false);
    popupSignup.open();
    form.render();
    header.switchCloseButton(true);
    window.removeEventListener('resize', header.listenWidthPage);
  }
};

const getStarted = () => {
  if (cookie.getCookie(COOKIE_NAME_LOGIN)) {
    pageProps.user = cookie.getCookie(COOKIE_NAME_USER);
    pageProps.isLogin = cookie.getCookie(COOKIE_NAME_LOGIN);
    lazyLoadSavedCards();
  }

  header.render();
  searchForm.addListeners();
};

// Listeners

window.addEventListener('resize', header.listenWidthPage);

document.addEventListener('keydown', handleClosePopupEvents);

document.addEventListener('mousedown', handleClosePopupEvents);

document.addEventListener('click', submitSearchForm);
document.addEventListener('click', openSigninPopup);
document.addEventListener('click', popupSignupOpen);
document.addEventListener('click', handleClosePopupEvents);
document.addEventListener('click', signup);
document.addEventListener('click', login);
document.addEventListener('click', handleLogout);

// Run functions

preloader();
getStarted();
