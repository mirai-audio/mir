import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: ['t-Center', 'ma-Header'],

  window: Ember.inject.service(),

  actions: {
    back() {
      this.get('window.history').back();
    },
  },
});
