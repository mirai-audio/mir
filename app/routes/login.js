import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import UserValidations from 'mir/validations/user';

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
    login(user) {
      let email = get(user, 'email');
      let password = get(user, 'password');
      // get the user from routes model
      get(this, 'auth')
        .loginUserPassword('authenticator:ai', email, password)
        .then(result => {
          // set errors to any that may have been returned
          set(this, 'controller.errorMessageKeys', result.errors);
        });
      // 🤞

      // prevent form POST
      return false;
    },

    loginTwitter() {
      get(this, 'auth')
        .loginTwitter()
        .then(result => {
          // set errors to any that may have been returned
          set(this, 'controller.errorMessageKeys', result.errors);
        });
      // 🤞
    },

    signup() {
      get(this, 'currentModel')
        .save()
        .then(() => {
          // user saved, invoke the login method
          const user = get(this, 'currentModel');
          this.send('login', user);
        })
        .catch(response => {
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
        });
      // 🤞
      return false; // prevent form POST
    }
  }
});
