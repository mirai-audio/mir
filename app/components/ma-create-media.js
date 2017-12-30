import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { alias, or } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  /* Ember */
  attributeBindings: ['formName:name', 'formMethod:method'],
  classNames: ['ma-CreateMedia'],
  tagName: 'form',

  formName: 'medias',
  formMethod: 'POST',

  isDisabled: or('model.validations.isInvalid', 'isLoading').readOnly(),
  isLoading: false,

  /* API */
  errorMessageKeys: null,
  model: null,
  onFailure: () => {}, // noOp callback if caller doesn't pass onFailure in.
  onSuccess: () => {}, // noOp callback if caller doesn't pass onSuccess in.

  init() {
    this._super(...arguments);
    set(this, 'errorMessageKeys', []);
    let media = get(this, 'model');
    if (media === null) {
      // caller invoking component didn't pass in `model`, create one.
      let store = get(this, 'store');
      media = store.createRecord('media');
      set(this, 'model', media);
    }
  },

  cssLoading: computed('isLoading', function computed() {
    let isLoading = get(this, 'isLoading');
    return isLoading ? 'is-loading' : '';
  }),

  errors: alias('errorMessageKeys'),

  _handleError(error) {
    let errors = get(this, 'errorMessageKeys');
    let firstError = error.message.split(':')[0].dasherize();
    console.warn(error.message);
    errors.pushObject(`components.ma-create-media.error-${firstError}`);
  },

  actions: {
    add() {
      set(this, 'isLoading', true);
      let model = get(this, 'model');
      return model
        .save()
        .then((/* data */) => {
          set(this, 'isLoading', false);
          let onSuccess = get(this, 'onSuccess');
          if (onSuccess) onSuccess();
          return;
        })
        .catch(error => {
          set(this, 'isLoading', false);
          this._handleError(error);
          let onFailure = get(this, 'onFailure');
          if (onFailure) onFailure();
          return;
        });
      // 🤞
    }
  }
});
