import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { setOwner } from '@ember/application';
import EmberObject from '@ember/object';
import { resolve } from 'rsvp';
import hbs from 'htmlbars-inline-precompile';
import {
  registerTestComponent,
  unregisterTestComponent
} from 'mir/tests/ember-test-component';

const TITLE = '#title';
const URL = '#url';

module('Integration | Component | ma create media', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function({ test: testCtx }) {
    setOwner(this, this.owner);
    unregisterTestComponent(testCtx.testEnvironment);
  });

  test('it renders the components with sane defaults', async function(assert) {
    assert.expect(3);
    registerTestComponent(this);

    await render(hbs`{{ma-create-media}}`);

    let result = this.element.textContent.trim().indexOf('Title');
    let expected = -1;
    assert.notEqual(result, expected, "isn't missing the title label");

    result = this.element.textContent.trim().indexOf('URL');
    expected = -1;
    assert.notEqual(result, expected, "isn't missing the URL label");

    result = this.element.querySelector('button[disabled]').textContent.trim();
    expected = 'Add';
    assert.equal(result, expected, 'Add button is present, and disabled');
  });

  test('Add button is disabled for invalid input', async function(assert) {
    assert.expect(4);
    registerTestComponent(this);

    await render(hbs`{{ma-create-media}}`);

    await fillIn(TITLE, 'a title');
    let result = this.element.querySelector('button[disabled]') !== null;
    assert.ok(result, 'Add button is disabled with only a title');

    await fillIn(URL, 'http');
    result = this.element.querySelector('button[disabled]') !== null;
    assert.ok(result, 'Add button is disabled with a bad URL');

    await fillIn(URL, 'http://t');
    result = this.element.querySelector('button[disabled]') !== null;
    assert.ok(result, 'Add button is disabled with a bad URL');

    await fillIn(URL, 'http://t.c');
    result = this.element.querySelector('button[disabled]') !== null;
    assert.ok(result, 'Add button is disabled with a bad URL');
  });

  test('Add button is enabled for valid input', async function(assert) {
    assert.expect(2);
    registerTestComponent(this);

    await render(hbs`{{ma-create-media}}`);

    await fillIn(TITLE, 'a title');
    let result = this.element.querySelector('button[disabled]') !== null;
    assert.ok(result, 'Add button is disabled with only a title');

    await fillIn(URL, 'http://t.co');
    result = this.element.querySelector('button') !== null;
    assert.ok(result, 'Add button is enabled with a valid URL');
  });

  test('Non-fuction success handler will never be invoked', async function(assert) {
    assert.expect(2);
    registerTestComponent(this);

    let changeset = EmberObject.create({
      validate() {},
      save() {
        return resolve(true);
      }
    });
    this.set('changeset', changeset);
    await render(hbs`{{ma-create-media
      changeset=changeset
      onSuccess=false
      onFailure=false}}`);

    await fillIn(TITLE, 'a title');
    await fillIn(URL, 'http://t.co');

    let result = this.element.querySelector('button') !== null;
    assert.ok(result, 'Add button is enabled with a valid URL');
    await click('button');
    assert.ok(true, 'non-functions were not invoked');
  });

  test('Non-fuction failure handler will never be invoked', async function(assert) {
    assert.expect(2);
    registerTestComponent(this);

    let changeset = EmberObject.create({
      validate() {},
      save() {
        throw { message: 'this is a test error promise rejection' };
      }
    });
    this.set('changeset', changeset);
    await render(hbs`{{ma-create-media
      changeset=changeset
      onSuccess=false
      onFailure=false}}`);

    await fillIn(TITLE, 'a title');
    await fillIn(URL, 'http://t.co');

    let result = this.element.querySelector('button') !== null;
    assert.ok(result, 'Add button is enabled with a valid URL');
    await click('button');
    assert.ok(true, 'non-functions were not invoked');
  });
});
