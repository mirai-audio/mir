import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { registerTestComponent, unregisterTestComponent } from
  'mir/tests/ember-test-component';

moduleForComponent('ma-auth', 'Integration | Component | ma auth', {
  integration: true,

  beforeEach({ test: testCtx }) {
    unregisterTestComponent(testCtx.testEnvironment);
  },
});

test('it renders the signup form', function(assert) {
  registerTestComponent(this);

  this.set('loginAction', function login() {});
  this.set('signupAction', function signup() {});

  this.render(hbs`
    {{ma-auth title="ABC_"
      components=(hash
        login=(component "test-component")
        input=(component "test-component"))
      loginAction=loginAction
      action=signupAction}}
  `);

  let actual = this.$().text().trim().replace(/[\s\n]+/g, '');
  assert.notEqual(actual.indexOf('ABC_'), -1);
  assert.notEqual(actual.indexOf('Signup'), -1);
});
