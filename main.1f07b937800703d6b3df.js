!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=60)}([function(t,n,e){(function(n){var e="object",r=function(t){return t&&t.Math==Math&&t};t.exports=r(typeof globalThis==e&&globalThis)||r(typeof window==e&&window)||r(typeof self==e&&self)||r(typeof n==e&&n)||Function("return this")()}).call(this,e(31))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(2),o=e(11),i=e(17);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(0),o=e(12),i=e(35),u=r["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,n){return u[t]||(u[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(0),o=e(16).f,i=e(5),u=e(34),a=e(12),s=e(38),c=e(45);t.exports=function(t,n){var e,p,l,f,_,d=t.target,v=t.global,m=t.stat;if(e=v?r:m?r[d]||a(d,{}):(r[d]||{}).prototype)for(p in n){if(f=n[p],l=t.noTargetGet?(_=o(e,p))&&_.value:e[p],!c(v?p:d+(m?".":"#")+p,t.forced)&&void 0!==l){if(typeof f==typeof l)continue;s(f,l)}(t.sham||l&&l.sham)&&i(f,"sham",!0),u(e,p,f,t)}}},function(t,n,e){var r=e(33),o=e(10);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(2),o=e(20),i=e(6),u=e(19),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(5);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){t.exports={}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(0),o=e(7),i=e(24),u=e(47),a=r.Symbol,s=o("wks");t.exports=function(t){return s[t]||(s[t]=u&&a[t]||(u?a:i)("Symbol."+t))}},function(t,n,e){var r=e(2),o=e(32),i=e(17),u=e(9),a=e(19),s=e(4),c=e(20),p=Object.getOwnPropertyDescriptor;n.f=r?p:function(t,n){if(t=u(t),n=a(n,!0),c)try{return p(t,n)}catch(t){}if(s(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(2),o=e(1),i=e(21);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(3),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(7);t.exports=r("native-function-to-string",Function.toString)},function(t,n,e){var r=e(7),o=e(24),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(40),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(4),o=e(9),i=e(27).indexOf,u=e(13);t.exports=function(t,n){var e,a=o(t),s=0,c=[];for(e in a)!r(u,e)&&r(a,e)&&c.push(e);for(;n.length>s;)r(a,e=n[s++])&&(~i(c,e)||c.push(e));return c}},function(t,n,e){var r=e(9),o=e(42),i=e(43),u=function(t){return function(n,e,u){var a,s=r(n),c=o(s.length),p=i(u,c);if(t&&e!=e){for(;c>p;)if((a=s[p++])!=a)return!0}else for(;c>p;p++)if((t||p in s)&&s[p]===e)return t||p||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,n,e){"use strict";var r=e(8),o=e(27).includes,i=e(46);r({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(1),o=e(18),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(0),o=e(7),i=e(5),u=e(4),a=e(12),s=e(22),c=e(36),p=c.get,l=c.enforce,f=String(s).split("toString");o("inspectSource",(function(t){return s.call(t)})),(t.exports=function(t,n,e,o){var s=!!o&&!!o.unsafe,c=!!o&&!!o.enumerable,p=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||u(e,"name")||i(e,"name",n),l(e).source=f.join("string"==typeof n?n:"")),t!==r?(s?!p&&t[n]&&(c=!0):delete t[n],c?t[n]=e:i(t,n,e)):c?t[n]=e:a(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&p(this).source||s.call(this)}))},function(t,n){t.exports=!1},function(t,n,e){var r,o,i,u=e(37),a=e(0),s=e(3),c=e(5),p=e(4),l=e(23),f=e(13),_=a.WeakMap;if(u){var d=new _,v=d.get,m=d.has,g=d.set;r=function(t,n){return g.call(d,t,n),n},o=function(t){return v.call(d,t)||{}},i=function(t){return m.call(d,t)}}else{var b=l("state");f[b]=!0,r=function(t,n){return c(t,b,n),n},o=function(t){return p(t,b)?t[b]:{}},i=function(t){return p(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!s(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(22),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){var r=e(4),o=e(39),i=e(16),u=e(11);t.exports=function(t,n){for(var e=o(n),a=u.f,s=i.f,c=0;c<e.length;c++){var p=e[c];r(t,p)||a(t,p,s(n,p))}}},function(t,n,e){var r=e(25),o=e(41),i=e(44),u=e(6);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){t.exports=e(0)},function(t,n,e){var r=e(26),o=e(14).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(28),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=a[u(t)];return e==c||e!=s&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},s=i.NATIVE="N",c=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(15),o=e(48),i=e(5),u=r("unscopables"),a=Array.prototype;null==a[u]&&i(a,u,o(null)),t.exports=function(t){a[u][t]=!0}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(6),o=e(49),i=e(14),u=e(13),a=e(51),s=e(21),c=e(23)("IE_PROTO"),p=function(){},l=function(){var t,n=s("iframe"),e=i.length;for(n.style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;e--;)delete l.prototype[i[e]];return l()};t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=r(t),e=new p,p.prototype=null,e[c]=t):e=l(),void 0===n?e:o(e,n)},u[c]=!0},function(t,n,e){var r=e(2),o=e(11),i=e(6),u=e(50);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=u(n),a=r.length,s=0;a>s;)o.f(t,e=r[s++],n[e]);return t}},function(t,n,e){var r=e(26),o=e(14);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(25);t.exports=r("document","documentElement")},function(t,n,e){"use strict";var r=e(8),o=e(53),i=e(10);r({target:"String",proto:!0,forced:!e(55)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(54);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,n,e){var r=e(3),o=e(18),i=e(15)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,e){var r=e(15)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,"/./"[t](n)}catch(t){}}return!1}},function(t,n,e){"use strict";var r=e(8),o=e(57).trim;r({target:"String",proto:!0,forced:e(58)("trim")},{trim:function(){return o(this)}})},function(t,n,e){var r=e(10),o="["+e(29)+"]",i=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),a=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(u,"")),e}};t.exports={start:a(1),end:a(2),trim:a(3)}},function(t,n,e){var r=e(1),o=e(29);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},function(t,n,e){},function(t,n,e){"use strict";e.r(n);e(30),e(52),e(56),e(59);var r,o='\n      <div class="popup__content">\n        <div class="popup__close"></div>\n        <h3 class="popup__title">Вход</h3>\n        <form class="popup__form" name="signin" novalidate>\n          <label class="popup__label" for="email">Email</label>\n          <input\n            class="popup__input popup__input-type-email"\n            placeholder="Введите почту"\n            name="email"\n            required\n            pattern="^[a-z0-9][\\w\\-\\.]{2,}\\@(\\.[a-z]{2,}){1,127}$"\n          />\n          <span class="popup__error-message popup__error-message_input" aria-live="polite"\n            >Неправильный формат email</span\n          >\n          <label class="popup__label" for="password">Пароль</label>\n          <input\n            class="popup__input popup__input_type-password"\n            placeholder="Введите пароль"\n            type="password"\n            name="password"\n            required\n            minlength="8"\n          />\n          <span class="popup__error-message popup__error-message_input" aria-live="polite"\n            >&nbsp;</span\n          >          \n          <span class="popup__error-message popup__error-message_form" aria-live="polite"\n            >Неверное имя пользователя или пароль</span\n          >\n          <button type="button" class="button popup__button" name="signin-button" disabled>\n            Войти\n          </button>\n          <p class="popup__alternative">или <span class="popup__alternative-link popup__alternative-link_signup">Зарегистрироваться</span></p>\n        </form>\n      </div>';document.addEventListener("click",(function(t){(t.target.classList.contains("header__universal-button")||t.target.classList.contains("menu__button_mobile"))&&(document.querySelector(".menu").classList.toggle("menu_is-open"),document.querySelector(".menu__button").classList.toggle("menu__button_mobile"),window.location.pathname.includes("/saved-news.html")?(document.querySelector(".header").classList.toggle("header_mobile-menu"),document.querySelector(".header__universal-button").classList.toggle("header__universal-button_close")):document.querySelector(".header__universal-button").classList.toggle("header__universal-button_close_saved-news"))})),document.addEventListener("click",(function(t){t.target.classList.contains("card__button")&&t.target.nextElementSibling.classList.toggle("card__confirm_is-active")})),document.addEventListener("mouseout",(function(t){t.target.classList.contains("card__button")&&(r=setTimeout((function(){t.target.nextElementSibling.classList.remove("card__confirm_is-active")}),500)),t.target.classList.contains("card__confirm")&&(r=setTimeout((function(){t.target.classList.remove("card__confirm_is-active")}),500))})),document.addEventListener("mouseover",(function(t){(t.target.classList.contains("card__confirm")||t.target.classList.contains("card__button"))&&clearTimeout(r)})),document.addEventListener("click",(function(t){t.target.classList.contains("card__confirm_delete")&&alert("Новость успешно удалена")}));var i=function(){document.querySelector(".popup").innerHTML=""},u=function(){window.location.pathname.includes("/saved-news.html")?(document.querySelector(".header__universal-button").classList.toggle("header__universal-button_close"),document.querySelector(".header__universal-button").classList.toggle("header__universal-button_close_popup")):(document.querySelector(".header__universal-button").classList.toggle("header__universal-button_close_saved-news"),document.querySelector(".header__universal-button").classList.toggle("header__universal-button_close_popup"))},a=function(t){var n=document.createElement("div");n.insertAdjacentHTML("beforeend",t.trim()),document.querySelector(".popup").appendChild(n.firstChild),window.screen.availWidth<=510&&u(),document.querySelector(".popup").classList.add("popup_is-active")},s=function(){i(),document.querySelector(".popup").classList.remove("popup_is-active")};document.addEventListener("click",(function(t){(t.target.classList.contains("menu__button_authorization")||t.target.classList.contains("popup__alternative-link_signin"))&&(i(),a(o))})),document.addEventListener("click",(function(t){t.target.classList.contains("popup__alternative-link_signup")&&(i(),a('\n      <div class="popup__content">\n        <div class="popup__close"></div>\n        <h3 class="popup__title">Регистрация</h3>\n        <form class="popup__form" name="signin" novalidate>\n          <label class="popup__label" for="email">Email</label>\n          <input\n            class="popup__input popup__input-type-email"\n            placeholder="Введите почту"\n            name="email"\n            required\n            pattern="^[a-z0-9][\\w\\-\\.]{2,}\\@(\\.[a-z]{2,}){1,127}$"\n          />\n          <span class="popup__error-message popup__error-message_input" aria-live="polite"\n            >Неправильный формат email</span\n          >\n          <label class="popup__label" for="password">Пароль</label>\n          <input\n            class="popup__input popup__input_type-password"\n            placeholder="Введите пароль"\n            type="password"\n            name="password"\n            required\n            minlength="8"\n          />\n          <span class="popup__error-message popup__error-message_input" aria-live="polite"\n            >&nbsp;</span\n          >\n          <label class="popup__label" for="name">Имя</label>\n          <input\n            class="popup__input popup__input_type-name"\n            placeholder="Введите своё имя"\n            type="name"\n            name="name"\n            required\n            minlength="2"\n            maxlength="30"\n          />\n          <span class="popup__error-message popup__error-message_input" aria-live="polite"\n            >&nbsp;</span\n          >\n          <span class="popup__error-message popup__error-message_form" aria-live="polite"\n            >Такой пользователь уже есть</span\n          >\n          <button type="button" class="button popup__button popup__button_is-active popup__button_signup" name="signin-button">\n            Зарегистрироваться\n          </button>\n          <p class="popup__alternative">или <span class="popup__alternative-link popup__alternative-link_signin">Войти</span></p>\n        </form>\n      </div>'))})),document.addEventListener("click",(function(t){(t.target.classList.contains("popup__close")||t.target.classList.contains("header__universal-button_close_popup"))&&(window.screen.availWidth<=510&&u(),s())})),document.addEventListener("click",(function(t){t.target.classList.contains("popup__button_signup")&&(i(),a('\n      <div class="popup__content">\n        <div class="popup__close"></div>\n        <h3 class="popup__title popup__title_successes">Пользователь успешно зарегистрирован!</h3>        \n        <span class="popup__alternative-link popup__alternative-link_successes popup__alternative-link_signin">Выполнить вход</span>        \n      </div>\n'))})),document.addEventListener("click",(function(t){t.target.classList.contains("card__confirm_signin")&&(i(),a(o))})),document.addEventListener("click",(function(t){t.target.classList.contains("search-form__button")&&(t.preventDefault(),document.querySelector(".loader").classList.add("loader_is-active"),document.querySelector(".cards").classList.remove("cards_is-active"),document.querySelector(".search-result__nothing").classList.remove("search-result__nothing_is-active"),setTimeout((function(){document.querySelector(".loader").classList.remove("loader_is-active"),document.querySelector(".search-result__nothing").classList.add("search-result__nothing_is-active")}),4e3))}))}]);