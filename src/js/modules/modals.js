import {calcScroll} from "../core/calcScroll";

const modals = () => {

  /**
   * МОДУЛЬ ДЛЯ РАБОТЫ С МОДАЛЬНЫМИ ОКНАМИ
   */

  let btnPressed = false; // была ли нажата кнопка вызова модального окна

  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, triggerDestroy = false) {

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
      scroll = document.documentElement.offsetWidth > 991 ? calcScroll() : 0;

    const hideAllModals = () => {
      // скрывает все модальные окна

      windows.forEach(item => {
        item.style.display = 'none';
        item.classList.add('animated', 'fadeIn'); // из библиотеки animate.css
      });

    };

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
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

    modal.addEventListener('click', (e) => {
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

    setTimeout(function() {
      let scroll = document.documentElement.offsetWidth > 991 ? calcScroll() : 0,
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

    function showModalScroll(){
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

      if (!btnPressed && (Math.ceil(window.scrollY + document.documentElement.clientHeight) >= scrollHeight)) {

        document.querySelector(selector).click();

        window.removeEventListener('scroll', showModalScroll)

      }
    }

  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true, true);

  openByScroll('.fixed-gift');

  showModalByTime('.popup-consultation', 50000);
};

export default modals;