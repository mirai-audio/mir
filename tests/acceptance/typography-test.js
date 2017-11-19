import { currentURL, visit } from 'ember-native-dom-helpers';
import { test } from 'qunit';
import { authenticateSession } from 'mir/tests/helpers/ember-simple-auth';
import moduleForAcceptance from 'mir/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | typography');

test('unauthenticated users visit /typography land on /login', async function(
  assert,
) {
  assert.expect(1);
  await visit('/typography');

  assert.equal(currentURL(), '/login');
});

test('authenticated users can visit /typography', async function(assert) {
  authenticateSession(this.application, {
    userId: 1,
    otherData: 'some-data',
  });

  await visit('/typography');

  assert.equal(currentURL(), '/typography');
});
