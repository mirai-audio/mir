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
