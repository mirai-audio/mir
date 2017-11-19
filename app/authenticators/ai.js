import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from '../config/environment';

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
});
