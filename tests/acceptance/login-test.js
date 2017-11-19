import {
  click,
  fillIn,
  currentURL,
  find,
  blur,
  visit,
} from 'ember-native-dom-helpers';
import { test } from 'qunit';
import { authenticateSession } from 'mir/tests/helpers/ember-simple-auth';
import moduleForAcceptance from 'mir/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('unauthenticated users can visit /login', async function(assert) {
  await visit('/login');

  assert.equal(currentURL(), '/login');
});

test('unauthenticated users must supply a strong password', async function(
  assert,
) {
  await visit('/login');
  await fillIn('[name=email]', `mike+${new Date().getTime()}@example.com`);
  await fillIn('[name=password]', 'Password');
  await blur('[name=password]');

  let msg = find('.ma-Login .help.is-danger').textContent;
  assert.notEqual(msg.match(/too short/), null);
});

test('unauthenticated users cannot create an account without confirming password', async function(
  assert,
) {
  await visit('/login');
  await fillIn('[name=email]', `mike+${new Date().getTime()}@example.com`);
  await fillIn('[name=password]', 'Password1234');
  await fillIn('[name=password_confirmation]', '');
  await blur('[name=password_confirmation]');

  let msg = find('.help.is-danger').textContent;
  assert.notEqual(msg.match(/password/), null);
  assert.dom('[data-test=signup][disabled]').exists({ count: 1 });
});

test('unauthenticated users must supply a valid email address', async function(
  assert,
) {
  await visit('/login');
  await fillIn('[name=email]', 'a@b.c');
  await blur('[name=email]');

  let msg = find('.ma-Login .help.is-danger').textContent;
  assert.notEqual(msg.match(/valid email/), null);
  assert.dom('.ma-Login button[disabled]').exists({ count: 1 });
});

test('unauthenticated users can create an account with email & password', async function(
  assert,
) {
  // create an OAuth token w/ ember-cli-mirage
  server.create('token');
  server.create('user');

  // user visits login and fills in signup form
  await visit('/login');
  await fillIn('[name=email]', `mike+${new Date().getTime()}@example.com`);
  await fillIn('[name=password]', 'Password1234');
  await fillIn('[name=password_confirmation]', 'Password1234');
  // user clicks signup button
  await click('.ma-Auth [data-test=signup]');

  // user lands on index page
  assert.equal(currentURL(), '/');
});

test('unauthenticated users cannot create an account with existing users email', async function(
  assert,
) {
  // user visits login and fills in signup form
  await visit('/login');
  await fillIn('[name=email]', 'mike@example.com');
  await fillIn('[name=password]', 'Password1234');
  await fillIn('[name=password_confirmation]', 'Password1234');
  // user clicks signup button
  await click('.ma-Auth [data-test=signup]');

  // user is still on Login page
  assert.equal(currentURL(), '/login');
});

test('unauthenticated user can login to an account with email & password', async function(
  assert,
) {
  // create an OAuth token
  server.create('token');

  // user visits login and fills in signup form
  await visit('/login');
  await fillIn('[name=email]', `mike+${new Date().getTime()}@example.com`);
  await fillIn('[name=password]', 'Password1234');
  // user clicks login button
  await click('.ma-Login [data-test=login]');

  // user lands on index page
  assert.equal(currentURL(), '/');
});

test('authenticated users can visit /login and redirect to /', async function(
  assert,
) {
  const app = this.application;

  authenticateSession(app, {
    userId: 1,
    otherData: 'some-data',
  });
  await visit('/login');

  assert.equal(currentURL(), '/');
});

test('unauthenticated user can click back link to Home', async function(
  assert,
) {
  // user visits login and fills in signup form
  await visit('/login');
  // user clicks signup button
  await click('.ma-Header .ma-Header-link--back');

  // user lands on welcome page
  assert.equal(currentURL(), '/welcome');
});
