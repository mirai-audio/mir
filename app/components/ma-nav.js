import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  tagName: 'aside',
  classNames: ['ma-Nav', 'ma-Nav--animate', 'ma-Nav--animate-slide', 'u-Z10'],
  classNameBindings: ['isShown'],
  elementId: 'ma-Nav',

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
