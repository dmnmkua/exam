window.addEventListener('DOMContentLoaded', init);

window.addEventListener('load', preloader);

// Preloader
function preloader() {
  const preloader = document.querySelector('.preloader');

  preloader.classList.add('preloader--hide');
}


//  Import classes from components
import BtnSearch from './components/btnSearch';
import Form from './components/forms';
import Menu from './components/menu';
import SliderSecond from './components/secondSlider';
import SliderTop from './components/sliderBg';

//  Main function
function init() {
  const btnSearch = new BtnSearch;
  const form = new Form;
  const menu = new Menu;
  const sliderSecond = new SliderSecond;
  const sliderTop = new SliderTop;
}


// //  main function
// function init() {
//
//   //  background slider with count on the first slider
//   const sliderTop = new SliderTop();
//
//   //  button for the show input search
//   const btnSearch = new BtnSearch();
//
//   //  button for the open menu on small size screen
//   const menu = new Menu();
//
//   //  slider on the third section
//   const sliderSecond = new SliderSecond();
//
//   //  forms
//   const form = new Form();
// };
//
//
//
// class SliderTop {
//
//   constructor() {
//     //  Переменные
//     this.sliderList = document.querySelector('.slider__list');
//     this.blockCount = document.querySelector('.first-section__count');
//     this.count = 0;
//     this.timeChangeBackground = 5000;
//     this.imgArr = [
//       'img/Photo-1.png',
//       'img/Photo-2.png',
//       'img/Photo-3.png',
//       'img/Photo-4.jpg',
//     ];
//
//     //  Переменные svg
//     this.line = document.querySelector('.svg circle');
//     this.text = document.querySelector('.svg text');
//     this.radius = this.line.getAttribute('r');
//     this.lineLength = 2 * this.radius * Math.PI;
//
//     //  Создаем динамически элементы списка (слайдера)
//     this._createElementsSlider();
//
//     //  Выбираем все созданные элементы
//     this.sliderItem = document.querySelectorAll('.slider__item');
//
//     //  Даем первому слайдеру opacity 1
//     this.sliderItem[0].style.opacity = '1';
//
//     //  Даем счетчик после загрузки страницы
//     this._count();
//
//     // Запускаем прогресс бар разбитый на 300 частей
//     this._progress(120);
//
//     //  Запускаем бэкграунд слайдер
//     this._slideInterval();
//   }
//
//   _createElementsSlider() {
//     for(let i = 0; i < this.imgArr.length; i++) {
//       this.sliderItemCr = document.createElement('li');
//       this.sliderItemCr.classList.add('slider__item');
//       this.sliderItemCr.style.background = `#fff url(${this.imgArr[i]}) no-repeat center center`;
//       this.sliderItemCr.style.backgroundSize = 'cover';
//       this.sliderList.appendChild(this.sliderItemCr);
//     };
//   };
//
//
//   //  функция вывода счетчика на страницу
//   _count() {
//     this.text.innerHTML = (`<tspan>${(this.count % this.sliderItem.length) + 1}</tspan>/${this.sliderItem.length}`);
//   }
//
//   //  функция заполнение круга прогресс бара
//   _progress(parts) {
//     this.line.setAttribute('stroke-dashoffset', `${this.lineLength / 4}`);
//     for(let i = 0; i <= parts; i++) {
//       setTimeout(() => {
//         this.line.setAttribute('stroke-dasharray', `${this.lineLength / parts * i} ${this.lineLength - this.lineLength / parts * i}`);
//       }, this.timeChangeBackground / parts * i);
//     }
//   }
//
//   //  Интервал вывода счетчика на страницу
//   _slideInterval(sec) {
//     setInterval( () => {
//       this._progress(120);
//       this.sliderItem[this.count % this.sliderItem.length].style.opacity = `0`;
//
//       this.count++;
//
//       this.sliderItem[this.count % this.sliderItem.length].style.opacity = `1`;
//
//       this._count();
//     }, this.timeChangeBackground);
//   };
// }
//
// class BtnSearch {
//
//   constructor() {
//     // values DOM
//     this.btnSearch = document.querySelector('.search__icon');
//     this.inputSearch = document.querySelector('.search__input');
//
//     // events
//     this._events();
//   }
//
//   _events() {
//
//     //  show search input
//     this.btnSearch.addEventListener('click', () => {
//       this.inputSearch.classList.toggle('search__input--show');
//       this.inputSearch.focus();
//     });
//
//     //  usage search input
//     this.inputSearch.addEventListener('keydown', e => {
//       if(e.keyCode === 13) {
//         this.inputSearch.classList.toggle('search__input--show');
//         alert(this.inputSearch.value);
//         this.inputSearch.value = '';
//       }
//       else if(e.keyCode === 27) {
//         this.inputSearch.classList.toggle('search__input--show');
//         this.inputSearch.value = '';
//       }
//       else if(!e.target) {
//         this.inputSearch.classList.toggle('search__input--show');
//       }
//     });
//
//     document.body.addEventListener('click', e => {
//       if(e.target !== this.inputSearch && e.target !== this.btnSearch && this.inputSearch.classList.contains('search__input--show')) {
//         this.inputSearch.classList.remove('search__input--show');
//       }
//     })
//
//   }
// }
//
// class Menu {
//
//   constructor() {
//
//     // values DOM
//     this.menuBtn = document.querySelector('.nav__btn');
//     this.menuList = document.querySelector('.nav__list');
//     this.overlay = document.querySelector('.overlay');
//
//     //  events
//     this._events();
//   }
//
//   _events() {
//     // Открытие меню по клику на кнопку меню
//     this.menuBtn.addEventListener('click', () => {
//       this.menuList.classList.add('nav__list--show');
//       this.overlay.classList.add('overlay--show');
//     });
//
//     // Скрытие меню и оверфлоу по клику на оверфлоу
//     this.overlay.addEventListener('click', () => {
//       this.menuList.classList.remove('nav__list--show');
//       this.overlay.classList.remove('overlay--show');
//     });
//
//     // Скрытие меню и оверфлоу по клику на пункт меню
//     this.menuList.addEventListener('click', e => {
//       if(e.target.tagName === 'A' && e.target.classList.contains('nav__link--trs')) {
//         this.menuList.classList.remove('nav__list--show');
//         this.overlay.classList.remove('overlay--show');
//       };
//       if(e.target.tagName === 'A' && (e.target.classList.contains('nav__link--sign-in') || e.target.classList.contains('nav__link--sign-up'))) {
//         this.menuList.classList.remove('nav__list--show');
//       };
//
//     });
//   };
// };
//
// class SliderSecond {
//
//   constructor() {
//     // values
//     this.btnPrev = document.querySelector('.slider-left__btn');
//     this.btnNext = document.querySelector('.slider-right__btn');
//     this.leftSliderItem = document.querySelectorAll('.slider-left__item');
//     this.rightSliderItem = document.querySelectorAll('.slider-right__item');
//     this.navList = document.querySelector('.third-section-nav__list');
//     this.navItem = document.querySelectorAll('.third-section-nav__item');
//     this.count = 0;
//
//     //  Запускаем функцию слайдера
//     this._toggleSlider();
//
//     //  События
//     this._events();
//   }
//
//
//   _toggleSlider() {
//     //  Удаляем активный класс у всех ссылок
//     for(let j = 0; j < this.navItem.length; j++) {
//       this.navItem[j].children[0].classList.remove('third-section-nav__link--active');
//     }
//     //  Смещаем слайды
//     for(let i = 0; i < this.leftSliderItem.length; i++) {
//       this.leftSliderItem[i].style.transform = `translateX(${this.count % this.leftSliderItem.length * -100}%)`;
//       this.rightSliderItem[i].style.transform = `translateX(${this.count % this.leftSliderItem.length * 100}%)`;
//       this.navItem[this.count].children[0].classList.add('third-section-nav__link--active');
//     }
//   }
//
//   _events() {
//
//     //  Перемещение слайда по клику вперед
//     this.btnNext.addEventListener('click', () => {
//       if(this.count < this.leftSliderItem.length - 1) {
//         this.count++;
//         this._toggleSlider();
//       }
//     });
//
//     //  Перемещение слайда по клику назад
//     this.btnPrev.addEventListener('click', () => {
//       if(this.count > 0) {
//         this.count--;
//         this._toggleSlider();
//       }
//     });
//
//     //  Перемещение по слайдеру кнопками меню
//     this.navList.addEventListener('click', e => {
//       if(e.target.tagName === 'A') {
//         event.preventDefault();
//         for(let i = 0; i < this.navItem.length; i++) {
//           if(e.target.parentNode === this.navItem[i]) {
//             this.count = i;
//             this._toggleSlider();
//           }
//         }
//       }
//     });
//   };
// }
//
// class Form {
//
//   constructor() {
//     this.btnSignIn = document.querySelector('.btn--sign-in');
//     this.navLinkSignIn = document.querySelector('.nav__link--sign-in');
//     this.formSignIn = document.querySelector('.form--sign-in');
//     this.btnSignUp = document.querySelector('.btn--sign-up');
//     this.navLinkSignUp = document.querySelector('.nav__link--sign-up');
//     this.formSignUp = document.querySelector('.form--sign-up');
//     this.input = document.querySelectorAll('.input');
//     this.inputText = document.querySelectorAll('.input-text');
//     this.overlay = document.querySelector('.overlay');
//
//
//     this._events();
//   }
//
//
//   _events() {
//       this.btnSignIn.addEventListener('click', () => {
//         this.formSignIn.classList.add('form--sign-in-show');
//         this.overlay.classList.add('overlay--show');
//       });
//
//       this.navLinkSignIn.addEventListener('click', () => {
//         this.formSignIn.classList.add('form--sign-in-show');
//         this.overlay.classList.add('overlay--show');
//       });
//
//       this.btnSignUp.addEventListener('click', () => {
//         this.formSignUp.classList.add('form--sign-up-show');
//         this.overlay.classList.add('overlay--show');
//       });
//
//       this.navLinkSignUp.addEventListener('click', () => {
//         this.formSignUp.classList.add('form--sign-up-show');
//         this.overlay.classList.add('overlay--show');
//       });
//
//
//     this.overlay.addEventListener('click', () => {
//       if(this.formSignIn.classList.contains('form--sign-in-show')) {
//         this.formSignIn.classList.remove('form--sign-in-show');
//       };
//       if(this.formSignUp.classList.contains('form--sign-up-show')) {
//         this.formSignUp.classList.remove('form--sign-up-show');
//       };
//     });
//
//     for(let i = 0; i < this.input.length; i++) {
//       //  Если поле в фокусе, плейсхолдер уходит вверх
//       this.input[i].addEventListener('focus', () => {
//         this.inputText[i].classList.add('login-text--full');
//       });
//
//       //  Если поле пустое, плейсхолдер возвращается обратно
//       this.input[i].addEventListener('blur', () => {
//         if(this.input[i].value === "") {
//           this.inputText[i].classList.remove('login-text--full');
//         }
//       });
//
//     }
//
//   }
// }
