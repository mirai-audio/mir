import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | application', function(hooks) {
  setupTest(hooks);

  test('API namespace is sandboxed under api/v1', function(assert) {
    let adapter = this.owner.lookup('adapter:application');
    assert.equal('api/v1', adapter.namespace);
  });
});
