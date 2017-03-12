import Ember from 'ember';
import ApplicationRouteMixin from
  'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    logout() {
      const isAuthenticated = this.get('session.isAuthenticated');
      if (isAuthenticated) {
        // logout user
        this.get('session').invalidate();
      }
      // transition to login
      this.get('router').transitionTo('login');
    },
  },
});
