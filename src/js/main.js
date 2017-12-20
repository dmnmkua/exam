window.addEventListener('DOMContentLoaded', init);

function init() {

  //  Конструктор слайдер фоновых изображений на главной странице
  function SliderTop() {
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
    ]

    // Переменные svg
    this.line = document.querySelector('.svg circle');
    this.text = document.querySelector('.svg text');
    this.radius = this.line.getAttribute('r');
    this.lineLength = 2 * this.radius * Math.PI;

    //   Создаем динамически элементы списка (слайдера)
    for(let i = 0; i < this.imgArr.length; i++) {
      this.sliderItemCr = document.createElement('li');
      this.sliderItemCr.classList.add('slider__item');
      this.sliderItemCr.style.background = `#fff url(${this.imgArr[i]}) no-repeat center center`;
      this.sliderItemCr.style.backgroundSize = 'cover';
      this.sliderList.appendChild(this.sliderItemCr);
    }

    this.sliderItem = document.querySelectorAll('.slider__item');

    this.sliderItem[0].style.opacity = '1';

    //  функция вывода счетчика на страницу
    this._count = () => {
      this.text.innerHTML = (`<tspan>${(this.count % this.sliderItem.length) + 1}</tspan>/${this.sliderItem.length}`);
    }

    //  функция заполнение круга прогресс бара
    this._progress = (parts) => {
      this.line.setAttribute('stroke-dashoffset', `${this.lineLength / 4}`);
      for(let i = 0; i <= parts; i++) {
        setTimeout(() => {
          this.line.setAttribute('stroke-dasharray', `${this.lineLength / parts * i} ${this.lineLength - this.lineLength / parts * i}`);
        }, this.timeChangeBackground / parts * i);
      }
    }

    //  Интервал вывода счетчика на страницу
    this._slideInterval = (sec) => {
      setInterval( () => {
        this._progress(300);
        this.sliderItem[this.count % this.sliderItem.length].style.opacity = `0`;

        this.count++;

        this.sliderItem[this.count % this.sliderItem.length].style.opacity = `1`;

        this._count();
      }, this.timeChangeBackground);
    };

    this._init = () => {
      this._count();
      this._progress(300);
      this._slideInterval();
    }

    this._init();
  }

  const sliderTop = new SliderTop();


  //  Конструктор кнопки поиска
  function BtnSearch() {
    this.btnSearch = document.querySelector('.search__icon');
    this.inputSearch = document.querySelector('.search__input');

    this._events = () => {

      this.btnSearch.addEventListener('click', () => {
        this.inputSearch.classList.toggle('search__input--show');
        this.inputSearch.focus();
      });

      this.inputSearch.addEventListener('keydown', e => {
        if(e.keyCode === 13) {
          this.inputSearch.classList.toggle('search__input--show');
          alert(this.inputSearch.value);
          this.inputSearch.value = '';
        }
        else if(e.keyCode === 27) {
          this.inputSearch.classList.toggle('search__input--show');
          this.inputSearch.value = '';
        }
        else if(!e.target) {
          this.inputSearch.classList.toggle('search__input--show');
        }
      })
    }

    this._init = () => {
      this._events();
    }

    this._init();
  }

  let btnSearch = new BtnSearch();


  //  Конструктор открытия меню
  function Menu() {
    this.menuBtn = document.querySelector('.nav__btn');
    this.menuList = document.querySelector('.nav__list');
    this.overflow = document.querySelector('.overflow');

    this._events = () => {
      // Открытие меню по клику на кнопку меню
      this.menuBtn.addEventListener('click', () => {
        this.menuList.classList.add('nav__list--show');
        this.overflow.classList.add('overflow--show');
      });

      // Скрытие меню и оверфлоу по клику на оверфлоу
      this.overflow.addEventListener('click', () => {
        this.menuList.classList.remove('nav__list--show');
        this.overflow.classList.remove('overflow--show');
      });

      // Скрытие меню и оверфлоу по клику на пункт меню
      this.menuList.addEventListener('click', e => {
        if(e.target.tagName === 'A') {
          this.menuList.classList.remove('nav__list--show');
          this.overflow.classList.remove('overflow--show');
        }
      })
    }

    this._init = () => {
      this._events();
    }

    this._init();
  }

  let menu = new Menu();


  //  Конструктор второго слайдера
  function SliderSecond() {
    this.btnPrev = document.querySelector('.slider-left__btn');
    this.btnNext = document.querySelector('.slider-right__btn');
    this.leftSliderItem = document.querySelectorAll('.slider-left__item');
    this.rightSliderItem = document.querySelectorAll('.slider-right__item');
    this.navList = document.querySelector('.third-section-nav__list');
    this.navItem = document.querySelectorAll('.third-section-nav__item');
    this.count = 0;

    this.toggleSlider = () => {
      for(let j = 0; j < this.navItem.length; j++) {
        this.navItem[j].children[0].classList.remove('third-section-nav__link--active');
      }
      for(let i = 0; i < this.leftSliderItem.length; i++) {
        this.leftSliderItem[i].style.transform = `translateX(${this.count % this.leftSliderItem.length * -100}%)`;
        this.rightSliderItem[i].style.transform = `translateX(${this.count % this.leftSliderItem.length * 100}%)`;
        this.navItem[this.count].children[0].classList.add('third-section-nav__link--active');
      }
    }

    this._events = () => {

      //  Перемещение слайда по клику вперед
      this.btnNext.addEventListener('click', () => {
        if(this.count < this.leftSliderItem.length - 1) {
          this.count++;
          this.toggleSlider();
        }
      });

      //  Перемещение слайда по клику назад
      this.btnPrev.addEventListener('click', () => {
        if(this.count > 0) {
          this.count--;
          this.toggleSlider();
        }
      });

      //  Перемещение по слайдеру кнопками меню
      this.navList.addEventListener('click', e => {
        if(e.target.tagName === 'A') {
          event.preventDefault();
          for(let i = 0; i < this.navItem.length; i++) {
            if(e.target.parentNode === this.navItem[i]) {
              this.count = i;
              this.toggleSlider();
            }
          }
        }
      })
    }

    this._init = () => {
      this._events();
    }

    this._init();
  }

  let sliderSecond = new SliderSecond();

}
