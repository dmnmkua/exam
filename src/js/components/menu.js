//  Конструктор открытия меню
export default class Menu {

	constructor() {

		// values DOM
		this.menuBtn = document.querySelector('.nav__btn');
    this.menuList = document.querySelector('.nav__list');
    this.overlay = document.querySelector('.overlay');

    //	events
    this._events();
	}

  _events() {
    // Открытие меню по клику на кнопку меню
    this.menuBtn.addEventListener('click', () => {
      this.menuList.classList.add('nav__list--show');
      this.overlay.classList.add('overlay--show');
    });

    // Скрытие меню и оверфлоу по клику на оверфлоу
    this.overlay.addEventListener('click', () => {
      this.menuList.classList.remove('nav__list--show');
      this.overlay.classList.remove('overlay--show');
    });

    // Скрытие меню и оверфлоу по клику на пункт меню
    this.menuList.addEventListener('click', e => {
      if(e.target.tagName === 'A') {
        this.menuList.classList.remove('nav__list--show');
        this.overlay.classList.remove('overlay--show');
      };
    });
  };
};