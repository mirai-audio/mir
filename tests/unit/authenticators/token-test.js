import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

const { run } = Ember;
const { RSVP: { Promise } } = Ember;

moduleFor('authenticator:token', 'Unit | Authenticator | token', {
  // Specify the other units that are required for this test.
  // needs: ['service:session'],
});

test('its `authenticate` method calls `makeRequest` with credentials from the passed user instance', function (assert) {
  const done = assert.async();
  const authenticator = this.subject({
    makeRequest(url, credentials) {
      assert.ok(true, 'makeRequest() should be called');
      assert.equal(credentials.username, 'test@foo.com');
      assert.equal(credentials.password, 'password1234');
      done();
      return Promise.resolve({ access_token: 'abc::123' });
    }
  });
  run(() => {
    authenticator.authenticate('test@foo.com', 'password1234');
  });
});
