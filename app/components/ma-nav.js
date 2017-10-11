import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({
  offCanvasMenu: Ember.inject.service(),

  tagName: 'aside',
  classNames: ['ma-Nav', 'ma-Nav--animate', 'ma-Nav--animate-slide', 'u-Z10'],
  classNameBindings: ['isShown'],
  elementId: 'ma-Nav',

  isAuthenticated: false,
  version: config.version,

  isShown: Ember.computed.alias('offCanvasMenu.isActive'),
  isDevelopment: Ember.computed(() => (config.environment === 'development')),

  actions: {
    toggleOffCanvas() {
      this.get('offCanvasMenu').toggle();
    },
  },
});
