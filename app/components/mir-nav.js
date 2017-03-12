import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  tagName: 'aside',
  classNames: ['mir-Nav', 'mir-Nav--animate', 'mir-Nav--animate-slide', 'u-Z10'],
  classNameBindings: ['isShown'],
  elementId: 'mir-Nav',

  isAuthenticated: false,
  isShown: false,
  version: config.version,

  actions: {
    toggle() {
      const isShown = !this.get('isShown');
      this.set('isShown', isShown);
    },
  },
});
