import { test } from 'qunit';
import {
  authenticateSession,
} from 'mir/tests/helpers/ember-simple-auth';
import moduleForAcceptance from 'mir/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('unauthenticated users can visit /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test(
  'unauthenticated users must supply a strong password',
  function(assert) {
    visit('/login');
    fillIn('[name=email]', `mike+${new Date().getTime()}@example.com`);
    fillIn('[name=password]', 'Password');
    triggerEvent('[name=password]', 'blur');

    andThen(function() {
      let msg = find('.ma-Login .is-danger').text();
      assert.notEqual(msg.match(/too short/), null);
    });
  }
);

test(
  'unauthenticated users cannot create an account without confirming password',
  function(assert) {
    visit('/login');
    fillIn('[name=email]', `mike+${new Date().getTime()}@example.com`);
    fillIn('[name=password]', 'Password1234');
    fillIn('[name=password_confirmation]', '');
    triggerEvent('[name=password_confirmation]', 'blur');

    andThen(function() {
      let msg = find('.help.is-danger').text();
      assert.notEqual(msg.match(/password/), null);
      assert.equal(find('.ma-Auth button[disabled]').length, 1);
    });
  }
);

test(
  'unauthenticated users must supply a valid email address',
  function(assert) {
    visit('/login');
    fillIn('[name=email]', 'a@b.c');
    triggerEvent('[name=email]', 'blur');

    andThen(function() {
      let msg = find('.ma-Login .is-danger').text();
      assert.notEqual(msg.match(/valid email/), null);
      assert.equal(find('.ma-Login button[disabled]').length, 1);
    });
  }
);

test(
  'unauthenticated users can create an account with email & password',
  function(assert) {
    // create an OAuth token w/ ember-cli-mirage
    server.create('token');
    server.create('user');

    // user visits login and fills in signup form
    visit('/login');
    fillIn('[name=email]', `mike+${new Date().getTime()}@example.com`);
    fillIn('[name=password]', 'Password1234');
    fillIn('[name=password_confirmation]', 'Password1234');
    // user clicks signup button
    click('.ma-Auth [data-test=signup]');

    andThen(function() {
      // user lands on index page
      assert.equal(currentURL(), '/');
    });
  }
);

test(
  'unauthenticated users cannot create an account with existing users email',
  function(assert) {
    // user visits login and fills in signup form
    visit('/login');
    fillIn('[name=email]', 'mike@example.com');
    fillIn('[name=password]', 'Password1234');
    fillIn('[name=password_confirmation]', 'Password1234');
    // user clicks signup button
    click('.ma-Auth [data-test=signup]');

    andThen(function() {
      // user is still on Login page
      assert.equal(currentURL(), '/login');
    });
  }
);

test(
  'unauthenticated user can login to an account with email & password',
  function(assert) {
    // create an OAuth token
    server.create('token');

    // user visits login and fills in signup form
    visit('/login');
    fillIn('[name=email]', `mike+${new Date().getTime()}@example.com`);
    fillIn('[name=password]', 'Password1234');
    fillIn('[name=password_confirmation]', 'Password1234');
    // user clicks login button
    click('.ma-Login [data-test=login]');

    andThen(function() {
      // user lands on index page
      assert.equal(currentURL(), '/');
    });
  }
);

test('authenticated users can visit /login and redirect to /', function(assert) {
  const app = this.application;

  authenticateSession(app, {
    userId: 1,
    otherData: 'some-data',
  });
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('unauthenticated user can click back link to Home', function(assert) {
  // user visits login and fills in signup form
  visit('/login');
  // user clicks signup button
  click('.ma-Header .ma-Header-Link');

  andThen(function() {
    // user lands on welcome page
    assert.equal(currentURL(), '/welcome');
  });
});
