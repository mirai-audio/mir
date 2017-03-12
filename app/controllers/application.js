import Ember from 'ember';

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),
  session: Ember.inject.service(),

  isAuthenticated: Ember.computed('session.isAuthenticated', function compute() {
    return this.get('session').get('isAuthenticated');
  }),

  locale: Ember.computed(function compute() {
    return this.get('i18n').locale;
  }),
});
