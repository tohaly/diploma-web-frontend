/* eslint-disable prefer-destructuring */
import BaseComponents from '../../js/components/base-components';
import CONSTANTS from '../../js/constants/constants';

const { WORD_SAVED, WORD_ARTICLES, WORD_DIFFERENT, QUIET_HERE, PROBLEM, APPEAL } = CONSTANTS;

export default class NewsInfo extends BaseComponents {
  constructor(container, follower, props) {
    super();
    this._container = container;
    this._follower = follower;
    this._props = props;
    this._changingText = this._container.querySelector('.news-info__text');
  }

  _getUserName() {
    this._container.querySelector('.news-info__user-name').textContent = this._props.user;
  }

  _transformText(numb, text) {
    const n = Math.abs(numb) % 100;
    const b = n % 10;

    if (n > 10 && n < 20) {
      return text[2];
    }
    if (b > 1 && b < 5) {
      return text[1];
    }
    if (b === 1) {
      return text[0];
    }
    return text[2];
  }

  getNumbOfArticles() {
    const numb = this._follower.children.length;
    const saved = this._transformText(numb, WORD_SAVED);
    const article = this._transformText(numb, WORD_ARTICLES);

    this._changingText.textContent = APPEAL;
    if (numb) {
      this._container.querySelector(
        '.news-info__numb-of-news'
      ).textContent = `${numb} ${saved} ${article}`;
    } else {
      this._container.querySelector('.news-info__numb-of-news').textContent = QUIET_HERE;
    }
  }

  _sortKeywords() {
    const articles = [...this._follower.children];
    const keywords = [];
    const sortedKeywords = [];

    articles.forEach(article => {
      const word = article.querySelector('.card__tag-name').textContent.trim();
      keywords.push(word);
    });

    const collection = keywords.reduce((prevVal, item) => {
      if (!prevVal[item]) {
        prevVal[item] = 1;
      } else {
        prevVal[item] += 1;
      }

      return prevVal;
    }, {});

    Object.keys(collection).forEach(key => {
      const arr = [key, collection[key]];
      sortedKeywords.push(arr);
    });

    sortedKeywords.sort((a, b) => {
      return b[1] - a[1];
    });

    return sortedKeywords;
  }

  _renderKeywords() {
    const keywordsArr = this._sortKeywords();
    const numbKeywords = keywordsArr.length;
    const numbRemainingKeywords = numbKeywords - 2;
    const keywordsContainer = this._container.querySelector('.news-info__keywords');
    const keywordContainerOne = keywordsContainer.querySelector('.news-info__keywords_tag_one');
    const keywordContainerTwo = keywordsContainer.querySelector('.news-info__keywords_tag_two');
    const keywordContainerThree = keywordsContainer.querySelector('.news-info__keywords_tag_three');

    switch (numbKeywords) {
      case 0: {
        keywordsContainer.classList.add('news-info__keywords_disable');
        break;
      }
      case 1: {
        keywordContainerOne.textContent = keywordsArr[0][0];
        keywordContainerTwo.textContent = '';
        keywordContainerThree.textContent = '';
        break;
      }
      case 2: {
        keywordContainerOne.textContent = keywordsArr[0][0];
        keywordContainerTwo.textContent = keywordsArr[1][0];
        keywordContainerThree.textContent = '';
        break;
      }
      case 3: {
        keywordContainerOne.textContent = keywordsArr[0][0];
        keywordContainerTwo.textContent = keywordsArr[1][0];
        keywordContainerThree.textContent = `и ${keywordsArr[2][0]}`;
        break;
      }
      default: {
        keywordContainerOne.textContent = keywordsArr[0][0];
        keywordContainerTwo.textContent = keywordsArr[1][0];
        keywordContainerThree.textContent = `и ${numbRemainingKeywords} ${this._transformText(
          numbRemainingKeywords,
          WORD_DIFFERENT
        )}`;
      }
    }
  }

  renderLoader() {
    const loader = this._container.querySelector('.news-info__loader');

    loader.classList.toggle('news-info__loader_is-active');
  }

  setServerError() {
    this._getUserName();
    this._renderKeywords();
    this._changingText.textContent = PROBLEM;
  }

  render() {
    this._getUserName();
    this.getNumbOfArticles();
    this._renderKeywords();
  }
}
