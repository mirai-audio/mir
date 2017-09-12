import Ember from 'ember';

export default Ember.Service.extend({
  history: {
    back() {
      if ('history' in window) {
        window.history.back();
      }
    },
  },
});
