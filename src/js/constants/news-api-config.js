export default {
  URL: 'http://newsapi.org/v2',
  LANG: 'ru',
  WHERE_LOOKING: 'qInTitle', // qInTitle - search in title / q - search in title and body
  KEY: '6b548abf117b49e3857d6096d2297a1c',
  SORT_BY: 'publishedAt', // Maybe one of these:  relevancy/popularity/publishedAt
  DAY_LATEST_NEWS: 1, // A date and optional time for the oldest article allowed
  PAGE_SIZE: 100 // The number of results to return per page.
};

// More information here: https://newsapi.org/docs/