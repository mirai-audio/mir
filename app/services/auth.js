import Ember from 'ember';

export default Ember.Service.extend({
  session: Ember.inject.service(),

  loginUserPassword(user) {
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

  loginTwitter() {
    const authenticator = 'authenticator:torii';
    const provider = 'twitter';

    return this.get('session')
      .authenticate(authenticator, provider)
      .then((/* data */) => {
        console.log('User sucessfully authenticated with Twitter.');
        // ToDo: Now log them in with a custom Ai authenticator
        debugger;
      }, (/* error */) => ['errors.login.other'])
      .catch((error) => {
        console.warn(error.message);
        return ['errors.login.other'];
      });
    // 🤞
  },
});
