import { Promise as EmberPromise } from 'rsvp';
import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | auth', function(hooks) {
  setupTest(hooks);

  test('loginUserPassword authenticates the user with valid username / password', function(assert) {
    this.owner.register('service:session', Service.extend({
      session: {
        authenticated: {
          code: 'abc123xyzDEF::000123',
        },
      },
      authenticate(/* authenticator, identity, password */) {
        return new EmberPromise(function(resolve /* , reject */) {
          const result = 'success';
          resolve(result);
        });
      },
    }));

    let service = this.owner.factoryFor('service:auth').create({ isFastBoot: true });
    assert.expect(2);
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

  test('loginUserPassword does not authenticate user with invalid username / password', function(assert) {
    this.owner.register('service:session', Service.extend({
      session: {
        authenticated: {
          code: 'abc123xyzDEF::000123',
        },
      },
      authenticate(/* authenticator, identity, password */) {
        return new EmberPromise(function(resolve, reject) {
          const result = {
            errors: [
              { code: 401, },
            ],
          };
          reject(result);
        });
      },
    }));

    assert.expect(1);

    let service = this.owner.lookup('service:auth');

    let done = assert.async();
    let expected = ['errors.login.unauthorized'];
    service
      .loginUserPassword('authenticator:ai', 'mike@example.com', 'password')
      .then((result) => {
        assert.deepEqual(result, expected, 'invalid user/pass returns unauthorized error');
        done();
      });
  });

  test('loginUserPassword does not authenticate user with invalid authenticator', function(assert) {
    this.owner.register('service:session', Service.extend({
      session: {
        authenticated: {
          code: 'abc123xyzDEF::000123',
        },
      },
      authenticate(/* authenticator, identity, password */) {
        return new EmberPromise(function(resolve, reject) {
          const result = {
            errors: [
              { code: 403, },
            ],
          };
          reject(result);
        });
      },
    }));

    assert.expect(1);

    let service = this.owner.lookup('service:auth');

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
    this.owner.register('service:session', Service.extend({
      session: {
        authenticated: {
          code: 'abc123xyzDEF::000123',
        },
      },
      authenticate(authenticator /* , identity, password */) {
        return new EmberPromise(function(resolve /* , reject */) {
          let result = '';
          if (authenticator === 'authenticator:torii') {
            result = [];
            resolve(result);
          } else if (authenticator === 'authenticator:token') {
            result = [];
            resolve(result);
          }
        });
      },
    }));

    assert.expect(1);
    let done = assert.async();

    let service = this.owner.lookup('service:auth');

    let expected = [];
    service
      .loginTwitter()
      .then((result) => {
        assert.deepEqual(result, expected, 'valid user/pass tuple returns no errors');
        done();
      });
  });

  test('loginTwitter does not authenticate user with invalid (remote) twitter account', function(assert) {
    // mock a failing auth service
    this.owner.register('service:session', Service.extend({
      authenticate(/* authenticator, identity, password */) {
        return new EmberPromise(function(resolve /* , reject */) {
          resolve(['errors.login.other']);
        });
      },
    }));
    let service = this.owner.lookup('service:auth');

    let done = assert.async();
    let expected = ['errors.login.other'];
    service
      .loginTwitter()
      .then((result) => {
        assert.deepEqual(result, expected, 'valid user/pass tuple returns no errors');
        done();
      });
  });

  test('loginTwitter does not authenticate user with invalid (local) twitter account', function(assert) {
    // mock a failing auth service
    this.owner.register('service:session', Service.extend({
      authenticate(/* authenticator, identity, password */) {
        return new EmberPromise(function(resolve, reject) {
          reject(['errors.login.other']);
        });
      },
    }));
    let service = this.owner.lookup('service:auth');

    let done = assert.async();
    let expected = ['errors.login.other'];
    service
      .loginTwitter()
      .then((result) => {
        assert.deepEqual(result, expected, 'valid user/pass tuple returns no errors');
        done();
      });
  });

  test('parseToken returns a split OAuth identity and token', function(assert) {
    this.owner.register('service:session', Service.extend({}));
    let service = this.owner.lookup('service:auth');

    assert.expect(5);
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
});
