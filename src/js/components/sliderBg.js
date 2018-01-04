  //  Конструктор слайдер фоновых изображений на главной странице
export default class SliderTop {

  constructor() {
    //  Переменные
    this.sliderList = document.querySelector('.slider__list');
    this.blockCount = document.querySelector('.first-section__count');
    this.count = 0;
    this.timeChangeBackground = 5000;
    this.imgArr = [
      'img/Photo-1.png',
      'img/Photo-2.png',
      'img/Photo-3.png',
      'img/Photo-4.jpg',
    ];

    //  Переменные svg
    this.line = document.querySelector('.svg circle');
    this.text = document.querySelector('.svg text');
    this.radius = this.line.getAttribute('r');
    this.lineLength = 2 * this.radius * Math.PI;

    //  Создаем динамически элементы списка (слайдера)
    this._createElementsSlider();

    //  Выбираем все созданные элементы
    this.sliderItem = document.querySelectorAll('.slider__item');

    //  Даем первому слайдеру opacity 1
    this.sliderItem[0].style.opacity = '1';

    //  Даем счетчик после загрузки страницы
    this._count();

    // Запускаем прогресс бар разбитый на 300 частей
    this._progress(180);

    //  Запускаем бэкграунд слайдер
    this._slideInterval();
  }

  _createElementsSlider() {
    for(let i = 0; i < this.imgArr.length; i++) {
      this.sliderItemCr = document.createElement('li');
      this.sliderItemCr.classList.add('slider__item');
      this.sliderItemCr.style.background = `#fff url(${this.imgArr[i]}) no-repeat center center`;
      this.sliderItemCr.style.backgroundSize = 'cover';
      this.sliderList.appendChild(this.sliderItemCr);
    };
  };

  //  функция вывода счетчика на страницу
  _count() {
    this.text.innerHTML = (`<tspan>${(this.count % this.sliderItem.length) + 1}</tspan>/${this.sliderItem.length}`);
  }

  //  функция заполнение круга прогресс бара
  _progress(parts) {
    this.line.setAttribute('stroke-dashoffset', `${this.lineLength / 4}`);
    for(let i = 0; i <= parts; i++) {
      setTimeout(() => {
        this.line.setAttribute('stroke-dasharray', `${this.lineLength / parts * i} ${this.lineLength - this.lineLength / parts * i}`);
      }, this.timeChangeBackground / parts * i);
    }
  }

  //  Интервал вывода счетчика на страницу
  _slideInterval(sec) {
    setInterval( () => {
      this._progress(180);
      this.sliderItem[this.count % this.sliderItem.length].style.opacity = `0`;

      this.count++;

      this.sliderItem[this.count % this.sliderItem.length].style.opacity = `1`;

      this._count();
    }, this.timeChangeBackground);
  };
}
