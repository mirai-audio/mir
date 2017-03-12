import Ember from 'ember';

export default Ember.Component.extend({
  /* Ember */
  attributeBindings: ['formName:name', 'formMethod:method'],
  classNames: ['mir-FormLogin'],
  tagName: 'form',
  formName: 'users/token',
  formMethod: 'POST',

  /* API */
  title: '',
  action: null,
  model: null,

  /* component helpers */
  isLoginInvalid: Ember.computed.or('model.validations.attrs.email.isInvalid',
    'model.validations.attrs.password.isInvalid').readOnly(),
});
