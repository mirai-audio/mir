import { setOwner } from '@ember/application';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from 'ember-test-helpers';
import hbs from 'htmlbars-inline-precompile';
import {
  registerTestComponent,
  unregisterTestComponent,
} from 'mir/tests/ember-test-component';

module('Integration | Component | ma login', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function({ test: testCtx }) {
    setOwner(this, this.owner);
    unregisterTestComponent(testCtx.testEnvironment);
  });

  test('it renders the login form', async function(assert) {
    registerTestComponent(this);

    this.set('action', function login() {});
    this.set('model', {
      email: 'a@bb.cc',
      password: 'aaabbbcccddd',
    });
    // this.on('login', function login() {});

    await render(hbs`
      {{ma-login title="ABC_"
        components=(hash
          input=(component "test-component"))
        action=action
        model=model}}
    `);
    assert.notEqual(this.element.textContent.trim().indexOf('ABC_'), -1);
    assert.notEqual(this.element.textContent.trim().indexOf('Sign in'), -1);
  });
});
