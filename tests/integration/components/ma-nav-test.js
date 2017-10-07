import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ma-nav', 'Integration | Component | ma-nav', {
  integration: true
});

test('it renders', function(assert) {
  this.set('isAuth', true);
  this.set('logout', function logout() {});
  this.render(hbs`{{ma-nav logout=logout isAuthenticated=isAuth}}`);

  assert.notEqual(this.$().text().trim(), '');
  assert.notEqual(this.$().text().indexOf('Home'), -1);
  assert.notEqual(this.$().text().indexOf('Styleguide'), -1);
  assert.notEqual(this.$().text().indexOf('Typography'), -1);
});

test('it animates in and out', function(assert) {
  this.set('isAuth', true);
  this.set('logout', function logout() {});
  this.render(hbs`{{ma-nav logout=logout isAuthenticated=isAuth}}`);

  // click hamburger and check that the 'is-shown' class is available
  this.$('.ma-Nav-overlay').click();
  assert.notEqual(this.$().html().indexOf('is-shown'), -1);

  // click hamburger and check that the 'is-shown' class is available
  this.$('.ma-Nav-overlay').click();
  assert.equal(this.$().html().indexOf('is-shown'), -1);
});
