import Ember from 'ember';

export default Ember.Service.extend({
  session: Ember.inject.service(),

  loginOAuth2PasswordGrant(user) {
    const authenticator = 'authenticator:ai';
    const identity = user.get('email');
    const password = user.get('password');

    // authenticate the user model against the API
    return this.get('session')
      .authenticate(authenticator, identity, password)
      .then(() => [/* success, empty error list */])
      .catch((response) => {
        // deal with errors
        const { errors } = response;
        let errorKeys;
        // if there is a 401 "Unauthorized" in the list of returned codes
        const isUnauthorized = (errors.mapBy('code').indexOf(401) > -1);
        if (isUnauthorized) {
          errorKeys = ['errors.login.unauthorized'];
        } else {
          errorKeys = ['errors.login.other'];
        }
        return errorKeys;
      });
    // 🤞
  },
});
