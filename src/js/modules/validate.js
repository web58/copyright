import {
  Options,
} from './options.js';

import {
  sendData,
} from './send-data.js';

import {
  analyticFn
} from './analytic.js';

const initFileInputHandler = () => {
  const inputNode = document.querySelectorAll( 'input[type="file"]' );
  inputNode.forEach( ( input ) => {
    input.addEventListener( 'change', function() {
      const fileName = ( this.files[ 0 ].name ).toString();
      ( fileName.length > 0 ) ? this.nextElementSibling.textContent = fileName:
        this.nextElementSibling.textContent = 'файл_без_названия';
    } );
  } );
};

const validateForms = () => {
  const forms = document.querySelectorAll( 'form[data-validate]' );

  if ( forms.length < 1 ) return;

  forms.forEach( ( form ) => {
    const formID = `#${form.id}`;
    const validationRules = new JustValidate( formID, Options.ValidationErrors );
    const requiredFields = document.querySelectorAll( `${formID} [required]` );
    new JustPhoneMask( Options.Mask );

    if ( requiredFields.length < 1 ) return;

    requiredFields.forEach( ( input ) => {
      switch ( input.dataset.validate ) {
        case 'text':
          validationRules.addField( `${formID} [data-validate="text"]`, [ {
            rule: 'required',
            value: true,
            errorMessage: 'Поле обязательно для заполнения'
          }, ] );
          break;
        case 'email':
          validationRules.addField( `${formID} [data-validate="email"]`, [ {
              rule: 'required',
              value: true,
              errorMessage: 'Поле обязательно для заполнения'
            },
            {
              rule: 'email',
              errorMessage: 'Некорректный адрес электронной почты',
            },
          ] );
          break;
        case 'phone':
          validationRules.addField( `${formID} [data-validate="phone"]`, [ {
              rule: 'required',
              value: true,
              errorMessage: 'Поле обязательно для заполнения',
            },
            {
              rule: 'minLength',
              value: document.querySelector( `${formID} [data-validate="phone"]` ).dataset.mask.length,
              errorMessage: 'Введите телефон в формате +7 (---) --- -- --',
            },
          ] );
          break;
        case 'message':
          validationRules.addField( `${formID} [data-validate="message"]`, [ {
              rule: 'required',
              value: true,
              errorMessage: 'Поле обязательно для заполнения',
            },
            {
              rule: 'minLength',
              value: 3,
              errorMessage: 'Слишком короткое сообщение',
            },
            {
              rule: 'maxLength',
              value: 200,
              errorMessage: 'Длина сообщения превышает 200 символов',
            },
          ] );
          break;
        case 'confirm':
          validationRules.addField( `${formID} [data-validate="confirm"]`, [ {
            rule: 'required',
            value: true,
            errorMessage: 'Подтвердите согласие на обработку персональных данных',
          }, ] );
          break;
      }
    } );
    validationRules.onSuccess( ( evt ) => {
      sendData( evt );

      analyticFn( evt.target );
    } );
  } );
};

export {
  validateForms,
  initFileInputHandler
};
