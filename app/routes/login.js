import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from
  'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  auth: service(),
  session: service(),

  model(/* params */) {
    return this.store.createRecord('user');
  },

  actions: {
    login(user) {
      let email = get(user, 'email');
      let password = get(user, 'password');
      // get the user from routes model
      get(this, 'auth')
        .loginUserPassword('authenticator:ai', email, password)
        .then((result) => {
          // set errors to any that may have been returned
          set(this, 'controller.errorMessageKeys', result);
        });
      // 🤞

      // prevent form POST
      return false;
    },

    loginTwitter() {
      get(this, 'auth')
        .loginTwitter()
        .then((result) => {
          // set errors to any that may have been returned
          set(this, 'controller.errorMessageKeys', result);
        });
      // 🤞
    },

    signup() {
      get(this, 'currentModel').save()
        .then(() => {
          // user saved, invoke the login method
          const user = get(this, 'currentModel');
          this.send('login', user);
        }).catch((response) => {
          // deal with errors
          const { errors } = response;
          // map list of potential errors to error keys
          const errorMessageKeys = errors.mapBy('detail')
            .map(errorMessage => `errors.login.${(errorMessage || 'other').dasherize()}`);
          // set error message list to the controller
          if (errorMessageKeys.length > 0) {
            set(this, 'controller.errorMessageKeys', errorMessageKeys);
          }
        });
      // 🤞
      return false; // prevent form POST
    },
  },
});
