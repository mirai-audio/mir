import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import EmberObject, { get } from '@ember/object';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

// the domain root `/`, which acts as authenticated "Home" of the app.
// AuthenticatedRouteMixin sends unauthenticated users to the `welcome` route.
export default Route.extend(AuthenticatedRouteMixin, {
  auth: service(),

  authenticationRoute: 'welcome',

  async model() {
    let { user, errors } = await get(this, 'auth').getUser();
    let medias = await get(this, 'store').findAll('media');
    return EmberObject.create({
      all: medias,
      errors: errors,
      user: user
    });
  }
});
