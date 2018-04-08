import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { currentURL, visit } from '@ember/test-helpers';

module('Acceptance | typography', function(hooks) {
  setupApplicationTest(hooks);

  test('users can visit /typography', async function(assert) {
    await visit('/typography');

    assert.equal(currentURL(), '/typography');
  });
});
