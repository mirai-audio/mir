import { Promise as EmberPromise } from 'rsvp';
import Service from '@ember/service';
import { A } from '@ember/array';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';

module('Unit | Service | auth', function(hooks) {
  setupTest(hooks);

  test('isAuthenticated returns boolean', function(assert) {
    let service = this.owner.factoryFor('service:auth').create({
      session: Service.extend({ isAuthenticated: true }).create()
    });
    let result = service.isAuthenticated();
    assert.equal(result, true, 'is true if session is authenticated');
    service = this.owner.factoryFor('service:auth').create({
      session: Service.extend({ isAuthenticated: 'xyz' }).create()
    });
    result = service.isAuthenticated();
    assert.equal(result, false, 'is false if session isnt set correctly');
  });

  test('loginUserPassword authenticates valid user with username/password', function(assert) {
    let done = assert.async();
    assert.expect(2);

    let mockSession = Service.extend({
      session: {
        authenticated: {
          code: 'abc123xyzDEF::000123'
        }
      },
      authenticate(/* authenticator, identity, password */) {
        return new EmberPromise(function(resolve /* , reject */) {
          const result = 'success';
          resolve(result);
        });
      }
    }).create();

    let service = this.owner.factoryFor('service:auth').create({
      isFastBoot: true,
      session: mockSession
    });

    let expected = A(); // empty array
    service
      .loginUserPassword('authenticator:ai', 'mike@example.com', 'Password1234')
      .then(result => {
        assert.deepEqual(
          result,
          expected,
          'valid user/pass tuple returns empty error array'
        );
        done();
      })
      .catch(() => assert.ok(true, 'this assertion is not expected'));
    assert.ok(service, 'Service is ok');
  });

  test('loginUserPassword does not authenticate invalid user with username/password', function(assert) {
    let done = assert.async();
    assert.expect(2);

    let mockSession = Service.extend({
      session: {
        authenticated: {
          code: 'abc123xyzDEF::000123'
        }
      },
      authenticate(/* authenticator, identity, password */) {
        return new EmberPromise(function(resolve, reject) {
          const result = { errors: A([{ code: 401 }]) }; // 401 error
          reject(result);
        });
      }
    }).create();

    let service = this.owner.factoryFor('service:auth').create({
      isFastBoot: true,
      session: mockSession
    });

    let expected = A(['errors.login.unauthorized']); // 401 error;
    service
      .loginUserPassword('authenticator:ai', 'mike@example.com', 'password')
      .then(result => {
        assert.deepEqual(
          result,
          expected,
          'invalid user/pass returns unauthorized error in errors array'
        );
        done();
      })
      .catch(() => assert.ok(true, 'this assertion is not expected'));
    assert.ok(service, 'Service is ok');
  });

  test('loginUserPassword handles server error', function(assert) {
    let done = assert.async();
    assert.expect(2);

    let mockSession = Service.extend({
      session: {
        authenticated: {
          code: 'abc123xyzDEF::000123'
        }
      },
      authenticate(/* authenticator, identity, password */) {
        return new EmberPromise(function(resolve, reject) {
          const result = { errors: A([{ code: 503 }]) }; // 503 service down
          reject(result);
        });
      }
    }).create();

    let service = this.owner.factoryFor('service:auth').create({
      isFastBoot: true,
      session: mockSession
    });

    let expected = A(['errors.login.other']);
    service
      .loginUserPassword('authenticator:ai', 'mike@example.com', 'password')
      .then(result => {
        assert.deepEqual(
          result,
          expected,
          'invalid user/pass returns other error in errors array'
        );
        done();
      })
      .catch(() => assert.ok(true, 'this assertion is not expected'));
    assert.ok(service, 'Service is ok');
  });

  test('loginUserPassword does not authenticate user with invalid authenticator', function(assert) {
    let done = assert.async();
    assert.expect(2);

    let mockSession = Service.extend({
      session: {
        authenticated: {
          code: 'abc123xyzDEF::000123'
        }
      },
      authenticate(/* authenticator, identity, password */) {
        return new EmberPromise(function(resolve, reject) {
          const result = { errors: A([{ code: 403 }]) }; // 403 error
          reject(result);
        });
      }
    }).create();

    let service = this.owner.factoryFor('service:auth').create({
      isFastBoot: true,
      session: mockSession
    });

    let expected = A(['errors.login.other']);
    service
      .loginUserPassword('authenticator:x', '', '')
      .then(result => {
        assert.deepEqual(
          result,
          expected,
          'invalid authenticator returns other error in errors array'
        );
        done();
      })
      .catch(() => assert.ok(true, 'this assertion is not expected'));
    assert.ok(service, 'Service is ok');
  });

  test('loginTwitter authenticates the user with valid twitter account', function(assert) {
    let done = assert.async();
    assert.expect(2);

    let mockSession = Service.extend({
      session: {
        authenticated: {
          code: 'abc123xyzDEF::000123'
        }
      },
      authenticate(authenticator /* , identity, password */) {
        return new EmberPromise(function(resolve /* , reject */) {
          let result = '';
          if (authenticator === 'authenticator:torii') {
            result = A();
            resolve(result);
          } else if (authenticator === 'authenticator:token') {
            result = A();
            resolve(result);
          }
        });
      }
    }).create();

    let service = this.owner.factoryFor('service:auth').create({
      isFastBoot: true,
      session: mockSession
    });

    let expected = A();
    service
      .loginTwitter()
      .then(result => {
        assert.deepEqual(
          result,
          expected,
          'valid user/pass tuple returns no errors in error array'
        );
        done();
      })
      .catch(() => assert.ok(true, 'this assertion is not expected'));
    assert.ok(service, 'Service is ok');
  });

  test('loginTwitter does not authenticate user with invalid (remote) twitter account', function(assert) {
    let done = assert.async();
    assert.expect(2);

    // mock a failing auth service
    let mockSession = Service.extend({
      authenticate(/* authenticator, identity, password */) {
        return new EmberPromise(function(resolve /* , reject */) {
          resolve(A(['errors.login.other']));
        });
      }
    }).create();
    let service = this.owner.factoryFor('service:auth').create({
      isFastBoot: true,
      session: mockSession
    });

    let expected = A(['errors.login.other']);
    service
      .loginTwitter()
      .then(result => {
        assert.deepEqual(
          result,
          expected,
          'valid user/pass tuple returns no errors in errors array'
        );
        done();
      })
      .catch(() => assert.ok(true, 'this assertion is not expected'));
    assert.ok(service, 'Service is ok');
  });

  test('loginTwitter does not authenticate user with invalid (local) twitter account', function(assert) {
    let done = assert.async();
    assert.expect(2);

    // mock a failing auth service
    let mockSession = Service.extend({
      authenticate(/* authenticator, identity, password */) {
        return new EmberPromise(function(resolve) {
          resolve(true);
        });
      }
    }).create();
    let service = this.owner.factoryFor('service:auth').create({
      isFastBoot: true,
      session: mockSession,
      loginUserPassword() {
        throw { message: 'A fake error in auth.loginUserPassword' };
      }
    });

    let expected = A(['errors.login.other']);
    service
      .loginTwitter()
      .then(result => {
        assert.deepEqual(
          result,
          expected,
          'a local user error in the errors array'
        );
        done();
      })
      .catch(() => assert.ok(true, 'this assertion is not expected'));
    assert.ok(service, 'Service is ok');
  });

  test('_fetchUser returns a cached user if it exists', async function(assert) {
    assert.expect(2);

    let mockFetched = EmberObject.create({
      user: { id: '1' },
      errors: A()
    });
    let mockSession = Service.extend({
      user: mockFetched.user
    }).create();

    let service = this.owner.factoryFor('service:auth').create({
      session: mockSession
    });
    let user = await service._fetchUser();
    assert.deepEqual(user, mockFetched, 'mocked user was returned');
    assert.ok(service, 'Service is ok');
  });

  test('_parseToken returns a split OAuth identity and token', function(assert) {
    assert.expect(5);

    this.owner.register('service:session', Service.extend({}));
    let service = this.owner.lookup('service:auth');

    assert.ok(service, 'Service is ok');

    let msg =
      'for valid token it returns and object with `identifier` and `token` keys';
    let result = service._parseToken('abc::123');
    let expected = { identity: 'abc', token: '123' };
    assert.deepEqual(result, expected, msg);

    msg = 'for empty string it returns null';
    result = service._parseToken('');
    expected = null;
    assert.equal(result, expected, msg);

    msg = 'for undefined it returns null';
    result = service._parseToken();
    expected = null;
    assert.equal(result, expected, msg);

    msg = 'for string without separator it returns null';
    result = service._parseToken('test');
    assert.equal(result, null, msg);
  });
});
