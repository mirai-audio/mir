import { test } from 'qunit';
import {
  authenticateSession,
} from 'mir/tests/helpers/ember-simple-auth';
import moduleForAcceptance from 'mir/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | styleguide');

test('unauthenticated users visit /styleguide land on /login', function(assert) {
  visit('/styleguide');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('authenticated users can visit /styleguide', function(assert) {
  authenticateSession(this.application, {
    userId: 1,
    otherData: 'some-data',
  });

  visit('/styleguide');

  andThen(function() {
    assert.equal(currentURL(), '/styleguide');
  });
});
