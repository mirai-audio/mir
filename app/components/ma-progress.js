import Component from '@ember/component';

export default Component.extend({
  classNames: ['ma-Progress', 'u-Z30'],
  classNameBindings: ['isLoading:is-active'],
  tagName: 'aside',

  /* API */
  isLoading: false
});
