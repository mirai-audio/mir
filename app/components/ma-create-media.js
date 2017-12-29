import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { or } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  /* Ember */
  attributeBindings: ['formName:name', 'formMethod:method'],
  classNames: ['ma-CreateMedia'],
  tagName: 'form',

  formName: 'medias',
  formMethod: 'POST',

  isDisabled: or('model.validations.isInvalid', 'isLoading'),
  isLoading: false,
  model: null,

  init() {
    this._super(...arguments);
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
        .catch((/* error */) => {
          set(this, 'isLoading', false);
          let onFailure = get(this, 'onFailure');
          if (onFailure) onFailure();
          return;
        });
      // 🤞
    }
  }
});
