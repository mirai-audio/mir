import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:index', 'Unit | Route | index', {
  // Specify the other units that are required for this test.
  needs: [
    'service:session',
    'service:fastboot',
  ],
});

test('it handles signup errors properly', function(assert) {
  // mock the `session` service
  this.register('service:session', Ember.Service.extend({
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

  let route = this.subject();
  assert.expect(2);
  const done = assert.async();

  assert.ok(route);

  Ember.run.later(() => {
    const expected = ['errors.login.other'];
    const result = route.get('errorMessageKeys');
    assert.deepEqual(result, expected, 'login error was set');
    done();
  }, 250);

  route.afterModel();
});
