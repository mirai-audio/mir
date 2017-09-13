import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

// Stub session service
const sessionStub = Ember.Service.extend({
  session: {
    authenticated: {
      code: 'abc123xyzDEF::000123',
    },
  },
  authenticate(authenticator, identity, password) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      let result = '';
      if (authenticator === 'authenticator:ai') {
        if (identity === 'mike@example.com' && password === 'Password1234') {
          result = 'success';
          resolve(result);
        } else {
          result = {
            errors: [
              { code: 401, },
            ],
          };
          reject(result);
        }
      } else if (authenticator === 'authenticator:torii') {
        if (identity === 'twitter') {
          result = [];
          resolve(result);
        } else {
          result = {
            errors: [
              { code: 401, },
            ],
          };
          reject(result);
        }
      } else if (authenticator === 'authenticator:token') {
        if (identity === 'abc123xyzDEF') {
          result = [];
          resolve(result);
        } else {
          result = {
            errors: [
              { code: 401, },
            ],
          };
          reject(result);
        }
      } else {
        result = {
          errors: [
            { code: 403, },
          ],
        };
        reject(result);
      }
    });
  },
});

moduleFor('service:auth', 'Unit | Service | auth', {
  // Specify the other units that are required for this test.
  // needs: ['service:session'],

  beforeEach() {
    this.register('service:session', sessionStub);
    // Calling inject puts the service instance in the context of the test,
    // making it accessible as `window` within each test
    this.inject.service('session', { as: 'session' });
  },
});

test('loginUserPassword authenticates the user with valid username / password', function(assert) {
  let service = this.subject();
  assert.ok(service, 'Service is ok');

  let done = assert.async();
  let expected = [];
  service
    .loginUserPassword('authenticator:ai', 'mike@example.com', 'Password1234')
    .then((result) => {
      assert.deepEqual(result, expected, 'valid user/pass tuple returns no errors');
      done();
    });
});

test('loginUserPassword authenticates the user with invalid username / password', function(assert) {
  let service = this.subject();

  let done = assert.async();
  let expected = ['errors.login.unauthorized'];
  service
    .loginUserPassword('authenticator:ai', 'mike@example.com', 'password')
    .then((result) => {
      assert.deepEqual(result, expected, 'invalid user/pass returns unauthorized error');
      done();
    });
});

test('loginUserPassword authenticates the user with invalid authenticator', function(assert) {
  let service = this.subject();

  let done = assert.async();
  let expected = ['errors.login.other'];
  service
    .loginUserPassword('authenticator:x', '', '')
    .then((result) => {
      assert.deepEqual(result, expected, 'invalid authenticator returns other error');
      done();
    });
});

test('loginTwitter authenticates the user with valid twitter account', function(assert) {
  let service = this.subject();

  let done = assert.async();
  let expected = [];
  service
    .loginTwitter()
    .then((result) => {
      assert.deepEqual(result, expected, 'valid user/pass tuple returns no errors');
      done();
    });
});

test('parseToken returns a split OAuth identity and token', function(assert) {
  let service = this.subject();
  assert.ok(service, 'Service is ok');

  let msg = 'for valid token it returns and object with `identifier` and `token` keys';
  let result = service.parseToken('abc::123');
  let expected = { identity: 'abc', token: '123' };
  assert.deepEqual(result, expected, msg);

  msg = 'for empty string it returns null';
  result = service.parseToken('');
  expected = null;
  assert.equal(result, expected, msg);

  msg = 'for undefined it returns null';
  result = service.parseToken();
  expected = null;
  assert.equal(result, expected, msg);

  msg = 'for string without separator it returns null';
  result = service.parseToken('test');
  assert.equal(result, null, msg);
});
