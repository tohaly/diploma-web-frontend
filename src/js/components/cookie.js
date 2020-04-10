export default class Cookie {
  setCookie(name, value, options = {}) {
    options = {
      ...options,
      path: '/'
    };

    const arrKey = Object.keys(options);
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; `;

    arrKey.forEach(key => {
      cookieString += `${key}=${options[key]}; `;
    });
    document.cookie = cookieString;
    return value;
  }

  getCookie(name) {
    const matches = document.cookie.match(
      new RegExp(`(?:^|; )${name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\/\+^])/g, '\\$1')}=([^;]*)`)
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  deleteCookie(name) {
    this.setCookie(name, '', {
      'max-age': -1
    });
    return null;
  }
}
