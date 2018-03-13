import { get, getWithDefault, set } from '@ember/object';
import Service, { inject as service } from '@ember/service';
import fetch from 'fetch';
import config from 'mir/config/environment';

const ENDPOINT = `${config.DS.host}/${config.DS.namespace}/users/current`;
const ERROR_OTHER = 'errors.login.other';
const ERROR_UNAUTHORIZED = 'errors.login.unauthorized';
const AI_AUTHENTICATOR = 'authenticator:ai';
const TOKEN_AUTHENTICATOR = 'authenticator:token';
const TORII_AUTHENTICATOR = 'authenticator:torii';
const USER_PATH = 'session.user';
const AUTH_PATH = 'session.isAuthenticated';

export default Service.extend({
  session: service(),
  store: service(),

  currentUserPromise: null,

  /**
   * Determine if the user is authenticated.
   *
   * @returns Boolean `true` if session is authenticated, `false` otherwise.
   */
  isAuthenticated() {
    return get(this, AUTH_PATH) === true;
  },

  /**
   * Authenticate the user against the Ai API.
   *
   * @returns {Object} Object with keys `user` and `errors`.
   * On success, `user` is a User model with empty `errors` Array. On failure,
   * `user` is `null` and `errors` contains at least one error code.
   */
  loginUserPassword(authenticator, identity, password) {
    let currentUserPromise = get(this, 'session')
      .authenticate(authenticator, identity, password)
      .then(() => {
        // user successfully authenticated, fetch user data from API and load
        // into Ember Data. Returns { user, errors }.
        return this._fetchUser();
      })
      .catch(response => {
        // deal with errors
        const { errors } = response || { errors: [{ code: 'other' }] };
        let errorKeys = [];
        let user = null;
        // check for a 401 "Unauthorized" in the list of returned codes
        let isUnauthorized = errors.mapBy('code').indexOf(401) > -1;
        if (isUnauthorized) {
          errorKeys.push(ERROR_UNAUTHORIZED);
        } else {
          errorKeys.push(ERROR_OTHER);
        }
        return { errors: errorKeys, user };
      });
    // 🤞
    set(this, 'currentUserPromise', currentUserPromise);
    return currentUserPromise;
  },

  /**
   * Authenticates the user against the Twitter OAuth provider. This begins the
   * OAuth authentication flow with Twitter. Once a valid token is
   * is recieved, it invokes `loginUserPassword` to exchange the OAuth token
   * for an Ai token.
   *
   * @returns {Object} Object with keys `user` and `errors`.
   * On success, `user` is a User model with empty `errors` Array. On failure,
   * `user` is `null` and `errors` contains at least one error code.
   */
  loginTwitter() {
    let currentUserPromise = get(this, 'session')
      .authenticate(TORII_AUTHENTICATOR, 'twitter')
      .then(
        () => {
          // log user in with Token authenticator
          let code = get(this, 'session.session.authenticated.code');
          let { identity, token } = this._parseToken(code);
          return this.loginUserPassword(TOKEN_AUTHENTICATOR, identity, token);
        },
        (/* error */) => ({ errors: [ERROR_OTHER], user: null })
      )
      .catch(error => {
        console.warn(error.message);
        return { errors: [ERROR_OTHER], user: null };
      });
    // 🤞
    set(this, 'currentUserPromise', currentUserPromise);
    return currentUserPromise;
  },

  /**
   * Return the User model from the session (Ember Data). May need to fetch it
   * from Ai API.
   *
   * @returns {Promise} Object with keys `user` and `errors`.
   * On success, the Promise returns and Object with `user` and `error` keys.
   * `user` is a User model with empty `errors` Array. On failure, `user` is
   * `null` and `errors` contains at least one error code.
   */
  getUser() {
    let currentUserPromise = getWithDefault(this, 'currentUserPromise', null);
    if (currentUserPromise !== null) {
      // currentUserPromise is not null when authentication on the `login`
      // route has requested the current user
      return currentUserPromise;
    } else {
      // currentUserPromise is null when the `index` route is visited via a
      // direct navigation or a browser refresh, in that case fetch the user.
      return this._fetchUser();
    }
  },

  /**
   * Request the current authorized user from the API, load into Ember Data.
   *
   * @returns {Object} Object with keys `user` and `errors`.  On success, `user`
   * is a User model with empty `errors` Array. On failure, `user` is `null` and
   * `errors` contains at least one error code.
   * @private
   */
  _fetchUser() {
    let authenticator = get(
      this,
      'session.session.authenticated.authenticator'
    );
    // Use OAuth `access_token` for authenticator:ai, just email email, really
    let sessionKey =
      authenticator === AI_AUTHENTICATOR
        ? 'session.session.content.authenticated.access_token'
        : 'session.session.authenticated.access_token';
    let accessToken = get(this, sessionKey);
    let options = {
      type: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/vnd.api+json'
      }
    };
    let errors = [];
    let user = getWithDefault(this, USER_PATH, null);

    if (user !== null) {
      // valid user in the session, return it
      return { user, errors };
    } else {
      // no user in session, request from Ai API
      let currentUserPromise = fetch(ENDPOINT, options)
        .then(raw =>
          raw.json().then(data => {
            // store user in Ember Data
            let store = get(this, 'store');
            user = store.push(data);
            // store user in session and a local cache
            set(this, USER_PATH, user);
            // return success, the user, empty errors list
            return { user, errors };
          })
        )
        .catch((/* error */) => {
          // general API error: network connection, 500, etc.
          // return null user and errors.
          errors.push(ERROR_OTHER);
          return { user, errors };
        });
      // 🤞
      set(this, 'currentUserPromise', currentUserPromise);
      return currentUserPromise;
    }
  },

  /**
   * Split out the OAuth user identity `identity` and OAuth2 `token` from a
   * string where both are concatenated together.
   *
   * @param {String} code The OAuth code returned from authentication.
   * @returns {Object} An object with an `identity` and `token` keys.
   * @private
   */
  _parseToken(code) {
    const [identity, token] = (code || '').split('::');
    return identity && token ? { identity, token } : null;
  }
});
