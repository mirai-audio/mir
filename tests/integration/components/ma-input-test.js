import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ma-input', 'Integration | Component | ma input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('inputId', 'username');

  this.render(hbs`{{ma-input inputId=inputId}}`);
  assert.notEqual(this.$().html().trim().indexOf('username'), -1);
});
