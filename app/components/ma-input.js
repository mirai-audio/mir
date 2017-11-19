import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  /* Ember */
  classNames: ['ma-Input'],
  tagName: 'fieldset',

  /* API */
  autocapitalize: 'sentences',
  autocomplete: 'auto',
  autocorrect: 'auto',
  autofocus: null,
  inputId: null,
  minlength: null,
  pattern: null,
  placeholder: '',
  required: false,
  type: 'text',
  value: null,

  /* ember-cp-validations */
  showValidations: false,

  /* focusOut

  `showValidations` is disabled at initialization so validation errors are not
   presented when the form is rendered empty. `focusOut` is invoked when user
   leaves the input element, this is the first opportunity to enable
   validations.
   */
  focusOut(...args) {
    this._super(args);
    set(this, 'showValidations', true);
  }
});
