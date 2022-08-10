const accordion = (triggersSelector) => {
  /**
   * МОДУЛЬ АККАРДИОН
   *
   * triggersSelector -> селектор по клину на который открывать скрытый контент
   */

  const btns = document.querySelectorAll(triggersSelector);

  btns.forEach(btn => {
    btn.addEventListener('click', function() {

      btns.forEach(btn => {

        if(this === btn){
          this.classList.toggle('active-style');
          this.nextElementSibling.classList.toggle('active-content');
        }else {
          btn.classList.remove('active-style')
          btn.nextElementSibling.classList.remove('active-content');
        }

      })

    });
  });

};

export default accordion;