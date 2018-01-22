import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { find } from 'ember-native-dom-helpers';
import EmberObject, { set } from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ma media list item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with sane defaults', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{ma-media-list-item}}`);
    let className = find('.ma-MediaListItem', this.element);
    assert.notEqual(className, null, 'component exists');

    // Template block yields content
    await render(hbs`
      {{#ma-media-list-item}}
        template block text
      {{/ma-media-list-item}}
    `);

    let result = this.element.textContent.trim().indexOf('template block text');
    assert.notEqual(result, -1, 'template block yields its contents');
  });

  test('it renders its model contents', async function(assert) {
    let model = EmberObject.create({
      title: 'a good title',
      url: 'http://t.co/url'
    });
    set(this, 'model', model);

    await render(hbs`{{ma-media-list-item model=model}}`);
    let hasTitle = find('.ma-MediaListItem-title', this.element)
      .textContent.trim()
      .indexOf(model.title);
    assert.notEqual(hasTitle, -1, 'it renders the title');
  });

  test('it can be deleted', async function(assert) {
    assert.expect(1);

    let model = EmberObject.create({
      title: 'a deletable title',
      url: 'http://t.co/url',
      destroyRecord() {
        assert.ok(true, 'destroyRecord was called');
      }
    });
    set(this, 'model', model);

    await render(hbs`{{ma-media-list-item model=model}}`);
    await click('.ma-MediaListItem-delete');
  });
});
