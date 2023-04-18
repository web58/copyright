import {
  Options,
} from './options.js';

import {
  disableSubmitBtn,
  enableSubmitBtn,
} from './utils.js';

import {
  simpleModal,
} from './modal.js';

const getFormatData = ( evt ) => {
  const formData = new FormData( evt.target );
  const formObject = {};
  if ( Options.RequestOptions.SendJSON ) {
    formData.forEach( ( value, key ) => {
      formObject[ key ] = value;
    } );
  }
  return Options.RequestOptions.SendJSON ? JSON.stringify( formObject ) : formData;
};

const setUtmFields = ( evt ) => {
  const utmNode = evt.target.querySelector( 'input[data-utm]' );
  if ( !utmNode ) return;
  if ( window.location.search ) {
    utmNode.setAttribute( 'value', decodeURI( window.location.search ).substring( 1 ) );
  } else {
    utmNode.setAttribute( 'value', 'Отсутствуют' );
  }
};

export const sendData = ( evt ) => {
  disableSubmitBtn( evt.target );
  setUtmFields( evt );
  fetch( Options.RequestOptions.HandlerURL, {
      method: Options.RequestOptions.MethodPost,
      body: getFormatData( evt )
    } )
    .then( ( data ) => {
      if ( data.ok ) {
        simpleModal.open( '#send-ok-modal' );
        evt.target.reset();
      } else {
        simpleModal.open( '#send-error-modal' );
      }
    } )
    .catch( () => {
      simpleModal.open( '#send-error-modal' );
    } )
    .finally( () => {
      enableSubmitBtn( evt.target );
    } );
};
