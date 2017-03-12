import Ember from 'ember';
import UnauthenticatedRouteMixin from
  'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service(),

  model(/* params */) {
    return this.store.createRecord('user');
  },

  actions: {
    login() {
      // get the user from routes model
      const user = this.get('currentModel');
      // authenticate the user model against the API
      this.get('session').authenticate(
        'authenticator:ai',
        user.get('email'),
        user.get('password'))
      .catch((response) => {
        // deal with errors
        const { errors } = response;
        // if there is a 401 "Unauthorized" in the list of returned codes
        const isUnauthorized = (errors.mapBy('code').indexOf(401) > -1);
        if (isUnauthorized) {
          this.set('controller.errorMessageKeys', ['errors.login.unauthorized']);
        } else {
          this.set('controller.errorMessageKeys', ['errors.login.other']);
        }
      });

      // prevent form POST
      return false;
    },

    loginTwitter() {
      this.get('session').authenticate('authenticator:torii', 'twitter')
      .then((/* data */) => {
        console.log('User sucessfully authenticated with Twitter.');
      }, (/* error */) => {
        this.set('controller.errorMessageKeys', ['errors.login.other']);
      }).catch((error) => {
        console.warn(error.message);
      });
    },

    signup() {
      this.get('currentModel').save()
        .then(() => {
          // user saved, invoke the login method
          this.send('login');
        })
        .catch((response) => {
          // deal with errors
          const { errors } = response;
          // map list of potential errors to error keys
          const errorMessageKeys = errors.mapBy('detail')
            .map(errorMessage => `errors.login.${errorMessage.dasherize()}`);
          // set error message list to the controller
          if (errorMessageKeys.length > 0) {
            this.set('controller.errorMessageKeys', errorMessageKeys);
          }
        });
      // 🤞
      return false;  // prevent form POST
    },
  },
});
