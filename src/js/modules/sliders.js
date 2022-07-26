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

  } catch(e){}

  function activateAnimation() {

    // автопроигрывания слайдов

    if (dir === 'vertical') {

      paused = setInterval(function() {
        plusSlides(1);
      }, 5000);

    } else {

      paused = setInterval(function() {
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

export default sliders;