const COUNTER_ID = 93273407;

export const analyticFn = ( form ) => {
  let target;

  switch ( form.id ) {
    case 'callback-form':
      target = 'submit_call';
      break;

    case 'request-form':
      target = 'submit_request';
      break;

    case 'contacts-form':
      target = 'submit_writeUs';
      break;

    default:
      return;
  }
  if ( !target ) return;
  ym( COUNTER_ID, 'reachGoal', target );
};
