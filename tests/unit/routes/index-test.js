import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get } from '@ember/object';
import { later } from '@ember/runloop';
import Service from '@ember/service';
import { startMirage } from 'mir/initializers/ember-cli-mirage';


module('Unit | Route | index', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    // start mirage manually before a unit test
    this.server = startMirage();
  });

  hooks.afterEach(function() {
    // manually shut down mirage
    this.server.shutdown();
  });

  test('it handles signup errors properly', function(assert) {
    // mock the `session` service
    this.owner.register('service:session', Service.extend({
      session: {
        authenticated: {
          authenticator: 'authenticator:ai',
        },
        content: {
          authenticated: {
            access_token: 'abc::123',
          },
        },
      },
    }));

    // mock a failed response
    let mockResponse = {
      errors: ['errors.login.other'],
    };
    server.get('/users/current', mockResponse, 500);

    let route = this.owner.lookup('route:index');
    assert.expect(2);
    const done = assert.async();

    assert.ok(route);

    later(() => {
      const expected = 'errors.login.other';
      const result = get(route, 'errorMessageKeys').toString();
      assert.equal(result, expected, 'login error was set');
      done();
    }, 250);

    route.afterModel();
  });
});
