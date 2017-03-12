import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mir-nav', 'Integration | Component | mir nav', {
  integration: true
});

test('it renders', function(assert) {
  this.set('isAuth', true);
  this.set('logout', function logout() {});
  this.render(hbs`{{mir-nav logout=logout isAuthenticated=isAuth}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.notEqual(this.$().text().indexOf('Home'), -1);
  assert.notEqual(this.$().text().indexOf('Styleguide'), -1);
  assert.notEqual(this.$().text().indexOf('Typography'), -1);
});
