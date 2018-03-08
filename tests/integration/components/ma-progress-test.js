import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ma-progress', function(hooks) {
  setupRenderingTest(hooks);

  test('it shows progress when loading', async function(assert) {
    await render(hbs`{{ma-progress isLoading=true}}`);
    assert.equal(
      this.element.firstChild.classList.contains('is-active'),
      true,
      'has is-active class'
    );
    await render(hbs`{{ma-progress isLoading=false}}`);
    assert.equal(
      this.element.firstChild.classList.contains('is-active'),
      false,
      'no is-active class'
    );
  });
});
