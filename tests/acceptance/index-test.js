import { click, fillIn, currentURL, visit } from 'ember-native-dom-helpers';
import { test } from 'qunit';
import moduleForAcceptance from 'mir/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting / unauthenticated should redirect to /welcome', async function(
  assert,
) {
  await visit('/');

  assert.equal(currentURL(), '/welcome');
});

test('visiting /styleguide unauthenticated should redirect to /login', async function(
  assert,
) {
  await visit('/styleguide');

  assert.equal(currentURL(), '/login');
});

test('visiting /typography unauthenticated should redirect to /login', async function(
  assert,
) {
  await visit('/typography');

  assert.equal(currentURL(), '/login');
});

test('visiting / authorized is allowed for new users', async function(assert) {
  // create an OAuth token w/ ember-cli-mirage
  server.create('token');
  server.create('user');

  await visit('/login');
  await fillIn('[name=email]', `mike+${new Date().getTime()}@example.com`);
  await fillIn('[name=password]', 'Password1234');
  await fillIn('[name=password_confirmation]', 'Password1234');
  await click('[data-test=signup]');

  assert.equal(currentURL(), '/');
});
