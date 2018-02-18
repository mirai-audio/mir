import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { alias, or } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import MediaValidations from 'mir/validations/media';

export default Component.extend({
  store: service(),

  attributeBindings: ['formName:name', 'formMethod:method'],
  classNames: ['ma-CreateMedia'],
  formName: 'medias',
  formMethod: 'POST',
  isLoading: false,
  tagName: 'form',

  media: null,

  errors: alias('errorMessageKeys'),
  isDisabled: or(
    'changeset.isInvalid',
    'changeset.isPristine',
    'isLoading'
  ).readOnly(),

  cssLoading: computed('isLoading', function computed() {
    let isLoading = get(this, 'isLoading');
    return isLoading ? 'is-loading' : '';
  }),

  /* API */
  changeset: null,
  errorMessageKeys: null,
  onFailure: () => {}, // noOp callback if caller doesn't pass onFailure in.
  onSuccess: () => {}, // noOp callback if caller doesn't pass onSuccess in.

  init() {
    this._super(...arguments);
    set(this, 'errorMessageKeys', []);
    let changeset = get(this, 'changeset');
    if (changeset === null) {
      // caller invoking this component didn't pass in a changeset, so create
      // a bare media model and changeset. The bare model must be cleaned up if
      // the user abandons creation, otherwise it'll remain in DS.
      let store = get(this, 'store');
      let media = store.createRecord('media');
      changeset = new Changeset(
        media,
        lookupValidator(MediaValidations),
        MediaValidations
      );
      set(this, 'changeset', changeset);
      set(this, 'media', media);
    }
    // invoke `validate()` to put the form into a disabled state to begin
    changeset.validate();
  },

  async _createMedia(changeset) {
    set(this, 'isLoading', true);
    try {
      await changeset.save();
      set(this, 'isLoading', false);
      let onSuccess = get(this, 'onSuccess');
      if (typeof onSuccess === 'function') onSuccess();
    } catch (error) {
      this._handleError(error);
      set(this, 'isLoading', false);
      let onFailure = get(this, 'onFailure');
      if (typeof onFailure === 'function') onFailure();
    }
  },

  _handleError(error) {
    let errors = get(this, 'errorMessageKeys');
    let firstError = error.message.split(':')[0].dasherize();
    console.warn(error.message);
    errors.pushObject(`components.ma-create-media.error-${firstError}`);
  },

  actions: {
    async add(changeset) {
      let isDisabled = get(this, 'isDisabled');
      if (!isDisabled) await this._createMedia(changeset);
    }
  }
});
