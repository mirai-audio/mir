import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  auth: service(),
  session: service(),

  beforeModel() {
    // logout user
    const auth = get(this, 'auth');
    const session = get(this, 'session');
    if (auth.isAuthenticated()) {
      session.invalidate();
      this.replaceWith('welcome'); // TODO: may not be needed
    } else {
      this.replaceWith('welcome');
    }
  }
});
