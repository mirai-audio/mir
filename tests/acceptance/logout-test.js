import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { currentURL, visit } from '@ember/test-helpers';
import {
  authenticateSession,
  currentSession
} from 'ember-simple-auth/test-support';

module('Acceptance | logout', function(hooks) {
  setupApplicationTest(hooks);

  module('unauthenticated user', function(/* hooks */) {
    test('can visit /logout', async function(assert) {
      await visit('/logout');
      assert.equal(currentURL(), '/welcome');
    });
  });

  module('authenticated user', function(/* hooks */) {
    hooks.beforeEach(function() {
      authenticateSession({
        userId: 1,
        otherData: 'some-data'
      });
    });

    test('can visit /logout', async function(assert) {
      await visit('/logout');
      // verify they're logged out
      let session = currentSession();
      assert.notOk(session.isAuthenticated);
    });
  });
});
