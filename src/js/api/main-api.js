export default class NewsApi {
  constructor(url) {
    this.url = url;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  signup(props) {
    const { email, password, name } = props;
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        name
      })
    }).then(this._getResponse);
  }

  signin(props) {
    const { email, password } = props;

    return fetch(`${this.url}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(this._getResponse);
  }

  getUserData() {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      credentials: 'include'
    }).then(this._getResponse);
  }

  getArticles() {
    return fetch(`${this.url}/articles`, {
      method: 'GET',
      credentials: 'include'
    }).then(this._getResponse);
  }

  createArticle({ keyword, title, date, source, link, image, text }) {
    return fetch(`${this.url}/articles`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        keyword,
        title,
        date,
        source,
        link,
        image,
        text
      })
    }).then(this._getResponse);
  }

  removeArticle(articleId) {
    return fetch(`${this.url}/articles/${articleId}`, {
      method: 'DELETE',
      credentials: 'include'
    }).then(this._getResponse);
  }
}
