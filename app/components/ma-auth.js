import Component from '@ember/component';
import { get } from '@ember/object';
import { alias } from '@ember/object/computed';

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
  changeset: null,
  user: null,

  isDisabled: alias('changeset.isInvalid'),

  /* keyUp fires for any field within the component */
  keyUp() {
    let changeset = get(this, 'changeset');
    /* invoke `validate()` to update `changeset.error` so all changeset state
     * is updated, and not just individual field states. This allows the button
     * disabled state to depend upon multiple field states.
     */
    changeset.validate();
  }
});
