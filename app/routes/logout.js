import Ember from 'ember';
import AuthenticatedRouteMixin from
  'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),

  beforeModel() {
    // logout user
    if (this.get('session.isAuthenticated')) {
      this.get('session').invalidate();
    }
  },
});
