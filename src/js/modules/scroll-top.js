import {
  Options,
} from './options.js';

export const observeScrollTop = () => {
  const scrollTopNode = document.querySelector( '#scroll-top' );
  const targetNode = document.querySelector( '#site-top' );
  if ( !scrollTopNode || !targetNode ) return;
  const cb = ( entries ) => {
    entries.forEach( ( entry ) => {
      if ( !entry.isIntersecting ) {
        scrollTopNode.classList.add( 'scroll-top--show' );
      } else {
        scrollTopNode.classList.remove( 'scroll-top--show' );
      }
    } );
  };
  new IntersectionObserver( cb, Options.Observer.ScrollTop ).observe( targetNode );
};
