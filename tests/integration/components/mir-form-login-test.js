import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { registerTestComponent, unregisterTestComponent } from
  'mir/tests/ember-test-component';

moduleForComponent('mir-form-login', 'Integration | Component | mir form login', {
  integration: true,

  beforeEach({ test: testCtx }) {
    unregisterTestComponent(testCtx.testEnvironment);
  },
});

test('it renders the login form', function(assert) {
  registerTestComponent(this);

  this.set('action', function login() {});
  this.set('model', {
    email: 'a@bb.cc',
    password: 'aaabbbcccddd',
  });
  this.on('login', function login() {});

  this.render(hbs`
    {{mir-form-login title="ABC_"
      components=(hash
        input=(component "test-component"))
      action=action
      model=model}}
  `);
  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), 'ABC_Login');
});
