import RSVP from 'rsvp';
import { isEmpty } from '@ember/utils';
import { get } from '@ember/object';
import { run } from '@ember/runloop';
import { makeArray } from '@ember/array';
import { merge, assign as emberAssign } from '@ember/polyfills';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from 'mir/config/environment';

const assign = emberAssign || merge;

/**
  Authenticator that conforms to OAuth 2
  ([RFC 6749](http://tools.ietf.org/html/rfc6749)), specifically the _"Resource
  Owner Password Credentials Grant Type"_.

  This authenticator also automatically refreshes access tokens (see
  [RFC 6749, section 6](http://tools.ietf.org/html/rfc6749#section-6)) if the
  server supports it.

  @class OAuth2PasswordGrantAuthenticator
  @module ember-simple-auth/authenticators/oauth2-password-grant
  @extends BaseAuthenticator
  @public
 */
export default OAuth2PasswordGrant.extend({
  /**
    The endpoint on the server that authentication and token refresh requests
    are sent to.

    @property serverTokenEndpoint
    @type String
    @default '/token'
    @public
   */
  serverTokenEndpoint: `${config.DS.host}/${config.DS.namespace}/users/token`,

  /**
    Authenticates the session with the specified `identification`, `password`
    and optional `scope`; issues a `POST` request to the
    {{#crossLink "OAuth2PasswordGrantAuthenticator/serverTokenEndpoint:property"}}{{/crossLink}}
    and receives the access token in response (see
    http://tools.ietf.org/html/rfc6749#section-4.3).

    __If the credentials are valid (and the optionally requested scope is
    granted) and thus authentication succeeds, a promise that resolves with the
    server's response is returned__, otherwise a promise that rejects with the
    error as returned by the server is returned.

    __If the
    [server supports it](https://tools.ietf.org/html/rfc6749#section-5.1), this
    method also schedules refresh requests for the access token before it
    expires.__

    @method authenticate
    @param {String} identification The resource owner username
    @param {String} password The resource owner password
    @param {String|Array} scope The scope of the access request
      (see [RFC 6749, section 3.3](http://tools.ietf.org/html/rfc6749#section-3.3))
    @param {Object} headers Optional headers that particular backends may
      require (for example sending 2FA challenge responses)
    @return {Ember.RSVP.Promise} A promise that when it resolves results in the
      session becoming authenticated
    @public
  */
  authenticate(identification, password, scope = [], headers = {}) {
    return new RSVP.Promise((resolve, reject) => {
      const data = {
        grant_type: 'token',
        username: identification,
        password
      };
      const serverTokenEndpoint = get(this, 'serverTokenEndpoint');
      const useResponse = get(this, 'rejectWithResponse');
      const scopesString = makeArray(scope).join(' ');
      if (!isEmpty(scopesString)) {
        data.scope = scopesString;
      }
      this.makeRequest(serverTokenEndpoint, data, headers).then(
        response => {
          run(() => {
            let fResponse = response;
            if (!this._validate(response)) {
              reject('access_token is missing in server response');
            }

            const expiresAt = this._absolutizeExpirationTime(
              response.expires_in
            );
            this._scheduleAccessTokenRefresh(
              response.expires_in,
              expiresAt,
              response.refresh_token
            );
            if (!isEmpty(expiresAt)) {
              fResponse = assign(response, { expires_at: expiresAt });
            }

            resolve(fResponse);
          });
        },
        response => {
          run(null, reject, useResponse ? response : response.responseJSON);
        }
      );
    });
  }
});
