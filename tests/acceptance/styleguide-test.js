import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { currentURL, visit } from '@ember/test-helpers';
import { authenticateSession } from 'ember-simple-auth/test-support';

module('Application | styleguide', function(hooks) {
  setupApplicationTest(hooks);

  module('unauthenticated user', function(/* hooks */) {
    test('visit /styleguide land on /login', async function(assert) {
      assert.expect(1);
      await visit('/styleguide');
      assert.equal(currentURL(), '/login');
    });
  });

  module('authenticated user', function(hooks) {
    hooks.beforeEach(function() {
      authenticateSession({
        userId: 1,
        otherData: 'some-data'
      });
    });

    test('can visit /styleguide', async function(assert) {
      await visit('/styleguide');
      assert.equal(currentURL(), '/styleguide');
    });
  });
});
