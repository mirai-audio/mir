import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import AdapterFetchMixin from 'ember-fetch/mixins/adapter-fetch';
import config from 'mir/config/environment';

export default JSONAPIAdapter.extend(AdapterFetchMixin, {
  session: service(),

  /* Ember */
  host: config.DS.host,
  namespace: config.DS.namespace,

  authorizer: 'authorizer:oauth2',

  /* mir */
  ajaxOptions() {
    const authorizer = get(this, 'authorizer');
    const options = this._super(...arguments) || {};
    options.headers = options.headers || {};
    options.headers['Content-Type'] = 'application/vnd.api+json';
    get(this, 'session').authorize(authorizer, (headerName, headerValue) => {
      options.headers[headerName] = headerValue;
    });
    return options;
  }
});
