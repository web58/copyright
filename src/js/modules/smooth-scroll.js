import {
  scrollSmother,
} from './gsap-animations.js';

import {
  siteBurger,
  mobileMenuNode
} from './mobile-menu.js';

export const initSmoothScroll = () => {
  const links = document.querySelectorAll( 'a[href*="#"]:not(a[href="#"])' );
  links.forEach( link => {
    link.addEventListener( 'click', ( evt ) => {
      evt.preventDefault();
      if ( mobileMenuNode.getAttribute( 'aria-hidden' ) === 'false' ) {
        siteBurger.close();
      }
      gsap.to( scrollSmother, {
        scrollTop: scrollSmother.offset( link.getAttribute( 'href' ), 'top top' ),
        duration: 0.8,
      } );
    } );
  } );
};
