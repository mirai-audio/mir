import Ember from 'ember';

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),

  locale: Ember.computed(function compute() {
    return this.get('i18n').locale;
  }),
});
