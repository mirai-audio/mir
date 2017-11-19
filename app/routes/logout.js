import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),

  beforeModel() {
    // logout user
    if (get(this, 'session.isAuthenticated')) {
      get(this, 'session').invalidate();
    } else {
      this.replaceWith('welcome');
    }
  },
});
