const pictureSize = (imgSelector) => {
  /**
   * МОДУЛЬ ПОКАЗЫВАЕТ ИЗОБРАЖЕНИЯ ПРИ НАВЕДЕНИИ
   *
   * imgSelector  -> селектор блоков с картинками
   */

  const blocks = document.querySelectorAll(imgSelector);

  function showImg (block) {
    /**
     * показать картинку
     * block  -> элемент с картинкой внутри
     */
    const img = block.querySelector('img');

    // something.png => something-1.png
    img.src = img.src.slice(0, -4) + '-1.png';

    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none';
    });
  }

  function hideImg (block) {
    /**
     * скрыть картинку (показать заглушку)
     * block  -> элемент с картинкой внутри
     */
    const img = block.querySelector('img');

    // something-1.png => something.png
    img.src = img.src.slice(0, -6) + '.png';

    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'block';
    });
  }

  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });
  });
};

export default pictureSize;