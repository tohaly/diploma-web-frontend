import BaseComponent from '../../../js/components/base-components';

export default class CardList extends BaseComponent {
  constructor(container, errContainer) {
    super();
    this._container = container;
    this._errContainer = errContainer;
  }

  renderLoader(isStart) {
    const loader = document.querySelector(`.loader`);

    if (isStart) {
      loader.classList.add(`loader_is-active`);
    } else {
      loader.classList.remove(`loader_is-active`);
    }
  }

  clearCardList() {
    Array.from(this._container.children).forEach(child => {
      child.remove();
    });
  }

  setResponseFromServer(set, messages = []) {
    this._errContainer.children.forEach((element, i) => {
      if (!element.classList.contains('server-response__img')) {
        element.textContent = messages[i];
      }
    });

    if (set) {
      this.switchCardList(false);
      this._errContainer.classList.add(`server-response_is-active`);
    } else {
      this._errContainer.classList.remove(`server-response_is-active`);
    }
  }

  switchCardList(isActive) {
    const cardContainer = this._container.parentNode;

    if (isActive) {
      cardContainer.classList.add('cards_is-active');
    } else {
      cardContainer.classList.remove('cards_is-active');
    }
  }

  render(articles) {
    if (!articles.length) {
      this.switchCardList(false);
    } else {
      this.switchCardList(true);
      articles.forEach(article => {
        this._container.appendChild(article);
      });
    }
  }
}
