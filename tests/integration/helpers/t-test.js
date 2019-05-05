import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | t', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders an existing translation', async function(assert) {
    this.set('inputValue', 'common.appname');
    await render(hbs`{{t inputValue}}`);
    let result = this.element.textContent.trim();
    assert.equal(result, 'mirai.audio', 'translation renders');
  });

  test('it renders a key for a non-existing translation', async function(assert) {
    this.set('inputValue', 'common.xx-appname-xx');
    await render(hbs`{{t inputValue}}`);
    let result = this.element.textContent.trim();
    assert.equal(result, 'common.xx-appname-xx', 'translation key renders');
  });
});
