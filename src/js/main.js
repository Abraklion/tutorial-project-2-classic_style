import modals from './modules/modals';
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import showMoreStyles from "./modules/showMoreStyles";
import showMoreStylesDb from "./modules/showMoreStylesDb";
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();

  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical');

  forms();

  // showMoreStyles('.button-styles', '.styles-2');
  showMoreStylesDb('.button-styles', '#styles .row');

  calc('#size', '#material', '#options', '.promocode', '.calc-price');

  filter();

  pictureSize('.sizes-block');
});