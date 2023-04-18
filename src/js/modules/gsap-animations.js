import {
  Options,
} from './options.js';

import {
  headerMainNode,
  headerFixedNode,
} from './mobile-menu.js';

import {
  initHoverAnimation,
} from './animation-hover.js';

import {
  initShieldAnimation,
} from './animation-shield.js';

import {
  initAnimationInteger,
} from './animation-integers.js';

import {
  initSmoothScroll,
} from './smooth-scroll.js';


gsap.registerPlugin( ScrollSmoother );
const scrollSmother = ScrollSmoother.create( Options.SmoothScroll );
const gsapMatchMedia = gsap.matchMedia();
const headerLogoNode = document.querySelector( '.header-main__logo' );
const headerCbNode = document.querySelector( '.header-main__cb' );
const headerContactsNode = document.querySelector( '.header-main__contacts' );
const heroBlockNode = document.querySelector( '.hero' );
const heroShieldNode = document.querySelector( '.hero__shield' );

const initAnimation = () => {
  initSmoothScroll();
  initHoverAnimation();
  initShieldAnimation();
  initAnimationInteger( false );
};

gsapMatchMedia.add( '(max-width: 767px)', () => {
  gsap.to( headerCbNode, {
    y: '-90',
    opacity: '-100',
    scrollTrigger: {
      trigger: headerMainNode,
      start: 'top top',
      end: `+=${headerMainNode.scrollHeight}px top`,
      scrub: true,
    },
  } );
} );

gsapMatchMedia.add( '(max-width: 1199px)', () => {
  gsap.to( headerLogoNode, {
    y: '-90',
    opacity: '-100',
    scrollTrigger: {
      trigger: headerMainNode,
      start: 'top top',
      end: `+=${headerMainNode.scrollHeight}px top`,
      scrub: true,
    },
  } );
  gsap.to( headerContactsNode, {
    y: '-90',
    opacity: '-100',
    scrollTrigger: {
      trigger: headerMainNode,
      start: 'top top',
      end: `+=${headerMainNode.scrollHeight}px top`,
      scrub: true,
    },
  } );
} );

gsapMatchMedia.add( '(min-width: 1200px)', () => {
  gsap.to( headerMainNode, {
    yPercent: '-100',
    scrollTrigger: {
      trigger: headerMainNode,
      start: 'top top',
      end: `+=${headerMainNode.scrollHeight}px top`,
      scrub: true,
    },
  } );
  gsap.to( headerFixedNode, {
    yPercent: '100',
    scrollTrigger: {
      trigger: heroBlockNode,
      start: '+=300px top',
      end: 'bottom top',
      scrub: true,
    },
    onStart: () => {
      headerFixedNode.classList.add( 'header-fixed--active' );
    },
    onReverseComplete: () => {
      headerFixedNode.classList.remove( 'header-fixed--active' );
    },
  } );
} );

gsap.to( '#hero-corners-left', {
  yPercent: '35',
  scrollTrigger: {
    trigger: heroBlockNode,
    start: 'center center',
    end: '+=700px center',
    scrub: true,
  },
} );

gsap.to( '#hero-corners-right', {
  yPercent: '35',
  scrollTrigger: {
    trigger: heroBlockNode,
    start: 'top top',
    end: 'bottom center',
    scrub: true,
  },
} );

gsap.to( heroShieldNode, {
  yPercent: '20',
  opacity: '0',
  scrollTrigger: {
    trigger: heroBlockNode,
    start: 'top top',
    end: '+=80% top',
    scrub: true,
  },
} );

scrollSmother.effects( '#faq-corners-right', {
  speed: 0.8
} );
scrollSmother.effects( '#faq-corners-left', {
  speed: 0.8
} );
scrollSmother.effects( '.get-profit__ellipse', {
  speed: 1.2
} );
scrollSmother.effects( '.contacts__ellipse', {
  speed: 1.2
} );
scrollSmother.effects( '.get-profit__halftone', {
  speed: 1.1
} );

export {
  scrollSmother,
  gsapMatchMedia,
  initAnimation
};
