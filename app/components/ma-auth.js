import { alias } from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
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

  isDisabled: alias('model.validations.isInvalid')
});
