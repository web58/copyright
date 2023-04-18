const disableSubmitBtn = ( form ) => {
  form.querySelector( '[type="submit"]' ).setAttribute( 'disabled', 'disabled' );
};

const enableSubmitBtn = ( form ) => {
  form.querySelector( '[type="submit"]' ).removeAttribute( 'disabled' );
};

const isEscKey = ( evt ) => evt.key === 'Escape';

const iosChecker = () => {
  return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes( navigator.platform )
    // iPad on iOS 13 detection
    ||
    ( navigator.userAgent.includes( 'Mac' ) && 'ontouchend' in document );
};

const iosVhFix = () => {
  if ( !( !!window.MSInputMethodContext && !!document.documentMode ) ) {
    if ( iosChecker() ) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty( '--vh', `${vh}px` );

      window.addEventListener( 'resize', function() {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty( '--vh', `${vh}px` );
      } );
    }
  }
};

const setMaxHeight = ( nodeArr ) => {
  if ( !nodeArr ) return;
  let HEIGHTS = [];
  nodeArr.forEach( block => {
    HEIGHTS.push( block.scrollHeight );
  } );

  const setHight = () => {
    if ( window.matchMedia( '(min-width: 1200px)' ).matches ) {
      nodeArr.forEach( block => {
        block.style.height = `${Math.max( ...HEIGHTS )}px`;
      } );
    } else {
      nodeArr.forEach( block => {
        block.style.height = '';
      } );
    }
  };
  setHight();
  window.addEventListener( 'resize', setHight );
};

export {
  disableSubmitBtn,
  enableSubmitBtn,
  isEscKey,
  iosVhFix,
  setMaxHeight,
};
