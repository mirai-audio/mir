import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { click, currentURL, fillIn, visit } from '@ember/test-helpers';
import { authenticateSession } from 'ember-simple-auth/test-support';

module('Application | media/new', function(hooks) {
  setupApplicationTest(hooks);

  test('unauthenticated user cannot visit /media/new', async function(assert) {
    await visit('/media/new');
    assert.equal(currentURL(), '/login');
  });

  module('authenticated user', function(hooks) {
    hooks.beforeEach(function() {
      authenticateSession({
        userId: 1,
        otherData: 'some-data'
      });
    });

    test('can visit /media/new', async function(assert) {
      await visit('/media/new');
      assert.equal(currentURL(), '/media/new');
    });

    test('cant add invalid media', async function(assert) {
      await visit('/media/new');
      await click('button');
      assert.equal(currentURL(), '/media/new');
    });

    test('can abort creating media', async function(assert) {
      assert.expect(3);
      // create an OAuth media w/ ember-cli-mirage
      server.create('media');
      // count how many media currently exist
      await visit('/');
      let numMedia = this.element.querySelectorAll('.ma-MediaListItem').length;
      // visit create media page
      await visit('/media/new');
      assert.equal(currentURL(), '/media/new', 'user lands on new route');
      await fillIn('[name=title]', 'asdf title');
      await fillIn('[name=url]', 'http://t.co');
      // abort creation
      await visit('/'); // dont click back because it'll break test runner
      assert.equal(currentURL(), '/', 'user lands on home route');
      let resultNumMedia = this.element.querySelectorAll('.ma-MediaListItem')
        .length;
      assert.equal(numMedia, resultNumMedia, 'a new media was not created');
    });

    test('can add and delete valid media', async function(assert) {
      assert.expect(3);
      // create an OAuth token w/ ember-cli-mirage
      await visit('/media/new');
      await fillIn('[name=title]', 'asdf title');
      await fillIn('[name=url]', 'http://t.co');
      await click('button');
      let result = currentURL().startsWith('/media/');
      assert.ok(result, 'user lands on detail route');
      // navigate home
      await visit('/');
      let expected = this.element.querySelectorAll('.ma-MediaListItem').length;
      let msg = this.element.querySelector('.container').textContent;
      assert.notEqual(msg.match(/asdf title/), null);
      // delete new media
      await click('.ma-MediaListItem .ma-MediaListItem-delete');
      result = this.element.querySelectorAll('.ma-MediaListItem')
        ? this.element.querySelectorAll('.ma-MediaListItem').length
        : 0;
      assert.equal(result, expected - 1, 'media was deleted');
    });

    test('ma-create-media can gracefully handle errors', async function(assert) {
      assert.expect(1);
      // create an OAuth token w/ ember-cli-mirage
      // server.create('media');
      await visit('/media/new');
      await fillIn('[name=title]', 'test-force-500-error');
      await fillIn('[name=url]', 'http://t.co');
      await click('button');
      let msg = this.element
        .querySelector('.ma-ErrorsHandler-errors')
        .textContent.trim();
      assert.notEqual(msg.match(/An error occurred/), null);
    });
  });
});
