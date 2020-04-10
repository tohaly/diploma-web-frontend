/* eslint  no-undef: 0 */

// Location

const LOCATION = NODE_ENV === 'development' ? 'http://validlink.ru' : window.location.origin;

// Cookie

const COOKIE_NAME_USER = 'User';
const COOKIE_NAME_LOGIN = 'isLogin';
const COOKIE_MAX_AGE = 3600 * 24 * 7;

// Screen

const WIDTH_FOR_MOBILE_MENU = 650;

export { LOCATION, COOKIE_MAX_AGE, COOKIE_NAME_USER, COOKIE_NAME_LOGIN, WIDTH_FOR_MOBILE_MENU };
