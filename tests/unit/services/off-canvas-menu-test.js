import { get } from '@ember/object';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | off canvas menu', function(hooks) {
  setupTest(hooks);

  test('toggle inverts the value of `is-active`', function(assert) {
    assert.expect(3);

    let service = this.owner.lookup('service:off-canvas-menu');

    assert.ok(service);

    // assert true
    service.toggle();
    assert.equal(get(service, 'isActive'), true, 'it switches from false to true');

    // assert false
    service.toggle();
    assert.equal(get(service, 'isActive'), false, 'it switches from true to false');
  });
});
