import data from './card-data-is-dev'; // For develope form

const constants = {
  serverError: 'Что-то не так с сервером =(',
  validationError: 'Поле не может быт пустым'
};

export default class SearchForm {
  constructor(props) {
    this.props = props;
    this.form = document.forms.searchForm;
    this.field = this.form.elements.searchField;
    this.button = this.form.elements.searchButton;
  }

  getServerData() {
    // There will be a server data soon
    return data;
    // return this.setErrorMessage(constants.serverError);
  }

  _getKeyword() {
    return this.field.value;
  }

  _clear() {
    this.form.reset();
  }

  _searchResults() {
    return this.getServerData().filter(item => {
      return item.keyword === this._getKeyword();
    });
  }

  _toggleErrClass() {
    this.field.classList.toggle('search-form__field_error-message');
  }

  _validateInputElement() {
    if (!this.form.checkValidity()) {
      this.setErrorMessage(constants.validationError);
      return false;
    }
    return true;
  }

  setErrorMessage(message) {
    this._toggleErrClass();
    this.field.value = message;
  }

  _submitForm(event) {
    if (event.target.classList.contains('search-form__button')) {
      event.preventDefault();

      if (this._validateInputElement()) {
        console.log(this._searchResults()); // Soon connected API
      }
    }
  }

  _deleteErrorMessage(event) {
    if (event.target.classList.contains('search-form__field_error-message')) {
      this._clear();
      this._toggleErrClass();
    }
  }

  renderListeners() {
    this.props.listeners.push(this._submitForm.bind(this), this._deleteErrorMessage.bind(this));
  }
}
