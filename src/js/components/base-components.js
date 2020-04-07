export default class BaseComponents {
  constructor() {
    this._events = [];
  }

  setHandlers(listeners) {
    listeners.forEach(listener => {
      this._addHandler(listener);
      this._events.push(listener);
    });
  }

  _addHandler({ event, element, callback }) {
    element.addEventListener(event, callback);
  }

  removeHandlers() {
    this._events.forEach(({ element, event, callback }) => {
      element.removeEventListener(event, callback);
    });
    this._events = [];
  }

  scrollTo({ element, block }) {
    element.scrollIntoView({ block, behavior: 'smooth' });
  }
}
