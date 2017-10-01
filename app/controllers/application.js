import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),
  session: Ember.inject.service(),

  cssEnv: Ember.computed(() => {
    const env = Ember.String
      .dasherize(config.environment)
      .replace(/\./g, '-');
    return `env-${env}`;
  }),

  cssRoute: Ember.computed('currentRouteName', function compute() {
    return Ember.String.dasherize(`${this.get('currentRouteName')}`)
      .replace(/\./g, '-');
  }),

  isAuthenticated: Ember.computed('session.isAuthenticated', function compute() {
    return this.get('session').get('isAuthenticated');
  }),

  locale: Ember.computed(function compute() {
    return this.get('i18n').locale;
  }),
});
