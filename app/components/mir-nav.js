import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  tagName: 'aside',
  classNames: ['mir-Nav', 'mir-Nav--animate', 'mir-Nav--animate-slide', 'u-Z10'],
  classNameBindings: ['isShownClassName'],
  elementId: 'mir-Nav',

  isShown: false,

  version: config.version,

  isShownClassName: Ember.computed('isShown', function compute() {
    return this.get('isShown') ? 'is-shown' : '';
  }),

  actions: {
    toggle() {
      const isShown = !this.get('isShown');
      this.set('isShown', isShown);
    },
  },
});
