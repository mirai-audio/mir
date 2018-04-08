import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { currentURL, visit } from '@ember/test-helpers';
import { get } from '@ember/object';
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
    test('can visit /logout', async function(assert) {
      authenticateSession({
        userId: 1,
        otherData: 'some-data'
      });
      await visit('/logout');
      // verify they're logged out
      let session = currentSession();
      assert.notOk(get(session, 'isAuthenticated'));
    });
  });
});
