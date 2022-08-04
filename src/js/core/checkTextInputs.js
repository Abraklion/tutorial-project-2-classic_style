const checkTextInputs = (selector) => {
  /**
   * маска для валидации имя и сообщения (удаляет английские буквы)
   * selector -> селектор на который навешиваем маску
   */

  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault();
      }
    });
  });
};

export default checkTextInputs;