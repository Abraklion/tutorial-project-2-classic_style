const mask = (selector) => {
  /**
   * маска для валидации телефона
   * selector -> селектор на который навешиваем маску
   */

  let setCursorPosition = (pos, elem) => {
    /**
     * устанавливает позицию курсора
     * pos -> позиция курсора
     * elem -> элемент в которой будет устанавливать курсор
     */

    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      // для Internet Explorer
      let range = elem.createTextRange();

      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    /**
     * маска формата телефона
     * event -> объект событие
     */

    let matrix = '+7 (___) ___ __ __',                             // матрица маски
      i = 0,                                                       // итератор
      def = matrix.replace(/\D/g, ''),        // найдет в матрицы только цифры, не цифры заменит на ''
      val = this.value.replace(/\D/g, '');    // найдет в элементе с которым мы взаимодействуем только цифры, не цифры заменит на ''

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function(a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {

      if (this.value.length === 2) {
        this.value = '';
      }

    } else {

      setCursorPosition(this.value.length, this);

    }
  }

  let inputs = document.querySelectorAll(selector);

  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

export default mask;