import {
  gsapMatchMedia,
} from './gsap-animations.js';

export const initVideo = () => {
  const videoBlockNode = document.querySelector( '.about-us' );
  if ( !videoBlockNode ) return;

  const showBtnNode = videoBlockNode.querySelector( '.about-us__show-btn' );
  const hideBtnNode = videoBlockNode.querySelector( '.about-us__hide-btn' );

  const onShowBtnClick = ( evt ) => {
    evt.preventDefault();
    if ( videoBlockNode.classList.contains( 'is-show' ) ) return;
    videoBlockNode.classList.add( 'is-show' );
  };
  const onHideBtnClick = ( evt ) => {
    evt.preventDefault();
    if ( !videoBlockNode.classList.contains( 'is-show' ) ) return;
    videoBlockNode.classList.remove( 'is-show' );
  };

  gsapMatchMedia.add( '(max-width: 1023px)', () => {
    videoBlockNode.classList.remove( 'is-show' );
  } );

  gsapMatchMedia.add( '(min-width: 1024px)', () => {
    videoBlockNode.classList.add( 'is-show' );
  } );

  showBtnNode.addEventListener( 'click', onShowBtnClick );
  hideBtnNode.addEventListener( 'click', onHideBtnClick );
};
