import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from 'ember-test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ma input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('inputId', 'username');

    await render(hbs`{{ma-input inputId=inputId}}`);
    assert.notEqual(this.element.innerHTML.trim().indexOf('username'), -1);
  });
});
