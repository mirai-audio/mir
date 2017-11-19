import { or } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
  /* Ember */
  attributeBindings: ['formName:name', 'formMethod:method'],
  classNames: ['ma-Login'],
  tagName: 'form',
  formName: 'users/token',
  formMethod: 'POST',

  /* API */
  action: null,
  model: null,
  title: '',

  /* component helpers */
  isDisabled: or(
    'model.validations.attrs.email.isInvalid',
    'model.validations.attrs.password.isInvalid',
    'model.validations.attrs.passwordConfirmation.isValid',
  ).readOnly(),
});
