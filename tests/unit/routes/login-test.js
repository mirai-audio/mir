import { later } from '@ember/runloop';
import EmberObject from '@ember/object';
import { get, set } from '@ember/object';
import { Promise as EmberPromise } from 'rsvp';
import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | login', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:login');
    assert.ok(route);
  });

  test('unauthenticated user can login to an account using Twitter', function(assert) {
    const done = assert.async();
    assert.expect(2);

    // mock the Auth service
    let mockAuth = Service.extend({
      loginTwitter() {
        return new EmberPromise(function(resolve) {
          const result = { errors: ['errors.login.other'] };
          resolve(result);
        });
      }
    });
    this.owner.register('service:auth', mockAuth);

    let route = this.owner.lookup('route:login');

    // mock the controller on the route
    set(route, 'controller', EmberObject.create());

    later(() => {
      const expected = ['errors.login.other'];
      const result = get(route, 'controller.errorMessageKeys');
      assert.deepEqual(result, expected, 'login error was set');
      done();
    }, 50);

    // invoke route action
    route.actions.loginTwitter.apply(route);
    assert.ok(route);
  });
});
