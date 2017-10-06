import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

// Stub location service
const windowStub = Ember.Service.extend({
  history: {
    back() {
      window.location.hash = '#clicked';
    },
  },
});

moduleForComponent('ma-header', 'Integration | Component | ma-header', {
  integration: true,

  beforeEach() {
    this.register('service:window', windowStub);
    // Calling inject puts the service instance in the context of the test,
    // making it accessible as `window` within each test
    this.inject.service('window', { as: 'window' });
  },
});

test('it renders with `back` and `backTo` links', function(assert) {
  this.set('backTo', 'application');
  this.set('back', 'routes.application.title');
  this.set('title', 'routes.login.title');
  this.render(hbs`{{ma-header backTo=backTo back=back title=title}}`);

  assert.notEqual(this.$().text().indexOf('Sign in'), -1);
  assert.notEqual(this.$().text().indexOf('Home'), -1);
});

test('it renders without `back` and `backTo` links', function(assert) {
  this.set('title', 'routes.login.title');
  this.render(hbs`{{ma-header title=title}}`);

  assert.notEqual(this.$().text().indexOf('Sign in'), -1);
  assert.notEqual(this.$().text().indexOf('Back'), -1);
});

test('clicking `back` default link calls window.history.back', function(assert) {
  this.set('title', 'routes.login.title');
  this.render(hbs`{{ma-header title=title}}`);

  this.$('.ma-Header .ma-Header-link--back').click();
  assert.equal(window.location.hash, '#clicked');
});
