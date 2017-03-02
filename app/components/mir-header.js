import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: ['t-Center mir-Header'],

  actions: {
    back() {
      if ('history' in window) {
        window.history.back();
      }
    },
  },
});
