export default class Accordion {
  constructor() {
    this.about = document.querySelector('.about');
    this.aboutBlock = document.querySelectorAll('.about__block');
    this.aboutTitle = document.querySelectorAll('.about__title');
    this.aboutList = document.querySelectorAll('.about__list');

    this._events();
  }

  _events() {
    this.about.addEventListener('click', ev => {
      // console.log(ev.target);
      // console.log(this.aboutTitle[0]);
      // console.log(this.aboutBlock.length);
      for(let i = 0; i < this.aboutBlock.length; i++) {
        if(ev.target === this.aboutTitle[i]) {
          this._reset();
          this.aboutList[i].classList.add('about__list--show');
        }
      }
    })
  }

  _reset() {
    for(let i = 0; i < this.aboutBlock.length; i++) {
      if(this.aboutList[i].classList.contains('about__list--show')) {
        this.aboutList[i].classList.remove('about__list--show');
      }
    }
  }
}
