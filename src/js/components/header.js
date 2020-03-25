export default class Header {
  constructor(props) {
    this.props = props;
  }

  getTemplateLogoutButton() {
    return `<button class="button menu__button menu__button_logout">
              <span class="menu__user-name">${this.props.userName}</span>
              <span class="menu__logout-img"></span>
            </button>`;
  }

  getTemplateAuthButton() {
    return `<button class="button menu__button menu__button_authorization">
              Авторизоваться
            </button>`;
  }

  getTemplateSavedNewsLink() {
    return `<div class="menu__link">
              <a href="./saved-news.html" class="menu__link-item">Сохранённые статьи</a>
            </div>`;
  }

  getActiveLink() {
    document
      .querySelectorAll('.menu__link')
      [this.props.activeLink].classList.add('menu__link_active');
  }

  getColor() {
    this.props.variableElements.forEach(elements => {
      document.querySelectorAll(`.${elements[0]}`).forEach(element => {
        element.classList.add(`${elements[1]}`);
      });
    });
  }

  addTemplate(template) {
    const element = document.createElement('div');
    element.insertAdjacentHTML('beforeend', template.trim());

    document.querySelector('.menu__container').appendChild(element.firstChild);
  }

  isModifyPage() {
    if (this.props.color) {
      this.getColor();
    }
  }

  pageProtection() {
    if (!this.props.isLogin && this.props.color) {
      window.location.href = 'index.html';
    }
  }

  isLogin() {
    this.pageProtection();
    if (this.props.isLogin) {
      this.addTemplate(this.getTemplateSavedNewsLink());
      this.addTemplate(this.getTemplateLogoutButton());
    } else {
      this.addTemplate(this.getTemplateAuthButton());
    }
  }

  render() {
    this.isLogin();
    this.getActiveLink();
    this.isModifyPage();
  }
}
