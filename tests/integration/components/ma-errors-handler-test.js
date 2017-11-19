import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from 'ember-test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ma errors handler', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders blank without errors', async function(assert) {
    await render(hbs`{{ma-errors-handler}}`);
    assert.dom(this.element).hasText('');
  });

  test('it renders error messages', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    const keys = ['errors.login.other', 'errors.login.unauthorized'];
    this.set('errorMessageKeys', keys);
    // Handle any actions with this.on('myAction', function(val) { ... });
    await render(hbs`{{ma-errors-handler errorMessageKeys=errorMessageKeys}}`);
    assert.notEqual(
      this.element.textContent.trim().indexOf('An error occurred'),
      -1,
    );
    assert.notEqual(
      this.element.textContent.trim().indexOf('Email or password is incorrect'),
      -1,
    );
  });
});
