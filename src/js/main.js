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
import CardsSlider from './components/cardsSlider';
import Accordion from './components/accordion';

//  Main function
function init() {
  const tBtnLeft = document.querySelector('.btn-control--top-left');
  const tBtnRight = document.querySelector('.btn-control--top-right');
  const tCardSlider = document.querySelectorAll('.card-top');
  const tCardsSlider = document.querySelector('.cards-top');
  const bBtnLeft = document.querySelector('.btn-control--bottom-left');
  const bBtnRight = document.querySelector('.btn-control--bottom-right');
  const bCardSlider = document.querySelectorAll('.card-bottom');
  const bCardsSlider = document.querySelector('.cards-bottom');


  const btnSearch = new BtnSearch;
  const form = new Form;
  const menu = new Menu;
  const sliderSecond = new SliderSecond;
  const sliderTop = new SliderTop;
  const topCardsSlider = new CardsSlider(tBtnLeft, tBtnRight, tCardSlider, tCardsSlider);
  const bottomCardsSlider = new CardsSlider(bBtnLeft, bBtnRight, bCardSlider, bCardsSlider);
  const accordion = new Accordion;
}
