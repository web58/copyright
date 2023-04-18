export const initAnimationInteger = ( isRestart = true ) => {
  const animateNodes = document.querySelectorAll( '.animate-counter' );
  if ( animateNodes.length < 1 ) return;
  const cb = ( entries ) => {
    entries.forEach( ( entry ) => {
      if ( entry.isIntersecting ) {
        new AnimatedIcrease( entry.target ).run();
      } else {
        if ( isRestart ) entry.target.textContent = '';
      }
    } );
  };

  animateNodes.forEach( element => {
    element.textContent = '';
    new IntersectionObserver( cb, {
      rootMargin: '0px',
      threshold: 1,
    } ).observe( element );
  } );
};
