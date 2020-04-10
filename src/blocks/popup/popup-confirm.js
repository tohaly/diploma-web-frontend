import Popup from './popup';

export default class PopupConfirm extends Popup {
  _handlePopupCancelButton(event) {
    if (event.target.classList.contains('popup__button_cancel')) {
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
      },
      {
        event: 'click',
        element: document,
        callback: this._handlePopupCancelButton.bind(this)
      }
    ]);
  }
}
