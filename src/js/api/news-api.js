export default class NewsApi {
  constructor(props) {
    this.props = props;
  }

  _getResponse(res) {
    const errMessage = 'Ошибка сервера, попробуйте позднее';

    if (res.ok) {
      return res.json();
    }
    return Promise.reject(errMessage, res.status);
  }

  geNews(keyword) {
    return fetch(
      `${this.props.URL}/everything?${this.props.WHERE_LOOKING}=${keyword}&language=${this.props.LANG}&sortBy=publishedAt`,
      {
        headers: {
          'x-api-key': `${this.props.KEY}`
        }
      }
    ).then(this._getResponse);
  }
}
