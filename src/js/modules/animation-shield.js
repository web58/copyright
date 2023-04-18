const shieldImageNodes = document.querySelectorAll( '.shield__cover' );
const isFirstElement = ( i ) => i === '0';

export const initShieldAnimation = () => {
  if ( shieldImageNodes.length !== 2 ) return;

  const onMouseEnter = ( evt ) => {
    if ( isFirstElement( evt.target.dataset.shield ) ) {
      shieldImageNodes[ 0 ].classList.remove( 'shield__cover--hide' );
      shieldImageNodes[ 1 ].classList.add( 'shield__cover--hide' );
    } else {
      shieldImageNodes[ 0 ].classList.add( 'shield__cover--hide' );
      shieldImageNodes[ 1 ].classList.remove( 'shield__cover--hide' );
    }
  };

  shieldImageNodes[ 1 ].classList.add( 'shield__cover--hide' );
  shieldImageNodes.forEach( ( img, index ) => {
    img.dataset.shield = index;
    img.addEventListener( 'mouseenter', onMouseEnter );
  } );
};
