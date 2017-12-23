//  Конструктор второго слайдера
export default class SliderSecond {

  constructor() {
    // values
    this.btnPrev = document.querySelector('.slider-left__btn');
    this.btnNext = document.querySelector('.slider-right__btn');
    this.leftSliderItem = document.querySelectorAll('.slider-left__item');
    this.rightSliderItem = document.querySelectorAll('.slider-right__item');
    this.navList = document.querySelector('.third-section-nav__list');
    this.navItem = document.querySelectorAll('.third-section-nav__item');
    this.count = 0;

    //  Запускаем функцию слайдера
    this._toggleSlider();

    //  События
    this._events();
  }


  _toggleSlider() {
    //  Удаляем активный класс у всех ссылок
    for(let j = 0; j < this.navItem.length; j++) {
      this.navItem[j].children[0].classList.remove('third-section-nav__link--active');
    }
    //  Смещаем слайды
    for(let i = 0; i < this.leftSliderItem.length; i++) {
      this.leftSliderItem[i].style.transform = `translateX(${this.count % this.leftSliderItem.length * -100}%)`;
      this.rightSliderItem[i].style.transform = `translateX(${this.count % this.leftSliderItem.length * 100}%)`;
      this.navItem[this.count].children[0].classList.add('third-section-nav__link--active');
    }
  }

  _events() {

    //  Перемещение слайда по клику вперед
    this.btnNext.addEventListener('click', () => {
      if(this.count < this.leftSliderItem.length - 1) {
        this.count++;
        this._toggleSlider();
      }
    });

    //  Перемещение слайда по клику назад
    this.btnPrev.addEventListener('click', () => {
      if(this.count > 0) {
        this.count--;
        this._toggleSlider();
      }
    });

    //  Перемещение по слайдеру кнопками меню
    this.navList.addEventListener('click', e => {
      if(e.target.tagName === 'A') {
        e.preventDefault();
        for(let i = 0; i < this.navItem.length; i++) {
          if(e.target.parentNode === this.navItem[i]) {
            this.count = i;
            this._toggleSlider();
          }
        }
      }
    });
  };
}
