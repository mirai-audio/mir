import { test } from 'qunit';
import {
  authenticateSession,
  currentSession,
} from 'mir/tests/helpers/ember-simple-auth';
import moduleForAcceptance from 'mir/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | logout');

test('unauthenticated users can visit /logout', function(assert) {
  visit('/logout');

  andThen(function() {
    assert.equal(currentURL(), '/welcome');
  });
});

test('authenticated users can visit /logout', function(assert) {
  const app = this.application;

  authenticateSession(app, {
    userId: 1,
    otherData: 'some-data',
  });
  visit('/logout');

  andThen(function() {
    // verify they're logged out
    let session = currentSession(app);
    assert.notOk(session.get('isAuthenticated'));
    // wait for the url to change
    let curURL = currentURL;
    setTimeout(function() {
      assert.equal(curURL(), '/welcome');
    }, 550);
  });
});
