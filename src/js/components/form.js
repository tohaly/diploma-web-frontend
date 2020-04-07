import BaseComponent from './base-components';
import CONSTANTS from '../constants/constants';

const {
  NAME_REQUIREMENT,
  INCORRECT_PASSWORD,
  INCORRECT_EMAIL,
  REQUIRED_FIELD,
  FORBIDDEN,
  INTERNAL_SERVER_ERROR,
  EMAIL_IS_BUSY
} = CONSTANTS;

export default class Form extends BaseComponent {
  constructor() {
    super();
    this._validateInputElement = this._validateInputElement.bind(this);
    this._validateForm = this._validateForm.bind(this);
  }

  _toggleButton(button, isValidate = false) {
    if (isValidate) {
      button.classList.add('popup__button_is-active');
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', true);
      button.classList.remove('popup__button_is-active');
    }
  }

  _toggleErrorMessage(element, reset = true, message = '') {
    element.textContent = message;
    if (!reset) {
      element.classList.add('popup__error-message_is-active');
    } else {
      element.classList.remove('popup__error-message_is-active');
    }
  }

  _validateInputElement(event) {
    const element = event.target;
    const errElement = element.nextElementSibling.children[0];
    const ServerError = element.parentNode.querySelector('.popup__error-message_form');

    if (element.validity.valueMissing) {
      this._toggleErrorMessage(errElement, false, REQUIRED_FIELD);
      this._toggleErrorInputStyle(element, false);
      return false;
    }

    if (element.type === 'email' && !element.validity.valid) {
      this._toggleErrorMessage(errElement, false, INCORRECT_EMAIL);
      return false;
    }

    if (element.type === 'password' && !element.validity.valid) {
      this._toggleErrorMessage(errElement, false, INCORRECT_PASSWORD);
      return false;
    }

    if (element.type === 'text') {
      if (element.validity.tooShort || element.validity.tooLong) {
        this._toggleErrorMessage(errElement, false, NAME_REQUIREMENT);
        return false;
      }
    }
    this._toggleErrorMessage(errElement);
    this._toggleErrorMessage(ServerError);
    return true;
  }

  _validateForm(event) {
    const form = event.target.parentNode;
    const button = form.querySelector('.popup__button');

    if (!form.checkValidity()) {
      this._toggleButton(button);
    } else {
      this._toggleButton(button, true);
    }
  }

  _clearPassword(form) {
    form.elements.password.value = '';
  }

  _getInfo(form) {
    const object = {};

    Array.from(form.elements).forEach(element => {
      if (element.type !== 'button') {
        const keyName = element.name;
        object[keyName] = element.value;
      }
    });
    this._clearPassword(form);

    return object;
  }

  setServerError(status) {
    const element = document.querySelector('.popup__error-message_form');
    this.render();

    switch (status) {
      case 401: {
        this._toggleErrorMessage(element, false, FORBIDDEN);
        break;
      }
      case 400: {
        this._toggleErrorMessage(element, false, EMAIL_IS_BUSY);
        break;
      }
      default: {
        this._toggleErrorMessage(element, false, INTERNAL_SERVER_ERROR);
        break;
      }
    }
  }

  submitForm(form) {
    this._toggleButton(form.elements.submitButton);
    return this._getInfo(form);
  }

  render() {
    this.setHandlers([
      {
        event: 'input',
        element: document,
        callback: this._validateInputElement
      },
      {
        event: 'input',
        element: document,
        callback: this._validateForm
      }
    ]);
  }
}
