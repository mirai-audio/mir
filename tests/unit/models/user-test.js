import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { later } from '@ember/runloop';

module('Unit | Model | user', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let done = assert.async();

    let store = this.owner.lookup('service:store');

    // TODO: Hack, `createRecord` in a runloop
    // see: https://github.com/mirai-audio/mir/issues/45
    later(() => {
      let model = store.createRecord('user');
      assert.ok(!!model);
      done();
    });
  });
});
