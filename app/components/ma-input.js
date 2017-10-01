import Ember from 'ember';

export default Ember.Component.extend({
  /* Ember */
  classNames: ['ma-Input', 'field'],
  tagName: 'fieldset',

  /* API */
  autocapitalize: 'sentences',
  autocomplete: 'auto',
  autocorrect: 'auto',
  autofocus: null,
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
    this.set('showValidations', true);
  },
});
