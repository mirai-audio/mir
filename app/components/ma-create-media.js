import Component from '@ember/component';
import { computed, get, getProperties, set } from '@ember/object';
import { alias, or } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import MediaValidations from '../validations/media';

export default Component.extend({
  store: service(),

  attributeBindings: ['formName:name', 'formMethod:method'],
  classNames: ['ma-CreateMedia'],
  formName: 'medias',
  formMethod: 'POST',
  isLoading: false,
  tagName: 'form',

  hasCompleted: false,
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

  didDestroyElement() {
    let { hasCompleted, media } = getProperties(this, 'hasCompleted', 'media');
    if (!hasCompleted) {
      // `media` creation was not completed, so cleanup the bare `media` model.
      if (media !== null) media.destroyRecord();
    }
  },

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

  _createMedia(changeset) {
    set(this, 'isLoading', true);
    return changeset
      .save()
      .then((/* data */) => {
        set(this, 'isLoading', false);
        // set hasCompleted to prevent `didDestroyElement` from deleting model
        set(this, 'hasCompleted', true);
        let onSuccess = get(this, 'onSuccess');
        if (typeof onSuccess === 'function') onSuccess();
        return;
      })
      .catch(error => {
        set(this, 'isLoading', false);
        // set hasCompleted to prevent `didDestroyElement` from deleting model
        set(this, 'hasCompleted', false);
        this._handleError(error);
        let onFailure = get(this, 'onFailure');
        if (typeof onFailure === 'function') onFailure();
        return;
      });
    // 🤞
  },

  _handleError(error) {
    let errors = get(this, 'errorMessageKeys');
    let firstError = error.message.split(':')[0].dasherize();
    console.warn(error.message);
    errors.pushObject(`components.ma-create-media.error-${firstError}`);
  },

  actions: {
    add(changeset) {
      this._createMedia(changeset);
    }
  }
});
