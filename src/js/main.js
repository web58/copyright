import {
  iosVhFix,
  setMaxHeight
} from './modules/utils.js';

import {
  initMobileMenu,
} from './modules/mobile-menu.js';

import {
  validateForms
} from './modules/validate.js';

import {
  initModal,
} from './modules/modal.js';

import {
  observeScrollTop
} from './modules/scroll-top.js';

import {
  initAnimation,
} from './modules/gsap-animations.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();
  setMaxHeight( document.querySelectorAll( '.for-whom__separate' ) );

  window.addEventListener( 'load', () => {
    initMobileMenu();
    initModal();
    validateForms();
    observeScrollTop();
    initAnimation();
  } );
} );
