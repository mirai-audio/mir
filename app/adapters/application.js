import JSONAPIAdapter from 'ember-data/adapters/json-api';
import AdapterFetchMixin from 'ember-fetch/mixins/adapter-fetch';
import config from 'mir/config/environment';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default JSONAPIAdapter.extend(AdapterFetchMixin, {
  session: service(),

  /* Ember */
  host: config.DS.host,
  namespace: config.DS.namespace,

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
