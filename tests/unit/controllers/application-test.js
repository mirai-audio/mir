import { get, set } from '@ember/object';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import localeConfig from 'ember-i18n/config/en';

module('Unit | Controller | application', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    // set the locale and the config
    let i18n = this.owner.lookup('service:i18n');
    set(i18n, 'locale', 'en');
    // set the locale and the config
    this.owner.register('locale:en/config', localeConfig);

    // manually inject the i18n service as initialzer does not run
    // in unit test
    this.owner.inject('controller', 'i18n', 'service:i18n');
  });

  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:application');
    assert.ok(controller);
  });

  test('it has a locale set to "en"', function(assert) {
    let controller = this.owner.lookup('controller:application');
    let expected = get(controller, 'i18n').locale;
    assert.equal(expected, 'en');
  });
});
