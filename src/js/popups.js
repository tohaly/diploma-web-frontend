const SIGNIN_POPUP = `
      <div class="popup__content">
        <div class="popup__close"></div>
        <h3 class="popup__title">Вход</h3>
        <form class="popup__form" name="signin" novalidate>
          <label class="popup__label" for="email">Email</label>
          <input
            class="popup__input popup__input-type-email"
            placeholder="Введите почту"
            name="email"
            required
            pattern="^[a-z0-9][\\w\\-\\.]{2,}\\@(\\.[a-z]{2,}){1,127}$"
          />
          <span class="popup__error-message popup__error-message_input" aria-live="polite"
            >Неправильный формат email</span
          >
          <label class="popup__label" for="password">Пароль</label>
          <input
            class="popup__input popup__input_type-password"
            placeholder="Введите пароль"
            type="password"
            name="password"
            required
            minlength="8"
          />
          <span class="popup__error-message popup__error-message_input" aria-live="polite"
            >&nbsp;</span
          >          
          <span class="popup__error-message popup__error-message_form" aria-live="polite"
            >Неверное имя пользователя или пароль</span
          >
          <button type="button" class="button popup__button" name="signin-button" disabled>
            Войти
          </button>
          <p class="popup__alternative">или <span class="popup__alternative-link popup__alternative-link_signup">Зарегистрироваться</span></p>
        </form>
      </div>`;

const SIGNUP_POPUP = `
      <div class="popup__content">
        <div class="popup__close"></div>
        <h3 class="popup__title">Регистрация</h3>
        <form class="popup__form" name="signin" novalidate>
          <label class="popup__label" for="email">Email</label>
          <input
            class="popup__input popup__input-type-email"
            placeholder="Введите почту"
            name="email"
            required
            pattern="^[a-z0-9][\\w\\-\\.]{2,}\\@(\\.[a-z]{2,}){1,127}$"
          />
          <span class="popup__error-message popup__error-message_input" aria-live="polite"
            >Неправильный формат email</span
          >
          <label class="popup__label" for="password">Пароль</label>
          <input
            class="popup__input popup__input_type-password"
            placeholder="Введите пароль"
            type="password"
            name="password"
            required
            minlength="8"
          />
          <span class="popup__error-message popup__error-message_input" aria-live="polite"
            >&nbsp;</span
          >
          <label class="popup__label" for="name">Имя</label>
          <input
            class="popup__input popup__input_type-name"
            placeholder="Введите своё имя"
            type="name"
            name="name"
            required
            minlength="2"
            maxlength="30"
          />
          <span class="popup__error-message popup__error-message_input" aria-live="polite"
            >&nbsp;</span
          >
          <span class="popup__error-message popup__error-message_form" aria-live="polite"
            >Такой пользователь уже есть</span
          >
          <button type="button" class="button popup__button popup__button_is-active popup__button_signup" name="signin-button">
            Зарегистрироваться
          </button>
          <p class="popup__alternative">или <span class="popup__alternative-link popup__alternative-link_signin">Войти</span></p>
        </form>
      </div>`;

const SUCCESSES_POPUP = `
      <div class="popup__content">
        <div class="popup__close"></div>
        <h3 class="popup__title popup__title_successes">Пользователь успешно зарегистрирован!</h3>        
        <span class="popup__alternative-link popup__alternative-link_successes popup__alternative-link_signin">Выполнить вход</span>        
      </div>
`;

export { SIGNIN_POPUP, SIGNUP_POPUP, SUCCESSES_POPUP };
