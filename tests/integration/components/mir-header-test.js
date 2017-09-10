import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mir-header', 'Integration | Component | mir header', {
  integration: true,
});

test('it renders with `back` and `backTo` links', function(assert) {
  this.set('backTo', 'application');
  this.set('back', 'routes.application.title');
  this.set('title', 'routes.login.title');
  this.render(hbs`{{mir-header backTo=backTo back=back title=title}}`);

  assert.notEqual(this.$().text().indexOf('Login'), -1);
  assert.notEqual(this.$().text().indexOf('Home'), -1);
});

test('it renders without `back` and `backTo` links', function(assert) {
  this.set('title', 'routes.login.title');
  this.render(hbs`{{mir-header backTo=backTo back=back title=title}}`);

  assert.notEqual(this.$().text().indexOf('Login'), -1);
  assert.notEqual(this.$().text().indexOf('Back'), -1);
});
