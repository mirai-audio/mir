import Component from '@ember/component';
import { get, set } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Component.extend({
  classNames: ['ma-Progress', 'u-Z30'],
  classNameBindings: ['isLoading:is-active'],
  tagName: 'aside',

  /* API */
  isLoading: equal('state', true),

  init() {
    this._super(...arguments);
    let isLoading = get(this, 'isLoading');
    // set a default state if no is initially set
    if (isLoading === null) set(this, 'isLoading', false);
  }
});
