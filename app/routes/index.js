import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import Route from '@ember/routing/route';
import fetch from 'fetch';
import UnauthenticatedRouteMixin from
  'ember-simple-auth/mixins/unauthenticated-route-mixin';
import config from '../config/environment';

export default Route.extend(UnauthenticatedRouteMixin, {
  session: service(),
  fastboot: service(),

  beforeModel() {
    const isAuthenticated = get(this, 'session.isAuthenticated');
    const isFastboot = get(this, 'fastboot').isFastBoot;

    // if user is not authenticated, and we're not on fastboot
    if (!isAuthenticated && !isFastboot) {
      // send them to welcome
      this.replaceWith('welcome');
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
    const authenticator = get(this, 'session.session.authenticated.authenticator');
    // Use OAuth `access_token` for authenticator:ai, just email email, really
    const sessionKey = authenticator === 'authenticator:ai' ?
      'session.session.content.authenticated.access_token' :
      'session.session.authenticated.code';
    const accessToken = get(this, sessionKey);
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
        set(this, 'session.user', user);
      })).catch((/* error */) => {
        const message = 'errors.login.other';
        set(this, 'errorMessageKeys', [message]);
      });
    }
  },
});
