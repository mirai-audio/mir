import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | application', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    // set the locale and the config
    let intl = this.owner.lookup('service:intl');
    intl.setLocale('en');

    // manually inject the i18n service as initialzer does not run
    // in unit test
    this.owner.inject('controller', 'intl', 'service:intl');
  });

  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:application');
    assert.ok(controller);
  });

  test('it has a locale set to "en"', function(assert) {
    let controller = this.owner.lookup('controller:application');
    let expected = controller.intl.locale;
    assert.equal(expected, 'en');
  });
});
