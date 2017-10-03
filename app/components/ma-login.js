import Ember from 'ember';

export default Ember.Component.extend({
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
  isDisabled: Ember.computed
    .or('model.validations.attrs.email.isInvalid',
      'model.validations.attrs.password.isInvalid',
      'model.validations.attrs.passwordConfirmation.isValid')
    .readOnly(),
});
