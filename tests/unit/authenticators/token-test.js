import { Promise } from 'rsvp';
import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Authenticator | token', function(hooks) {
  setupTest(hooks);

  test('its `authenticate` method resolves call `makeRequest` with credentials from the user', function (assert) {
    const done = assert.async();
    const authenticator = this.owner.factoryFor('authenticator:token').create({
      makeRequest(url, credentials) {
        assert.ok(true, 'makeRequest() should be called');
        assert.equal(credentials.username, 'test@foo.com');
        assert.equal(credentials.password, 'password1234');
        done();
        return Promise.resolve({
          access_token: 'abc::123',
          expires_in: 1000,
        });
      }
    });
    run(() => {
      authenticator.authenticate('test@foo.com', 'password1234', 'fun stuff');
    });
  });

  test('its `authenticate` method rejects call `makeRequest` with credentials from the user', function (assert) {
    const done = assert.async();
    const authenticator = this.owner.factoryFor('authenticator:token').create({
      makeRequest(url, credentials) {
        assert.ok(true, 'makeRequest() should be called');
        assert.equal(credentials.username, 'test@foo.com');
        assert.equal(credentials.password, 'password1234');
        done();
        return Promise.reject({ access_token: 'abc::123' });
      }
    });
    run(() => {
      authenticator.authenticate('test@foo.com', 'password1234', 'fun stuff');
    });
  });

  test('its `authenticate` method resolves call `makeRequest` with invalid token', function (assert) {
    const done = assert.async();
    assert.expect(4);

    const authenticator = this.owner.factoryFor('authenticator:token').create({
      makeRequest(url, credentials) {
        assert.ok(true, 'makeRequest() should be called');
        assert.equal(credentials.username, 'test@foo.com');
        assert.equal(credentials.password, 'password1234');
        return Promise.resolve({ /* explicitly empty object */ });
      }
    });
    run(() => {
      authenticator
        .authenticate('test@foo.com', 'password1234', 'fun stuff')
        .catch((result) => {
          assert.equal(result, 'access_token is missing in server response');
          done();
        });
    });
  });
});
