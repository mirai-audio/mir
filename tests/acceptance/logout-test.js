import { currentURL, visit } from 'ember-native-dom-helpers';
import { test } from 'qunit';
import { get } from '@ember/object';
import {
  authenticateSession,
  currentSession,
} from 'mir/tests/helpers/ember-simple-auth';
import moduleForAcceptance from 'mir/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | logout');

test('unauthenticated users can visit /logout', async function(assert) {
  await visit('/logout');

  assert.equal(currentURL(), '/welcome');
});

test('authenticated users can visit /logout', async function(assert) {
  const app = this.application;

  authenticateSession(app, {
    userId: 1,
    otherData: 'some-data',
  });
  await visit('/logout');

  // verify they're logged out
  let session = currentSession(app);
  assert.notOk(get(session, 'isAuthenticated'));
});
