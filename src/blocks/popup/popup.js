import BaseComponent from '../../js/components/base-components';

export default class Popup extends BaseComponent {
  constructor(template, container) {
    super();
    this._template = template;
    this._container = container;
    this.closeButton = null;

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this._anywhereClose = this._anywhereClose.bind(this);
    this._keyDownClose = this._keyDownClose.bind(this);
    this._mobileClose = this._mobileClose.bind(this);
  }

  _setContent() {
    this._container.appendChild(this._template.cloneNode(true).content);
    this.closeButton = this._container.querySelector('.popup__close');
    this.addListeners();
  }

  _clearContent() {
    const child = this._container.children[0];

    if (child) {
      this.removeHandlers();
      this._container.removeChild(child);
    }
  }

  renderLoader(isLoad) {
    const loader = document.querySelector('.popup__loader');

    if (isLoad && loader) {
      loader.classList.add('popup__loader_is-active');
    } else if (!isLoad && loader) {
      loader.classList.remove('popup__loader_is-active');
    }
  }

  _anywhereClose(event) {
    if (event.target.classList.contains('popup_is-active')) {
      this.close();
    }
  }

  _keyDownClose(event) {
    if (Number(event.which) === 27) {
      this.close();
    }
  }

  _mobileClose(event) {
    if (event.target.classList.contains('header__universal-button')) {
      this.close();
    }
  }

  addListeners() {
    this.setHandlers([
      {
        event: 'click',
        element: this.closeButton,
        callback: this.close
      },
      {
        event: 'keydown',
        element: document,
        callback: this._keyDownClose
      },
      {
        event: 'mousedown',
        element: document,
        callback: this._anywhereClose
      },
      {
        event: 'click',
        element: document,
        callback: this._mobileClose
      }
    ]);
  }

  open() {
    document.querySelector('.page').classList.add('page_overflow');
    this._clearContent();
    this._setContent();
    this._container.classList.add('popup_is-active');
  }

  close() {
    this._container.children[0].classList.add('popup__content_close');
    setTimeout(() => {
      document.querySelector('.page').classList.remove('page_overflow');
      this._container.classList.remove('popup_is-active');
      this._clearContent();
    }, 600);
  }
}
