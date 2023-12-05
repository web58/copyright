import {
  iosVhFix,
  setMaxHeight
} from './modules/utils.js';

import {
  initMobileMenu,
} from './modules/mobile-menu.js';

import {
  validateForms,
  initFileInputHandler
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

import {
  initYTubeVideo,
} from './modules/yt-video.js';

import {
  initVideo,
} from './modules/about-video.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();
  setMaxHeight( document.querySelectorAll( '.for-whom__separate' ) );

  window.addEventListener( 'load', () => {
    initMobileMenu();
    initModal();
    validateForms();
    observeScrollTop();
    initAnimation();
    initYTubeVideo();
    initVideo();
    initFileInputHandler();
  } );
} );
