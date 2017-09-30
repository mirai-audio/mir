import Ember from 'ember';

export default Ember.Component.extend({
  /* Ember */
  attributeBindings: ['formName:name', 'formMethod:method'],
  classNames: ['ma-Auth'],
  tagName: 'form',
  formName: 'users',
  formMethod: 'POST',

  /* API */
  title: '',
  loginAction: null,
  action: null,
  model: null,
  user: null,

  isDisabled: Ember.computed.alias('model.validations.isInvalid'),
});
