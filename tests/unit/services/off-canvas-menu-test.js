import { get } from '@ember/object';
import { moduleFor, test } from 'ember-qunit';

moduleFor('service:off-canvas-menu', 'Unit | Service | off canvas menu', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('toggle inverts the value of `is-active`', function(assert) {
  assert.expect(3);

  let service = this.subject();

  assert.ok(service);

  // assert true
  service.toggle();
  assert.equal(get(service, 'isActive'), true, 'it switches from false to true');

  // assert false
  service.toggle();
  assert.equal(get(service, 'isActive'), false, 'it switches from true to false');
});
