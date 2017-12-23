'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.addEventListener('DOMContentLoaded', init);

window.addEventListener('load', preloader);

// Preloader
function preloader() {
  var preloader = document.querySelector('.preloader');

  preloader.classList.add('preloader--hide');
}

//  main function
function init() {

  //  background slider with count on the first slider
  var sliderTop = new SliderTop();

  //  button for the show input search
  var btnSearch = new BtnSearch();

  //  button for the open menu on small size screen
  var menu = new Menu();

  //  slider on the third section
  var sliderSecond = new SliderSecond();

  //  forms
  var form = new Form();
};

var SliderTop = function () {
  function SliderTop() {
    _classCallCheck(this, SliderTop);

    //  Переменные
    this.sliderList = document.querySelector('.slider__list');
    this.blockCount = document.querySelector('.first-section__count');
    this.count = 0;
    this.timeChangeBackground = 5000;
    this.imgArr = ['img/Photo-1.png', 'img/Photo-2.png', 'img/Photo-3.png', 'img/Photo-4.jpg'];

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
    this._progress(120);

    //  Запускаем бэкграунд слайдер
    this._slideInterval();
  }

  _createClass(SliderTop, [{
    key: '_createElementsSlider',
    value: function _createElementsSlider() {
      for (var i = 0; i < this.imgArr.length; i++) {
        this.sliderItemCr = document.createElement('li');
        this.sliderItemCr.classList.add('slider__item');
        this.sliderItemCr.style.background = '#fff url(' + this.imgArr[i] + ') no-repeat center center';
        this.sliderItemCr.style.backgroundSize = 'cover';
        this.sliderList.appendChild(this.sliderItemCr);
      };
    }
  }, {
    key: '_count',


    //  функция вывода счетчика на страницу
    value: function _count() {
      this.text.innerHTML = '<tspan>' + (this.count % this.sliderItem.length + 1) + '</tspan>/' + this.sliderItem.length;
    }

    //  функция заполнение круга прогресс бара

  }, {
    key: '_progress',
    value: function _progress(parts) {
      var _this = this;

      this.line.setAttribute('stroke-dashoffset', '' + this.lineLength / 4);

      var _loop = function _loop(i) {
        setTimeout(function () {
          _this.line.setAttribute('stroke-dasharray', _this.lineLength / parts * i + ' ' + (_this.lineLength - _this.lineLength / parts * i));
        }, _this.timeChangeBackground / parts * i);
      };

      for (var i = 0; i <= parts; i++) {
        _loop(i);
      }
    }

    //  Интервал вывода счетчика на страницу

  }, {
    key: '_slideInterval',
    value: function _slideInterval(sec) {
      var _this2 = this;

      setInterval(function () {
        _this2._progress(120);
        _this2.sliderItem[_this2.count % _this2.sliderItem.length].style.opacity = '0';

        _this2.count++;

        _this2.sliderItem[_this2.count % _this2.sliderItem.length].style.opacity = '1';

        _this2._count();
      }, this.timeChangeBackground);
    }
  }]);

  return SliderTop;
}();

var BtnSearch = function () {
  function BtnSearch() {
    _classCallCheck(this, BtnSearch);

    // values DOM
    this.btnSearch = document.querySelector('.search__icon');
    this.inputSearch = document.querySelector('.search__input');

    // events
    this._events();
  }

  _createClass(BtnSearch, [{
    key: '_events',
    value: function _events() {
      var _this3 = this;

      //  show search input
      this.btnSearch.addEventListener('click', function () {
        _this3.inputSearch.classList.toggle('search__input--show');
        _this3.inputSearch.focus();
      });

      //  usage search input
      this.inputSearch.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
          _this3.inputSearch.classList.toggle('search__input--show');
          alert(_this3.inputSearch.value);
          _this3.inputSearch.value = '';
        } else if (e.keyCode === 27) {
          _this3.inputSearch.classList.toggle('search__input--show');
          _this3.inputSearch.value = '';
        } else if (!e.target) {
          _this3.inputSearch.classList.toggle('search__input--show');
        }
      });

      document.body.addEventListener('click', function (e) {
        if (e.target !== _this3.inputSearch && e.target !== _this3.btnSearch && _this3.inputSearch.classList.contains('search__input--show')) {
          _this3.inputSearch.classList.remove('search__input--show');
        }
      });
    }
  }]);

  return BtnSearch;
}();

var Menu = function () {
  function Menu() {
    _classCallCheck(this, Menu);

    // values DOM
    this.menuBtn = document.querySelector('.nav__btn');
    this.menuList = document.querySelector('.nav__list');
    this.overlay = document.querySelector('.overlay');

    //  events
    this._events();
  }

  _createClass(Menu, [{
    key: '_events',
    value: function _events() {
      var _this4 = this;

      // Открытие меню по клику на кнопку меню
      this.menuBtn.addEventListener('click', function () {
        _this4.menuList.classList.add('nav__list--show');
        _this4.overlay.classList.add('overlay--show');
      });

      // Скрытие меню и оверфлоу по клику на оверфлоу
      this.overlay.addEventListener('click', function () {
        _this4.menuList.classList.remove('nav__list--show');
        _this4.overlay.classList.remove('overlay--show');
      });

      // Скрытие меню и оверфлоу по клику на пункт меню
      this.menuList.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && e.target.classList.contains('nav__link--trs')) {
          _this4.menuList.classList.remove('nav__list--show');
          _this4.overlay.classList.remove('overlay--show');
        };
        if (e.target.tagName === 'A' && (e.target.classList.contains('nav__link--sign-in') || e.target.classList.contains('nav__link--sign-up'))) {
          _this4.menuList.classList.remove('nav__list--show');
        };
      });
    }
  }]);

  return Menu;
}();

;

var SliderSecond = function () {
  function SliderSecond() {
    _classCallCheck(this, SliderSecond);

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

  _createClass(SliderSecond, [{
    key: '_toggleSlider',
    value: function _toggleSlider() {
      //  Удаляем активный класс у всех ссылок
      for (var j = 0; j < this.navItem.length; j++) {
        this.navItem[j].children[0].classList.remove('third-section-nav__link--active');
      }
      //  Смещаем слайды
      for (var i = 0; i < this.leftSliderItem.length; i++) {
        this.leftSliderItem[i].style.transform = 'translateX(' + this.count % this.leftSliderItem.length * -100 + '%)';
        this.rightSliderItem[i].style.transform = 'translateX(' + this.count % this.leftSliderItem.length * 100 + '%)';
        this.navItem[this.count].children[0].classList.add('third-section-nav__link--active');
      }
    }
  }, {
    key: '_events',
    value: function _events() {
      var _this5 = this;

      //  Перемещение слайда по клику вперед
      this.btnNext.addEventListener('click', function () {
        if (_this5.count < _this5.leftSliderItem.length - 1) {
          _this5.count++;
          _this5._toggleSlider();
        }
      });

      //  Перемещение слайда по клику назад
      this.btnPrev.addEventListener('click', function () {
        if (_this5.count > 0) {
          _this5.count--;
          _this5._toggleSlider();
        }
      });

      //  Перемещение по слайдеру кнопками меню
      this.navList.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          event.preventDefault();
          for (var i = 0; i < _this5.navItem.length; i++) {
            if (e.target.parentNode === _this5.navItem[i]) {
              _this5.count = i;
              _this5._toggleSlider();
            }
          }
        }
      });
    }
  }]);

  return SliderSecond;
}();

var Form = function () {
  function Form() {
    _classCallCheck(this, Form);

    this.btnSignIn = document.querySelector('.btn--sign-in');
    this.navLinkSignIn = document.querySelector('.nav__link--sign-in');
    this.formSignIn = document.querySelector('.form--sign-in');
    this.btnSignUp = document.querySelector('.btn--sign-up');
    this.navLinkSignUp = document.querySelector('.nav__link--sign-up');
    this.formSignUp = document.querySelector('.form--sign-up');
    this.input = document.querySelectorAll('.input');
    this.inputText = document.querySelectorAll('.input-text');
    this.overlay = document.querySelector('.overlay');

    this._events();
  }

  _createClass(Form, [{
    key: '_events',
    value: function _events() {
      var _this6 = this;

      this.btnSignIn.addEventListener('click', function () {
        _this6.formSignIn.classList.add('form--sign-in-show');
        _this6.overlay.classList.add('overlay--show');
      });

      this.navLinkSignIn.addEventListener('click', function () {
        _this6.formSignIn.classList.add('form--sign-in-show');
        _this6.overlay.classList.add('overlay--show');
      });

      this.btnSignUp.addEventListener('click', function () {
        _this6.formSignUp.classList.add('form--sign-up-show');
        _this6.overlay.classList.add('overlay--show');
      });

      this.navLinkSignUp.addEventListener('click', function () {
        _this6.formSignUp.classList.add('form--sign-up-show');
        _this6.overlay.classList.add('overlay--show');
      });

      this.overlay.addEventListener('click', function () {
        if (_this6.formSignIn.classList.contains('form--sign-in-show')) {
          _this6.formSignIn.classList.remove('form--sign-in-show');
        };
        if (_this6.formSignUp.classList.contains('form--sign-up-show')) {
          _this6.formSignUp.classList.remove('form--sign-up-show');
        };
      });

      var _loop2 = function _loop2(i) {
        //  Если поле в фокусе, плейсхолдер уходит вверх
        _this6.input[i].addEventListener('focus', function () {
          _this6.inputText[i].classList.add('login-text--full');
        });

        //  Если поле пустое, плейсхолдер возвращается обратно
        _this6.input[i].addEventListener('blur', function () {
          if (_this6.input[i].value === "") {
            _this6.inputText[i].classList.remove('login-text--full');
          }
        });
      };

      for (var i = 0; i < this.input.length; i++) {
        _loop2(i);
      }
    }
  }]);

  return Form;
}();