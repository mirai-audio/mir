import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:application', 'Unit | Adapter | application', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);

  assert.equal('api/v1', adapter.namespace);
});

test('API namespace is sandboxed under api/v1', function(assert) {
  let adapter = this.subject();
  assert.equal('api/v1', adapter.namespace);
});
