export default class CardsSlider {
  constructor(btnLeft, btnRight, cardSlider, cardsSlider) {
    this.btnLeft = btnLeft;
    this.btnRight = btnRight;
    this.cardSlider = cardSlider;
    this.cardsSlider = cardsSlider;
    this.countSlider = 0;

    this._btnHide();
    this._events();
  }

  _events() {
    this.btnLeft.addEventListener('click', e => {
      if(this.countSlider > 0) {
        this.countSlider--;
        this.cardsSlider.style.transform = `translateX(-${this.countSlider * 100}%)`;
        this._btnHide();
      }
    });
    this.btnRight.addEventListener('click', e => {
      if(this.countSlider < this.cardSlider.length - 1) {
        this.countSlider++;
        this.cardsSlider.style.transform = `translateX(-${this.countSlider * 100}%)`;
        this._btnHide();
      }
    });
    window.addEventListener('resize', e => {
      if(document.documentElement.clientWidth > 1000) {
        this.cardsSlider.style.transform = `translateX(0)`;
        this.btnLeft.style.display = 'none';
        this.btnRight.style.display = 'none';
      }
      else {
        this.cardsSlider.style.transform = `translateX(-${this.countSlider * 100}%)`;
        this._btnHide();
      }
    })
  }

  _btnHide() {
    if(document.documentElement.clientWidth < 1000) {
      if(this.countSlider === 0) {
        this.btnLeft.style.display = 'none';
      }
      else {
        this.btnLeft.style.display = 'block';
      }
      if(this.countSlider === this.cardSlider.length - 1) {
        this.btnRight.style.display = 'none';
      }
      else {
        this.btnRight.style.display = 'block';
      }
    }
    else {
      this.btnLeft.style.display = 'none';
      this.btnRight.style.display = 'none';
    }
  }
}
