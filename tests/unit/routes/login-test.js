import { later } from '@ember/runloop';
import EmberObject from '@ember/object';
import { get, set } from '@ember/object';
import { Promise as EmberPromise } from 'rsvp';
import Service from '@ember/service';
import { moduleFor, test } from 'ember-qunit';


moduleFor('route:login', 'Unit | Route | login', {
  // Specify the other units that are required for this test.
  needs: [
    'service:auth',
    'service:session',
  ],
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test(
  'unauthenticated user can login to an account using Twitter',
  function(assert) {
    // mock the Auth service
    this.register('service:auth', Service.extend({
      loginTwitter() {
        return new EmberPromise(function(resolve) {
          const result = ['errors.login.other'];
          resolve(result);
        });
      },
    }));

    assert.expect(2);
    const done = assert.async();

    let route = this.subject();
    assert.ok(route);

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
  }
);
