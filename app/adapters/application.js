import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  /* Ember */
  host: config.DS.host,
  namespace: config.DS.namespace,

  /* ember-simple-auth */
  authorizer: 'authorizer:oauth2'
});
