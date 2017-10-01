import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: ['has-text-centered', 'ma-Header'],

  window: Ember.inject.service(),

  actions: {
    back() {
      this.get('window.history').back();
    },
  },
});
