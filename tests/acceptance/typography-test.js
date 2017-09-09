import { test } from 'qunit';
import {
  authenticateSession,
} from 'mir/tests/helpers/ember-simple-auth';
import moduleForAcceptance from 'mir/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | typography');

test('unauthenticated users visit /typography land on /login', function(assert) {
  visit('/typography');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('authenticated users can visit /typography', function(assert) {
  authenticateSession(this.application, {
    userId: 1,
    otherData: 'some-data',
  });

  visit('/typography');

  andThen(function() {
    assert.equal(currentURL(), '/typography');
  });
});
