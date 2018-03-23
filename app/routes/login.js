import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import UserValidations from 'mir/validations/user';

const AUTHENTICATOR = 'authenticator:ai';

export default Route.extend(UnauthenticatedRouteMixin, {
  auth: service(),
  session: service(),

  model(/* params */) {
    let store = get(this, 'store');
    let user = store.createRecord('user');
    let validatorFn = lookupValidator(UserValidations);
    let changeset = new Changeset(user, validatorFn, UserValidations);
    // invoke `validate()` to put the form into a disabled state to begin
    changeset.validate();
    return changeset;
  },

  actions: {
    async login(user) {
      let email = get(user, 'email');
      let password = get(user, 'password');
      // get the user from routes model
      let auth = get(this, 'auth');
      let errors = await auth.loginUserPassword(AUTHENTICATOR, email, password);
      // set errors to any that may have been returned
      set(this, 'controller.errorMessageKeys', errors);
    },

    async loginTwitter() {
      let auth = get(this, 'auth');
      let errors = await auth.loginTwitter();
      // set errors to any that may have been returned
      set(this, 'controller.errorMessageKeys', errors);
    },

    async signup(model) {
      try {
        await model.save();
      } catch (response) {
        // deal with errors
        const { errors } = response;
        // map list of potential errors to error keys
        const errorMessageKeys = errors
          .mapBy('detail')
          .map(
            errorMessage =>
              `errors.login.${(errorMessage || 'other').dasherize()}`
          );
        // set error message list to the controller
        if (errorMessageKeys.length > 0) {
          set(this, 'controller.errorMessageKeys', errorMessageKeys);
        }
      }
      this.send('login', model);
    }
  }
});
