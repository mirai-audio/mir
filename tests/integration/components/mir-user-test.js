import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mir-user', 'Integration | Component | mir user', {
  integration: true,
});

test('it renders', function(assert) {
  // inline usage
  this.render(hbs`{{mir-user}}`);
  assert.equal(this.$().text().trim(), '');

  // template block usage
  this.render(hbs`
    {{#mir-user}}
      template block text
    {{/mir-user}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
});
