import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from 'mir/config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  /* Ember */
  host: config.DS.host,
  namespace: config.DS.namespace,

  /* DataAdapterMixin */
  authorizer: 'authorizer:oauth2'
});
