import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('service:window', 'Unit | Service | window', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo'],

  beforeEach() {
    // reset location hash
    window.location.hash = '';
  },
});

// Replace this with your real tests.
test('it can call history.back and navigate back', function(assert) {
  // navigate forwards, manually
  window.location.hash = '#back';
  window.location.hash = '#forward';
  let service = this.subject();
  assert.ok(service, 'service is ok');
  // navigate back
  service.get('history.back')();
  Ember.run.later(this, () => {
    assert.equal(window.location.hash, '#back', '`history.back` was called');
  }, 250);
});
