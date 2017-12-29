import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    let store = get(this, 'store');
    return store.createRecord('media');
  },

  actions: {
    onCreated() {
      return this.transitionTo('index');
    },

    onFailure() {
      return false;
    }
  }
});
