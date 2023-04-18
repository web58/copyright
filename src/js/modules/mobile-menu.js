import {
  isEscKey,
} from './utils.js';

const headerMainNode = document.querySelector( '.header-main' );
const headerFixedNode = document.querySelector( '.header-fixed' );
const mobileMenuNode = document.querySelector( '.mobile-menu' );
const MENU_ID = 'mobile-menu';
const BURGER_OPTIONS = {
  animationSpeed: 300,
  menuId: MENU_ID,
  isOpen: openMobileMenu,
  isClose: closeMobileMenu,
};
const siteBurger = new JustBurger( BURGER_OPTIONS );

function openMobileMenu() {
  document.documentElement.classList.add( 'is-open-menu' );
  mobileMenuNode.setAttribute( 'aria-hidden', 'false' );
  headerMainNode.classList.add( 'header-main--is-open-menu' );
}

function closeMobileMenu() {
  document.documentElement.classList.remove( 'is-open-menu' );
  mobileMenuNode.setAttribute( 'aria-hidden', 'true' );
  headerMainNode.classList.remove( 'header-main--is-open-menu' );
}

const initMobileMenu = () => {
  if ( !mobileMenuNode ) return;
  mobileMenuNode.id = MENU_ID;
  document.addEventListener( 'keydown', ( evt ) => {
    if ( isEscKey( evt ) && mobileMenuNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      siteBurger.close();
    }
  } );
};

gsap.matchMedia().add( '(min-width: 1200px)', () => {
  siteBurger.close();
} );

export {
  siteBurger,
  mobileMenuNode,
  headerMainNode,
  headerFixedNode,
  initMobileMenu
};
