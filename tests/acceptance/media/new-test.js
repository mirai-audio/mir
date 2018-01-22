import {
  click,
  currentURL,
  find,
  fillIn,
  visit
} from 'ember-native-dom-helpers';
import { test } from 'qunit';
import { authenticateSession } from 'mir/tests/helpers/ember-simple-auth';
// import { authenticateSession } from 'ember-simple-auth/test-support'; // TODO use new style helper
import moduleForAcceptance from 'mir/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | media/new');

test('unauthenticated user cannot visit /media/new', async function(assert) {
  await visit('/media/new');

  assert.equal(currentURL(), '/login');
});

test('authenticated user can visit /media/new', async function(assert) {
  authenticateSession(this.application, {
    userId: 1,
    otherData: 'some-data'
  });
  await visit('/media/new');

  assert.equal(currentURL(), '/media/new');
});

test('authenticated user cant add invalid media', async function(assert) {
  authenticateSession(this.application, {
    userId: 1,
    otherData: 'some-data'
  });
  await visit('/media/new');

  await click('button');
  assert.equal(currentURL(), '/media/new');
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
  await visit('/media/new');

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
  await visit('/media/new');

  await fillIn('[name=title]', 'test-force-500-error');
  await fillIn('[name=url]', 'http://t.co');
  await click('button');

  let msg = find('.ma-ErrorsHandler-errors').textContent.trim();
  assert.notEqual(msg.match(/An error occurred/), null);
});

test('authenticated user abort can abort creating media', async function(assert) {
  assert.expect(3);

  // create an OAuth token w/ ember-cli-mirage
  server.create('media');

  // authenticate user
  authenticateSession(this.application, {
    userId: 1,
    otherData: 'some-data'
  });

  // count how many media currently exist
  await visit('/');
  let numMedia = find('.ma-MediaListItem').length;

  // visit create media page
  await visit('/media/new');
  assert.equal(currentURL(), '/media/new', 'user lands on new route');
  await fillIn('[name=title]', 'asdf title');
  await fillIn('[name=url]', 'http://t.co');
  // abort creation
  await visit('/'); // dont click back because it'll break test runner
  assert.equal(currentURL(), '/', 'user lands on home route');

  let resultNumMedia = find('.ma-MediaListItem').length;
  assert.equal(numMedia, resultNumMedia, 'a new media was not created');
});
