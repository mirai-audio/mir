import { setOwner } from '@ember/application';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from 'ember-test-helpers';
import hbs from 'htmlbars-inline-precompile';
import {
  registerTestComponent,
  unregisterTestComponent
} from 'mir/tests/ember-test-component';

module('Integration | Component | ma create media', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function({ test: testCtx }) {
    setOwner(this, this.owner);
    unregisterTestComponent(testCtx.testEnvironment);
  });

  test('it renders the create media form', async function(assert) {
    registerTestComponent(this);

    await render(hbs`{{ma-create-media}}`);

    let result = this.element.textContent.trim().indexOf('');
    let expected = -1;
    assert.equal(result, expected, 'has empty text content');

    // Template block usage:
    await render(hbs`
      {{#ma-create-media}}
        template block text
      {{/ma-create-media}}
    `);

    result = this.element.textContent.trim().indexOf('');
    expected = -1;
    assert.equal(result, expected, 'has empty text content');
  });
});
