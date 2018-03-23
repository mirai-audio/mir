import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { setOwner } from '@ember/application';
import hbs from 'htmlbars-inline-precompile';
import {
  registerTestComponent,
  unregisterTestComponent
} from 'mir/tests/ember-test-component';

module('Integration | Component | ma auth', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function({ test: testCtx }) {
    setOwner(this, this.owner);
    unregisterTestComponent(testCtx.testEnvironment);
  });

  test('it renders the signup form', async function(assert) {
    registerTestComponent(this);

    this.set('loginAction', function login() {});
    this.set('signupAction', function signup() {});

    await render(hbs`
      {{ma-auth title="ABC_"
        components=(hash
          login=(component "test-component")
          input=(component "test-component"))
        loginAction=loginAction
        action=signupAction}}
    `);

    assert.notEqual(this.element.textContent.trim().indexOf('ABC_'), -1);
    assert.notEqual(this.element.innerHTML.trim().indexOf('Sign up'), -1);
  });
});
