import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  window: service(),
  offCanvasMenu: service(),

  tagName: 'header',
  classNames: ['ma-Header'],

  offCanvasIsActive: alias('offCanvasMenu.isActive'),

  actions: {
    toggleOffCanvas() {
      get(this, 'offCanvasMenu').toggle();
    },

    back() {
      get(this, 'window.history').back(window);
    },
  },
});
