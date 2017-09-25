import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ma-errors-handler', 'Integration | Component | ma errors handler', {
  integration: true,
});

test('it renders blank without errors', function (assert) {
  this.render(hbs`{{ma-errors-handler}}`);
  assert.equal(this.$().text().trim(), '');
});

test('it renders error messages', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  const keys = ['errors.login.other', 'errors.login.unauthorized'];
  this.set('errorMessageKeys', keys);
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{ma-errors-handler errorMessageKeys=errorMessageKeys}}`);
  assert.notEqual(this.$().text().trim().indexOf('An error occurred'), -1);
  assert.notEqual(this.$().text().trim().indexOf('Email or password is incorrect'), -1);
});
