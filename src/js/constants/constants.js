export default {
  // Validation constants

  NAME_REQUIREMENT: 'Имя должно содержать 2 до 30 символов',
  INCORRECT_PASSWORD: 'Ваш пароль не соответствует требованиям к паролю',
  INCORRECT_EMAIL: 'Введите действительный адрес электронной почты',
  REQUIRED_FIELD: 'Это поле обязательное для заполнения',
  FIELD_CANNOT_BE_EMPTY: 'Поле не может быт пустым',

  // Card list constants

  HOW_MANY_CARDS: 3, // How many cards to show
  SEARCH_MORE: 'Искать ещё',
  SHOW_MORE: 'Показать еще',
  NOTHING_FOUND: 'Ничего не найдено',
  NOTHING_FOUND_MORE: 'К сожалению по вашему запросу ничего не найдено',
  RECOMMENDATION: 'Совет: Перейдите на главную и добавьте пару статьей',
  NO_SAVED_ARTICLES: 'Упс, кажется тут пусто',
  TEXT_NOT_FOUND: 'Текст отсутствует...',

  // Server errors

  FORBIDDEN: 'Не правильные почта или пароль',
  INTERNAL_SERVER_ERROR: 'Произошла ошибка сервера',
  EMAIL_IS_BUSY: 'Пользователь с таким email уже существует',
  SOMETHING_WRONG: 'Упс :( Что-то не так',
  SERVER_ERROR: 'Во время запроса произошла ошибка',
  REPEAT_LATER:
    'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',

  // Pop-up messages

  ADDED_SUCCESS: 'Статья успешно добавлена',
  DELETED_SUCCESS: 'Статья успешно удалена',
  LAST_ARTICLE: 'Это была последняя статья',
  SHORT_ERR_MESSAGE: 'Проблемы с сервером :(',

  // Words for news-info

  WORD_SAVED: ['сохранённая', 'сохранённые', 'сохранённых'],
  WORD_ARTICLES: ['статья', 'статьи', 'статей'],
  WORD_DIFFERENT: ['другой', 'другим', 'других'],
  QUIET_HERE: 'нет сохраненных статей',
  PROBLEM: ', возникла проблема',
  APPEAL: ', у вас',

  // Card property

  TITLE_LENGTH: 30,
  MAIN_TEXT_LENGTH: 180,
  MOBILE_TEXT_LENGTH: 100,
  WIDTH_FOR_CUT_TEXT: 900
};
