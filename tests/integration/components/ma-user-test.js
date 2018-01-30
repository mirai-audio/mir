import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ma user', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // inline usage
    await render(hbs`{{ma-user}}`);
    assert.dom(this.element).hasText('');

    // template block usage
    await render(hbs`
      {{#ma-user}}
        template block text
      {{/ma-user}}
    `);
    assert.dom(this.element).hasText('template block text');
  });
});
