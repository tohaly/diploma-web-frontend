import BaseComponent from '../../js/components/base-components';

import { WIDTH_FOR_MOBILE_MENU } from '../../js/constants/global-config';

export default class Header extends BaseComponent {
  constructor(props, header, menu) {
    super();
    this._props = props;
    this._header = header;
    this._menu = menu;
    this._menuContainer = this._menu.querySelector('.menu__container');

    this._handleOpenCloseMobileMenu = this._handleOpenCloseMobileMenu.bind(this);
    this._handleAnyPlaceClose = this._handleAnyPlaceClose.bind(this);
    this.listenWidthPage = this.listenWidthPage.bind(this);
  }

  _templateLogoutButton() {
    return `<button class="button menu__button menu__button_logout">
              <span class="menu__user-name"></span>
              <span class="menu__logout-img"></span>
            </button>`;
  }

  _templateAuthButton() {
    return `<button class="button menu__button menu__button_authorization">
              Авторизоваться
            </button>`;
  }

  _templateSavedNewsLink() {
    return `<div class="menu__link">
              <a href="./saved-news.html" class="menu__link-item ">Сохранённые статьи</a>
            </div>`;
  }

  _getColor() {
    this._props.styles.forEach(elements => {
      document.querySelectorAll(`.${elements[0]}`).forEach(element => {
        element.classList.add(`${elements[1]}`);
      });
    });
  }

  _addTemplate(template) {
    const element = document.createElement('div');

    element.insertAdjacentHTML('beforeend', template.trim());
    this._menuContainer.appendChild(element.firstChild);
  }

  _clearButtons() {
    Array.from(this._menuContainer.children).forEach(element => {
      if (!element.classList.contains('menu__link_main')) {
        element.remove();
      }
    });
  }

  _setActiveLink() {
    document
      .querySelectorAll('.menu__link')
      [this._props.activeLink].classList.add('menu__link_active');
  }

  _setColorPage() {
    if (this._props.color) {
      this._getColor();
    }
  }

  switchMobileMenu(isOpen) {
    if (isOpen) {
      this._menu.classList.add('menu_is-open');
      this._menuContainer.classList.remove('menu__container_closed');
      this._getMobileHeader(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this._menuContainer.classList.add('menu__container_closed');
      setTimeout(() => {
        this._menu.classList.remove('menu_is-open');
        this._getMobileHeader(false);
      }, 300);
    }
  }

  _switchPageOverflow(isHidden) {
    const page = document.querySelector('.page');

    if (isHidden) {
      page.classList.add('page_overflow');
    } else {
      page.classList.remove('page_overflow');
    }
  }

  _getMobileHeader(isOpen) {
    if (!this._props.color) {
      if (isOpen) {
        this._header.classList.add('header_mobile-menu');
      } else {
        this._header.classList.remove('header_mobile-menu');
      }
    }
  }

  _handleOpenCloseMobileMenu(event) {
    const hamburger = event.target.classList.contains('header__universal-button_hamburger');
    const openedMenu = this._header.querySelector('.menu_is-open');

    if (hamburger && !openedMenu) {
      this.switchMobileMenu(true);
      this._switchPageOverflow(true);
    } else if (hamburger && openedMenu) {
      this.switchMobileMenu(false);
      this._switchPageOverflow(false);
    }
  }

  _handleAnyPlaceClose(event) {
    if (event.target.classList.contains('menu_is-open')) {
      this.switchMobileMenu(false);
      this._switchPageOverflow(false);
    }
  }

  addMobileListeners() {
    this.setHandlers([
      {
        event: 'click',
        element: document,
        callback: this._handleOpenCloseMobileMenu
      },
      {
        event: 'mousedown',
        element: document,
        callback: this._handleAnyPlaceClose
      }
    ]);
  }

  listenWidthPage(event) {
    if (event.target.innerWidth <= WIDTH_FOR_MOBILE_MENU) {
      this.addMobileListeners();
    } else {
      this.removeHandlers();
    }
  }

  switchCloseButton(isActive) {
    const button = this._header.querySelector('.header__universal-button');

    if (isActive) {
      button.classList.add('header__universal-button_close');
    } else {
      button.classList.remove('header__universal-button_close');
    }
  }

  renderButtons() {
    this._clearButtons();
    if (this._props.isLogin) {
      this._addTemplate(this._templateSavedNewsLink());
      this._addTemplate(this._templateLogoutButton());
      this._menuContainer.querySelector('.menu__user-name').textContent = this._props.user;
    } else {
      this._addTemplate(this._templateAuthButton());
    }
  }

  render() {
    this.renderButtons();
    this._setActiveLink();
    this._setColorPage();
    if (window.innerWidth <= WIDTH_FOR_MOBILE_MENU) {
      this.addMobileListeners();
    }
  }
}
