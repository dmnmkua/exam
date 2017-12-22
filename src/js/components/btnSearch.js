//  Конструктор кнопки поиска
export default class BtnSearch {

	constructor() {
		// values DOM
    this.btnSearch = document.querySelector('.search__icon');
    this.inputSearch = document.querySelector('.search__input');

    // events
    this._events();
	}


  _events() {

  	//	show search input
    this.btnSearch.addEventListener('click', () => {
      this.inputSearch.classList.toggle('search__input--show');
      this.inputSearch.focus();
    });

    //	usage search input
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
    });

    document.body.addEventListener('click', e => {
      if(e.target !== this.inputSearch && e.target !== this.btnSearch && this.inputSearch.classList.contains('search__input--show')) {
        this.inputSearch.classList.remove('search__input--show');
      }
    })

  }
}