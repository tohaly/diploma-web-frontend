import BaseComponent from '../../js/components/base-components';

export default class PopupMessages extends BaseComponent {
  constructor(container) {
    super();
    this._container = container;

    this._switchResponse = this._switchResponse.bind(this);
  }

  _switchResponse(isActive = false) {
    if (isActive) {
      this._container.classList.add('popup-messages_is-active');
    } else {
      this._container.classList.remove('popup-messages_is-active');
      this._setMessage('');
    }
  }

  _setMessage(message) {
    this._container.querySelector('.popup-messages__message').textContent = message;
  }

  _drown() {
    setTimeout(this._switchResponse, 1000);
  }

  render(message) {
    this._setMessage(message);
    this._switchResponse(true);
    this._drown();
  }
}
