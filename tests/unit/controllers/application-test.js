import { getOwner } from '@ember/application';
import { get, set } from '@ember/object';
import { moduleFor, test } from 'ember-qunit';
import localeConfig from 'ember-i18n/config/en';

moduleFor('controller:application', 'Unit | Controller | application', {
  needs: [
    'service:i18n',
    'service:session',
    'locale:en/translations',
    'config:environment',
  ],

  beforeEach() {
    // set the locale and the config
    let i18n = this.container.lookup('service:i18n');
    set(i18n, 'locale', 'en');
    // set the locale and the config
    this.registry.register('locale:en/config', localeConfig);

    // manually inject the i18n service as initialzer does not run
    // in unit test
    getOwner(this).inject('controller', 'i18n', 'service:i18n');
  },
});

test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('it has a locale set to "en"', function(assert) {
  let controller = this.subject();
  let expected = get(controller, 'i18n').locale;
  assert.equal(expected, 'en');
});
