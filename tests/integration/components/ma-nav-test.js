import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ma nav', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(3);

    this.set('isAuth', true);
    this.set('logout', function logout() {});
    await render(hbs`{{ma-nav logout=logout isAuthenticated=isAuth}}`);

    assert.notEqual(this.element.textContent.trim(), '');
    assert.notEqual(this.element.textContent.indexOf('Home'), -1);
    assert.notEqual(this.element.textContent.indexOf('Logout'), -1);
  });

  test('it animates in and out', async function(assert) {
    this.set('isAuth', true);
    this.set('logout', function logout() {});
    await render(hbs`{{ma-nav logout=logout isAuthenticated=isAuth}}`);

    // click hamburger and check that the 'is-shown' class is available
    await click('.ma-Nav-overlay');
    assert.notEqual(this.element.innerHTML.indexOf('is-shown'), -1);

    // click hamburger and check that the 'is-shown' class is available
    await click('.ma-Nav-overlay');
    assert.equal(this.element.innerHTML.indexOf('is-shown'), -1);
  });
});
