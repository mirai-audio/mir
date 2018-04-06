import Component from '@ember/component';
import { equal } from '@ember/object/computed';
import EmberObject, { get, set } from '@ember/object';

export default Component.extend({
  /* API */
  model: null,

  init() {
    this._super(...arguments);
    let model = get(this, 'model');
    if (model === null) {
      set(this, 'model', EmberObject.create({}));
    }
  },

  isProviderYoutube: equal('model.provider', 'youtube')
});
