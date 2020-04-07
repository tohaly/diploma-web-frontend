import BaseComponent from '../../../js/components/base-components';
import DEFAULT_IMAGE from '../../../images/default-img.png';
import constants from '../../../js/constants/constants';

const { TITLE_LENGTH, MAIN_TEXT_LENGTH, MOBILE_TEXT_LENGTH, WIDTH_FOR_CUT_TEXT } = constants;

export default class NewsCard extends BaseComponent {
  constructor(data) {
    super();
    this.data = data;
    this.cardElement = null;

    this.delete = this.delete.bind(this);
    this.getCardData = this.getCardData.bind(this);
    this.removeHandlers = this.removeHandlers.bind(this);
    this.switchMarkButton = this.switchMarkButton.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
  }

  _cutExcessText(text, numb) {
    if (text.length > numb) {
      const regex = new RegExp(`^.{0,${numb}}.[a-zа-яё0-9]{3}`, 'i');
      return `${regex.exec(text)[0]}...`.trim();
    }
    return text.trim();
  }

  _transformDate(date) {
    const newDate = new Date(date);
    return `${newDate.toLocaleString('ru', {
      month: 'long',
      day: 'numeric'
    })}, ${newDate.getFullYear()}`;
  }

  _template(isSavedNews, isLogin, isMarked = false) {
    const { _id, keyword, title, text, date, source, link, image } = this.data;
    const TEXT_LENGTH =
      window.innerWidth <= WIDTH_FOR_CUT_TEXT ? MOBILE_TEXT_LENGTH : MAIN_TEXT_LENGTH;
    const deleteButton = ` 
      <button class="card__button card__button_delete">
        <svg width="18" height="19">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 0H6v2H0v2h18V2h-6V0zM2 6v11c0 1.1.9 2 2 2h10a2 2 0 002-2V6h-2v11H4V6H2zm4 0v9h2V6H6zm4 0v9h2V6h-2z"
          />
        </svg>
      </button>
    `;
    const markButton = `
      <button class="card__button card__button_mark 
        ${isMarked ? 'card__button_mark_is-active' : 'bug'}"  
        ${!isLogin ? 'disabled' : ''}>
        <svg width="14" height="19">
          <path d="M6.38 12.71L1 16.94V1h12v15.94l-5.38-4.23-.62-.48-.62.48z" />
        </svg>
      </button>
    `;

    return `<article class="card" _id="${String(_id)}">
    <a href="${link}" class="card__link" target="_blanck">
      <img
        class="card__img"
        src="${image}"
        alt="${title}"
        onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}';"
      />
      <div class="card__content">
        <time class="card__pub-time" datetime=${date}>${this._transformDate(date)}</time>
        <h3 class="card__title">${this._cutExcessText(title, TITLE_LENGTH)}</h3>
        <p class="card__text">
          ${this._cutExcessText(text, TEXT_LENGTH)}
        </p>
        <p class="card__resource">
          ${source}
        </p>
      </div>
    </a>
    <div class="card__control">
      ${isSavedNews ? deleteButton : markButton}
      <a class="card__button-info ${!isLogin || isSavedNews ? 'card__button-info_is-active' : ''}">
        ${isSavedNews ? 'Убрать из сохранённых' : 'Войдите, чтобы сохранять статьи'}
      </a>
    </div>
    <p class="card__tag-name ${isSavedNews ? 'card__tag-name_is-active' : ''}">
      ${keyword}
    </p>
    <div class="card__loader">
      <p class="card__loader-text">Идет обработка...</p>
    </div>
  </article>`;
  }

  switchMarkButton() {
    this.cardElement.querySelector('.card__button').classList.toggle('card__button_mark_is-active');
  }

  getCardData() {
    if (!this.cardElement.querySelector('.card__button_mark_is-active')) {
      this.data._id = this.cardElement.getAttribute('_id');
      return this.data;
    }
    return this.cardElement.getAttribute('_id');
  }

  renderLoader() {
    this.cardElement.querySelector('.card__loader').classList.toggle('card__loader_is-active');
  }

  create(isLogin, isSavedNews, isMarked) {
    const element = document.createElement('div');
    element.insertAdjacentHTML('beforeend', this._template(isSavedNews, isLogin, isMarked).trim());
    this.cardElement = element.firstChild;

    return this.cardElement;
  }

  delete() {
    this.cardElement.remove();
    this.removeHandlers();
  }

  renderMarkButtonAfterActions(isLogin, isMarked = false) {
    const button = this.cardElement.querySelector('.card__button_mark');
    const loginInfo = this.cardElement.querySelector('.card__button-info');

    if (isLogin) {
      if (isMarked) {
        button.classList.add('card__button_mark_is-active');
        this.cardElement.setAttribute('_id', `${this.data._id}`);
      }
      loginInfo.classList.remove('card__button-info_is-active');
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', true);
      button.classList.remove('card__button_mark_is-active');
      loginInfo.classList.add('card__button-info_is-active');
    }
  }
}
