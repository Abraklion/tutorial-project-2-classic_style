/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/core/calcScroll.js":
/*!***********************************!*\
  !*** ./src/js/core/calcScroll.js ***!
  \***********************************/
/*! exports provided: calcScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcScroll", function() { return calcScroll; });
const calcScroll = () => {
  /**
   * ширина скролла прокрутки
   */
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");



window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const forms = () => {
  /**
   * МОДУЛЬ ДЛЯ РАБОТЫ С ФОРМАМИ
   *
   * form     -> все формы на сайте
   * inputs   -> все input на сайте
   * upload   -> все input type='file' на сайте
   */
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };
  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  };

  const postData = async (url, data) => {
    /**
     * асинхронный запрос к серверу
     * url     -> адрес
     * data   -> данные для передачи на сервер
     */
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  };

  const clearInputs = () => {
    /**
     * сбрасываем данные формы
     */
    inputs.forEach(item => {
      item.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = "Файл не выбран";
    });
  };

  upload.forEach(item => {
    item.addEventListener('input', () => {
      /**
       * подставляем названия файла вместо статического текста "Файл не выбран"
       */
      console.log(item.files[0]);
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 6 ? dots = "..." : dots = '.';
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });
  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);
      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item);
      console.log(formData);
      let api;
      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
      console.log(api);
      postData(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_calcScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/calcScroll */ "./src/js/core/calcScroll.js");


const modals = () => {
  /**
   * МОДУЛЬ ДЛЯ РАБОТЫ С МОДАЛЬНЫМИ ОКНАМИ
   */
  let btnPressed = false; // была ли нажата кнопка вызова модального окна

  function bindModal(triggerSelector, modalSelector, closeSelector) {
    let closeClickOverlay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    let triggerDestroy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    /**
     *
     * triggerSelector     -> селектор который открывает модальное окно
     * modalSelector       -> селектор модального окна которое мы будем открывать
     * closeSelector       -> селектор который закрывает модальное окно
     * closeClickOverlay   -> буливо значения, можно ли скрывать модальне окно по клику подложку
     * triggerDestroy      -> удалять селектор при клике на который открывается модальное окно
     *
     */
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = document.documentElement.offsetWidth > 991 ? Object(_core_calcScroll__WEBPACK_IMPORTED_MODULE_0__["calcScroll"])() : 0;

    const hideAllModals = () => {
      // скрывает все модальные окна
      windows.forEach(item => {
        item.style.display = 'none';
        item.classList.add('animated', 'fadeIn'); // из библиотеки animate.css
      });
    };

    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }

        btnPressed = true;

        if (triggerDestroy) {
          item.remove();
        }

        hideAllModals();
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });
    close.addEventListener('click', () => {
      hideAllModals();
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener('click', e => {
      if (e.target === modal && closeClickOverlay) {
        hideAllModals();
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }

  function showModalByTime(selector, time) {
    // показывает интересующию нас модалку через определенное время
    // selector -> селектор модалки которую нужно открыть
    // time     -> через сколько милисекунд открыть
    setTimeout(function () {
      let scroll = document.documentElement.offsetWidth > 991 ? Object(_core_calcScroll__WEBPACK_IMPORTED_MODULE_0__["calcScroll"])() : 0,
          display;
      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = "block";
        }
      });

      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  }

  function openByScroll(selector) {
    // показывает нужную нам модалку когда пользователь доскролил до конца страницы
    // selector -> селектор модалки которую нужно открыть
    window.addEventListener('scroll', showModalScroll);

    function showModalScroll() {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

      if (!btnPressed && Math.ceil(window.scrollY + document.documentElement.clientHeight) >= scrollHeight) {
        document.querySelector(selector).click();
        window.removeEventListener('scroll', showModalScroll);
      }
    }
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true, true);
  openByScroll('.fixed-gift');
  showModalByTime('.popup-consultation', 50000);
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliders = (slides, dir, prev, next) => {
  /**
   * МОДУЛЬ ДЛЯ РАБОТЫ С СЛАЙДЕРОМ
   *
   * slides -> селектор список слайдеров
   * dir -> направления прокрутки
   * prev -> селектор кнопки назад
   * next -> селектор кнопки вперед
   *
   */
  let slideIndex = 1,
      paused = false;
  const items = document.querySelectorAll(slides);

  function showSlides(n) {
    // показывает слайд
    if (n > items.length) {
      // если дошли до конца слайдера переходим в начало
      slideIndex = 1;
    }

    if (n < 1) {
      // если дошли до начала слайдера переходим в конец
      slideIndex = items.length;
    }

    items.forEach(item => {
      // скрываем все слайды
      item.classList.add("animated", "fadeIn"); // из библиотеки animate.css

      item.style.display = "none";
    });
    items[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  try {
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      // назад
      plusSlides(-1);
    });
    nextBtn.addEventListener('click', () => {
      // вперед
      plusSlides(1);
    });
  } catch (e) {}

  function activateAnimation() {
    // автопроигрывания слайдов
    if (dir === 'vertical') {
      paused = setInterval(function () {
        plusSlides(1);
      }, 5000);
    } else {
      paused = setInterval(function () {
        plusSlides(1);
      }, 5000);
    }
  }

  activateAnimation();
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map