import BaseComponent from '../../js/components/base-components';

import constants from '../../js/constants/constants';

const { FIELD_CANNOT_BE_EMPTY } = constants;

export default class SearchForm extends BaseComponent {
  constructor() {
    super();

    this.form = document.forms.searchForm;
    this.field = this.form.elements.searchField;
    this.button = this.form.elements.searchButton;

    this.deleteErrorMessage = this.deleteErrorMessage.bind(this);
  }

  _clear() {
    this.form.reset();
  }

  _toggleErrClass() {
    this.field.classList.toggle('search-form__field_error-message');
  }

  validate() {
    if (!this.form.checkValidity()) {
      this.setErrorMessage(FIELD_CANNOT_BE_EMPTY);
      return false;
    }
    return true;
  }

  _switchSubmitButton(isDisable) {
    const button = document.querySelector('.search-form__button');

    if (!isDisable) {
      button.removeAttribute('disabled');
      button.classList.remove('search-form__button_disabled');
    } else {
      button.setAttribute('disabled', true);
      button.classList.add('search-form__button_disabled');
    }
  }

  setErrorMessage(message) {
    this._toggleErrClass();
    this.field.value = message;
    this._switchSubmitButton(true);
  }

  deleteErrorMessage(event) {
    if (event.target.classList.contains('search-form__field_error-message')) {
      this._clear();
      this._toggleErrClass();
      this._switchSubmitButton(false);
    }
  }

  addListeners() {
    this.setHandlers([
      {
        event: 'mousedown',
        element: document,
        callback: this.deleteErrorMessage
      }
    ]);
  }

  setKeyword() {
    return this.field.value;
  }

  goToResults() {
    this.scrollTo({
      element: document.querySelector('.search-form__button'),
      block: 'start'
    });
  }
}
