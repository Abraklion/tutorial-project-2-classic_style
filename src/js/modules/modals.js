import {calcScroll} from "../core/calcScroll";

const modals = () => {

  /**
   * МОДУЛЬ ДЛЯ РАБОТЫ С МОДАЛЬНЫМИ ОКНАМИ
   */

  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

    /**
     *
     * triggerSelector     -> селектор который открывает модальное окно
     * modalSelector       -> селектор модального окна которое мы будем открывать
     * closeSelector       -> селектор который закрывает модальное окно
     * closeClickOverlay   -> буливо значения, можно ли скрывать модальне окно по клику подложку
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
      });

    };

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
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

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

  showModalByTime('.popup-consultation', 5000);
};

export default modals;