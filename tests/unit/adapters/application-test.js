import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:application', 'Unit | Adapter | application', {
  // Specify the other units that are required for this test.
  needs: ['service:session']
});

test('API namespace is sandboxed under api/v1', function(assert) {
  let adapter = this.subject();
  assert.equal('api/v1', adapter.namespace);
});
