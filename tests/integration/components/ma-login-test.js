import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import {
  registerTestComponent,
  unregisterTestComponent
} from
  'mir/tests/ember-test-component';

moduleForComponent('ma-login', 'Integration | Component | ma login', {
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
    {{ma-login title="ABC_"
      components=(hash
        input=(component "test-component"))
      action=action
      model=model}}
  `);
  assert.notEqual(this.$().text().trim().indexOf('ABC_', -1));
  assert.notEqual(this.$().text().trim().indexOf('Sign in', -1));
});
