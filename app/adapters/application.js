import JSONAPIAdapter from 'ember-data/adapters/json-api';
import AdapterFetchMixin from 'ember-fetch/mixins/adapter-fetch';
import config from 'mir/config/environment';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default JSONAPIAdapter.extend(AdapterFetchMixin, {
  session: service(),

  /* Ember */
  host: config.DS.host,
  namespace: config.DS.namespace,

  /*
  authorizer: 'authorizer:oauth2-bearer',
  */

  /* mir */
  zzajaxOptions() {
    const authorizer = get(this, 'authorizer');
    const options = this._super(...arguments) || {};
    options.headers = options.headers || {};
    options.headers['Content-Type'] = 'application/vnd.api+json';
    get(this, 'session').authorize(authorizer, (headerName, headerValue) => {
      options.headers[headerName] = headerValue;
    });
    return options;
  },

  headers: computed('session.data.authenticated.token', function() {
    const headers = {};
    headers['Content-Type'] = 'application/vnd.api+json';
    if (this.session.isAuthenticated) {
      const token = this.session.data.authenticated['access_token'];
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  })
});
