import Ember from 'ember';

export default Ember.Component.extend({
  window: Ember.inject.service(),

  tagName: 'header',
  classNames: ['ma-Header'],

  actions: {
    back() {
      this.get('window.history').back();
    },
  },
});
