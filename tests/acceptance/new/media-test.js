import { click, currentURL, find, visit } from 'ember-native-dom-helpers';
import { test } from 'qunit';
import { authenticateSession } from 'mir/tests/helpers/ember-simple-auth';
import moduleForAcceptance from 'mir/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | new/media');

test('unauthenticated user cannot visit /new/media', async function(assert) {
  await visit('/new/media');

  assert.equal(currentURL(), '/login');
});

test('authenticated user can visit /new/media', async function(assert) {
  authenticateSession(this.application, {
    userId: 1,
    otherData: 'some-data'
  });
  await visit('/new/media');

  assert.equal(currentURL(), '/new/media');
});

test('authenticated user cant add invalid media', async function(assert) {
  authenticateSession(this.application, {
    userId: 1,
    otherData: 'some-data'
  });
  await visit('/new/media');

  await click('button');
  assert.equal(currentURL(), '/new/media');
});

test('authenticated user can add valid media', async function(assert) {
  assert.expect(2);

  // create an OAuth token w/ ember-cli-mirage
  server.create('media');

  // authenticate user
  authenticateSession(this.application, {
    userId: 1,
    otherData: 'some-data'
  });
  await visit('/new/media');

  await fillIn('[name=title]', 'asdf title');
  await fillIn('[name=url]', 'http://t.co');
  await click('button');
  assert.equal(currentURL(), '/', 'user lands on home route');

  let msg = find('.container').textContent;
  assert.notEqual(msg.match(/Song title /), null);
});

test('ma-create-media can gracefully handle errors', async function(assert) {
  assert.expect(1);

  // create an OAuth token w/ ember-cli-mirage
  server.create('media');

  // authenticate user
  authenticateSession(this.application, {
    userId: 1,
    otherData: 'some-data'
  });
  await visit('/new/media');

  await fillIn('[name=title]', 'test-force-500-error');
  await fillIn('[name=url]', 'http://t.co');
  await click('button');

  let msg = find('.ma-ErrorsHandler-errors').textContent.trim();
  assert.notEqual(msg.match(/An error occurred/), null);
});
