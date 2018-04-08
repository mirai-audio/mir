import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { get } from '@ember/object';
import config from 'mir/config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  /* Ember */
  host: config.DS.host,
  namespace: config.DS.namespace,

  /* DataAdapterMixin */
  authorize(xhr) {
    let { access_token } = get(this, 'session.data.authenticated');
    xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
  }
});
