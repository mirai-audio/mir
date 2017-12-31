import { get } from '@ember/object';
import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | new/media', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:new/media');
    assert.ok(route);
  });

  test('model() returns a changeset', function(assert) {
    const done = assert.async();
    assert.expect(1);

    let route = this.owner.lookup('route:new/media');
    let modelFn = get(route, 'model');

    run(() => {
      let result = modelFn.apply(route);
      let isValid = get(result, 'isValid');
      assert.ok(isValid, 'result is a changeset');
      done();
    });
  });

  test('onCreated() action navigates to home', function(assert) {
    const done = assert.async();
    assert.expect(1);

    let route = this.owner.lookup('route:new/media');
    // stub the `transitionTo` method.
    route.transitionTo = () => {
      assert.ok(true, 'route transitions to the next page');
      done();
    };

    route.actions.onCreated.apply(route);
  });
});
