import { test } from 'qunit';
import moduleForAcceptance from 'mir/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting / unauthenticated should redirect to /welcome', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/welcome');
  });
});

test('visiting /styleguide unauthenticated should redirect to /login', function(assert) {
  visit('/styleguide');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('visiting /typography unauthenticated should redirect to /login', function(assert) {
  visit('/typography');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

/* ToDo, how to get this working when no backend is available to test against?
test('visiting / authorized is allowed for new users', function(assert) {
  visit('/login');
  fillIn('[name=email]', `mike+${new Date().getTime()}@example.com`);
  fillIn('[name=password]', 'Password1234');
  fillIn('[name=password_confirmation]', 'Password1234');
  click('[data-test=cta-signup]');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
 */
