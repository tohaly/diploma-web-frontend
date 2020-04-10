import CardList from './cards-list';

import constants from '../../../js/constants/constants';

const { HOW_MANY_CARDS, SEARCH_MORE, SHOW_MORE } = constants;

export default class CardListFoundNews extends CardList {
  constructor(container, errContainer) {
    super(container, errContainer);
    this.cards = [];

    this._goBack = this._goBack.bind(this);
    this.showMore = this.showMore.bind(this);
  }

  _switchButton(isDisable) {
    const button = document.querySelector('.cards__button');

    if (!isDisable) {
      button.textContent = SHOW_MORE;
      this.removeHandlers();
    } else {
      button.textContent = SEARCH_MORE;
      this.setHandlers([
        {
          element: button,
          event: 'click',
          callback: this._goBack
        }
      ]);
    }
  }

  showMore() {
    const cardListLength = this._container.querySelectorAll('.card').length;

    for (let i = cardListLength; i < cardListLength + HOW_MANY_CARDS; i += 1)
      if (this.cards[i]) {
        this._container.appendChild(this.cards[i]);
      }
    if (this.cards.length - cardListLength <= 3) {
      this.removeHandlers();
      this._switchButton(true);
    }
  }

  _listeners() {
    this.setHandlers([
      {
        event: 'click',
        element: document.querySelector('.cards__button'),
        callback: this.showMore
      }
    ]);
  }

  _goBack() {
    const formFelid = document.querySelector('.search-form__field');

    this.scrollTo({
      element: formFelid,
      block: 'start'
    });

    formFelid.value = '';
    formFelid.focus({ preventScroll: true });
  }

  render(articles) {
    this.cards = [];

    if (!articles.length) {
      this.switchCardList(false);
    } else {
      this.switchCardList(true);
      articles.forEach((article, i) => {
        if (i < HOW_MANY_CARDS) {
          this._container.appendChild(article);
        }
        this.cards.push(article);
      });

      if (articles.length <= HOW_MANY_CARDS) {
        this._switchButton(true);
      } else {
        this._switchButton(false);
      }

      this._listeners();
    }
  }
}
