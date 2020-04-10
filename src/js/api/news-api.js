export default class NewsApi {
  constructor(props) {
    this.props = props;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  _getShortVersionISO(string) {
    return string.toISOString().substring(0, 10);
  }

  _getCurrentDate() {
    const date = new Date();

    return this._getShortVersionISO(date);
  }

  _getOldestNewsDay() {
    const currentDate = new Date();
    const newDate = currentDate.setDate(currentDate.getDate() - this.props.DAY_LATEST_NEWS);
    const LatestNewsDate = new Date(newDate);

    return this._getShortVersionISO(LatestNewsDate);
  }

  getNews(keyword) {
    return fetch(
      `${this.props.URL}/everything?${this.props.WHERE_LOOKING}=${keyword}&language=${
        this.props.LANG
      }&sortBy=${
        this.props.SORT_BY
      }&from=${this._getOldestNewsDay()}&to=${this._getCurrentDate()}&pageSize=${
        this.props.PAGE_SIZE
      }`,

      {
        headers: {
          'x-api-key': `${this.props.KEY}`
        }
      }
    ).then(this._getResponse);
  }
}
