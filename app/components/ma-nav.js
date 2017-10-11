import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import config from '../config/environment';

export default Component.extend({
  offCanvasMenu: service(),

  tagName: 'aside',
  classNames: ['ma-Nav', 'ma-Nav--animate', 'ma-Nav--animate-slide', 'u-Z10'],
  classNameBindings: ['isShown'],
  elementId: 'ma-Nav',

  isAuthenticated: false,

  isShown: alias('offCanvasMenu.isActive'),
  isDevelopment: computed(() => (config.environment === 'development')),

  actions: {
    toggleOffCanvas() {
      get(this, 'offCanvasMenu').toggle();
    },
  },

  version: config.version,
});
