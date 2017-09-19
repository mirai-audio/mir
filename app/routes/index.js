import Ember from 'ember';
import fetch from 'ember-network/fetch';
import UnauthenticatedRouteMixin from
  'ember-simple-auth/mixins/unauthenticated-route-mixin';
import config from '../config/environment';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service(),
  fastboot: Ember.inject.service(),

  beforeModel() {
    const isAuthenticated = this.get('session').get('isAuthenticated');
    const isFastboot = this.get('fastboot').isFastBoot;

    // if user is not authenticated, and we're not on fastboot
    if (!isAuthenticated && !isFastboot) {
      // send them to welcome
      this.transitionTo('welcome');
    }
  },

  model(params) {
    return this.store.findAll('media').then(medias => ({
      all: medias,
      filter: params.state,
    }));
  },

  afterModel() {
    const endpoint = `${config.DS.host}/${config.DS.namespace}/users/current`;
    const authenticator = this.get('session.session.authenticated.authenticator');
    // Use OAuth `access_token` for authenticator:ai, just email email, really
    const sessionKey = authenticator === 'authenticator:ai' ?
      'session.content.authenticated.access_token' :
      'session.authenticated.code';
    const accessToken = this.get('session').get(sessionKey);
    const token = `Bearer ${accessToken}`;

    // if we have a valid `access_token`, POST it to Ai and stash user into
    // the session
    if (authenticator === 'authenticator:ai' && accessToken !== undefined) {
      fetch(endpoint, {
        type: 'GET',
        headers: {
          Authorization: token,
        },
      }).then(raw => raw.json().then((data) => {
        const user = this.store.push(data);
        this.set('session.user', user);
      })).catch((/* error */) => {
        const message = 'errors.login.other';
        this.set('errorMessageKeys', [message]);
      });
    }
  },
});
