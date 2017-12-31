import Component from '@ember/component';
import { get } from '@ember/object';
import { none, or } from '@ember/object/computed';

export default Component.extend({
  /* Ember */
  attributeBindings: ['formName:name', 'formMethod:method'],
  classNames: ['ma-Login'],
  tagName: 'form',
  formName: 'users/token',
  formMethod: 'POST',

  /* API */
  action: null,
  changeset: null,
  title: '',

  isDisabled: or(
    'changeset.error.email',
    'changeset.error.password',
    'noConfirmation' /* Login form is only valid when user hasn't supplied a
                      * password confirmation. In that case they've expressed
                      * intent to sign up, so disable Login button to prevent
                      * confusion.
                      */
  ).readOnly(),
  noConfirmation: none('changeset.error.passwordConfirmation'),

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
