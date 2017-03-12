import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: [
    'validator:confirmation',
    'validator:format',
    'validator:length',
    'validator:presence',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
