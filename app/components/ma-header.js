import Ember from 'ember';

export default Ember.Component.extend({
  window: Ember.inject.service(),
  offCanvasMenu: Ember.inject.service(),

  tagName: 'header',
  classNames: ['ma-Header'],

  offCanvasIsActive: Ember.computed.alias('offCanvasMenu.isActive'),

  actions: {
    toggleOffCanvas() {
      this.get('offCanvasMenu').toggle();
    },

    back() {
      this.get('window.history').back();
    },
  },
});
