import NewsCard from './news-card';

let cards = [];

export default class NewsCardList {
  constructor(isSavedNews) {
    this.container = document.querySelector('.cards__items');

    this.isSavedNews = isSavedNews;
    this._showThreeCards = this._showThreeCards.bind(this);
    this._getMoreCards = this._getMoreCards.bind(this);
  }

  _transformResults(list, keyword) {
    return list.map(article => {
      return {
        keyword,
        title: article.title,
        text: article.description,
        date: article.publishedAt,
        source: article.source.name,
        link: article.url,
        image: article.urlToImage
      };
    });
  }

  _toggleNodeClass(classOfNode) {
    document.querySelector(`.${classOfNode}`).classList.toggle(`${classOfNode}_is-active`);
  }

  addCard(item) {
    console.log(item);
    const element = new NewsCard(item, this.isSavedNews);

    cards.push(element.render());
    this.container.appendChild(element.render());
  }

  renderLoader(isStart) {
    this._toggleNodeClass('loader');
    if (isStart) {
      document.querySelector(`.cards`).classList.remove(`cards_is-active`);
      document
        .querySelector(`.search-result__nothing`)
        .classList.remove('search-result__nothing_is-active');
    } else if (!isStart && !document.querySelector(`.search-result__nothing_is-active`)) {
      document.querySelector(`.cards`).classList.add(`cards_is-active`);
    }
  }

  _showThreeCards() {
    const arr = Array.from(document.querySelectorAll('.card_is-hidden'));
    for (let i = 0; i <= 2; i += 1) {
      if (arr[i]) {
        arr[i].classList.remove('card_is-hidden');
      }
    }
    if (arr.length <= 3) {
      document.querySelector('.cards__button').classList.toggle('cards__button_is-hidden');
      return;
    }
    if (arr.length >= 3 && document.querySelector('.cards__button_is-hidden')) {
      document.querySelector('.cards__button').classList.toggle('cards__button_is-hidden');
    }
  }

  _getMoreCards(event) {
    if (event.target.classList.contains('cards__button')) {
      this._showThreeCards();
    }
  }

  setListeners() {
    // How it must work, i don't now
    // console.log('hi');
    // this.props.listeners.push(this._getMoreCards.bind(this));
  }

  render(list, keyword) {
    if (cards.length) {
      cards = [];
      document.querySelector('.cards__items').innerHTML = '';
    }

    if (!list.length) {
      this._toggleNodeClass('search-result__nothing');
    } else {
      this._transformResults(list, keyword).forEach(article => this.addCard(article));
      this._showThreeCards();
    }
  }
}
