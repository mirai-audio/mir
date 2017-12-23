import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { later } from '@ember/runloop';
import { get } from '@ember/object';

module('Unit | Model | media', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let done = assert.async();

    let store = this.owner.lookup('service:store');

    // TODO: Hack, `createRecord` in a runloop
    // see: https://github.com/mirai-audio/mir/issues/45
    later(() => {
      let model = store.createRecord('media');
      assert.ok(!!model);
      done();
    });
  });

  test('it has sane properties when set', function(assert) {
    let done = assert.async();
    assert.expect(2);

    let store = this.owner.lookup('service:store');

    // TODO: Hack, `createRecord` in a runloop
    // see: https://github.com/mirai-audio/mir/issues/45
    later(() => {
      let values = {
        title: 'test media',
        url: 'https://example.com?query=value&token=abc123#hash'
      };
      let model = store.createRecord('media', values);
      assert.equal(get(model, 'title'), values.title);
      assert.equal(get(model, 'url'), values.url);
      done();
    });
  });
});
