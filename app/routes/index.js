import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { hash } from 'rsvp';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

// the domain root `/`, which acts as authenticated "Home" of the app. Use the
// `beforeModel` hook to send unauthenticated users to the `welcome` route. This
// is why it needs the `UnauthenticatedRouteMixin`, to allow pre-processing in
// the `beforeModel` hook.
export default Route.extend(UnauthenticatedRouteMixin, {
  session: service(),
  auth: service(),

  beforeModel() {
    let isAuthenticated = get(this, 'session.isAuthenticated');

    // the index route is reserved for authenticated users as the "Dashboard"
    // of the app. Rather than use AuthenticatedRouteMixin which redirects users
    // to /login, we want to redirect to /welcome
    if (!isAuthenticated) {
      // everyone else is sent to to `welcome` route
      this.replaceWith('welcome');
    }
  },

  async model() {
    let { user, errors } = await get(this, 'auth').getUser();
    let medias = await get(this, 'store').findAll('media');
    return hash({
      all: medias,
      errors: errors,
      user: user
    });
  }
});
