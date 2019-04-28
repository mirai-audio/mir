/* eslint-disable ember/alias-model-in-controller */
import { dasherize } from '@ember/string';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import config from 'mir/config/environment';

export default Controller.extend({
  intl: service(),
  session: service(),

  isLoading: false,

  cssEnv: computed(() => {
    const env = dasherize(config.environment).replace(/\./g, '-');
    return `env-${env}`;
  }),

  cssRoute: computed('currentRouteName', function compute() {
    return dasherize(`${get(this, 'currentRouteName')}`).replace(/\./g, '-');
  }),

  isAuthenticated: computed('session.isAuthenticated', function compute() {
    return get(this, 'session.isAuthenticated');
  }),

  locale: computed(function compute() {
    return get(this, 'intl').locale;
  })
});
