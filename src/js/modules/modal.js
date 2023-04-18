import {
  Options,
} from './options.js';

const simpleModal = new HystModal( Options.Modal );

const initModal = ( name = simpleModal, handler = 'data-hystmodal' ) => {
  name.config.linkAttributeName = handler;
  name.init();
  const hystmodalShadowNode = document.querySelector( '.hystmodal__shadow' );
  hystmodalShadowNode.setAttribute( 'aria-label', 'Закрыть модальное окно' );
};

export {
  simpleModal,
  initModal
};
