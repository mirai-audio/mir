import Ember from 'ember';
import ApplicationRouteMixin from
  'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service(),

  beforeModel() {
    // logout user
    this.get('session').invalidate();

    // transition to login
    this.get('router').transitionTo('logout');
  },
});
