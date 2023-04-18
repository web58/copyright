const calcEasingRatio = ( time, pow ) => 1 - Math.pow( ( 1 - time ), pow );

export const initHoverAnimation = () => {
  const btnNodes = document.querySelectorAll( '.btn' );
  const START_STATE_GRADIENT = '--x:0px; --y:0px;--ga:0%; --gb:0%; --gc:0%; --gd:0%;--ge:0%;';

  for ( let btnNode of btnNodes ) {
    const DURATION_IN = 300;
    const DURATION_OUT = 300;
    const EASING_IN = 1;
    const EASING_OUT = 1;
    let animationID;
    let startStateIn = 0;

    btnNode.style = START_STATE_GRADIENT;
    btnNode.classList.remove( 'btn--nojs' );
    btnNode.classList.add( 'btn--js-hover' );

    const textBtnNode = document.createElement( 'span' );
    textBtnNode.textContent = btnNode.textContent;
    textBtnNode.classList.add( 'btn__text' );
    btnNode.textContent = '';
    btnNode.appendChild( textBtnNode );

    const onMouseEnter = ( evt ) => {
      cancelAnimationFrame( animationID );

      let x = evt.offsetX;
      let y = evt.offsetY;
      const renderFrame = ( s ) => evt.target.style = `--x:${x}px; --y:${y}px; --ga:${s * 100}%; --gb:${s * 102}%; --gc:${s * 105}%; --gd:${s * 107}%; --ge:${s * 109}%`;

      const startTime = performance.now() - startStateIn * DURATION_IN;
      const animateFrameIn = ( interval ) => {
        let timeRatio = ( interval - startTime ) / DURATION_IN;
        if ( timeRatio > 1 ) {
          timeRatio = 1;
        }
        timeRatio = calcEasingRatio( timeRatio, EASING_IN );

        startStateIn = timeRatio;

        renderFrame( timeRatio );

        if ( timeRatio < 1 ) {
          animationID = requestAnimationFrame( animateFrameIn );
        }
      };
      animationID = requestAnimationFrame( animateFrameIn );

      evt.target.addEventListener( 'mouseleave', function( evt ) {
        cancelAnimationFrame( animationID );
        x = evt.offsetX;
        y = evt.offsetY;
        let startStateOut = startStateIn;

        const startTime = performance.now();
        const animateFrameOut = ( interval ) => {
          let timeRatio = startStateOut - ( interval - startTime ) / DURATION_OUT;
          if ( timeRatio > 1 ) {
            timeRatio = 1;
          }
          timeRatio = calcEasingRatio( timeRatio, EASING_OUT );

          startStateIn = timeRatio;

          renderFrame( timeRatio );

          if ( timeRatio > 0 ) {
            animationID = requestAnimationFrame( animateFrameOut );
          }
        };
        animationID = requestAnimationFrame( animateFrameOut );
      }, {
        once: true
      } );

    };

    btnNode.addEventListener( 'mouseenter', onMouseEnter );
  }
};
