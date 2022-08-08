const calc = (size, material, options, promocode, result) => {
  /**
   * МОДУЛЬ КАЛЬКУЛЯТОР РАСЧЕТА ОБЩИЙ СУММЫ
   *
   * size       -> id селекта "Выберите размер картины"
   * material   -> id селекта "Выберите материал картины"
   * options    -> id селекта "Дополнительные услуги"
   * promocode  -> серектор куда вставлять промокод
   * result     -> серектор куда выводить результат
   */

  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);

  let sum = 0;

  const calcFunc = () => {
    sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

    if (!sizeBlock.value || !materialBlock.value) {

      resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";

    } else if (promocodeBlock.value.trim() === 'IWANTPOPART') {

      resultBlock.textContent = Math.round(sum * 0.7);

    } else {

      resultBlock.textContent = sum;

    }
  };

  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;