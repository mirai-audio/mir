import EmberObject from '@ember/object';
import { get, set } from '@ember/object';
import Application from '@ember/application';
import { run } from '@ember/runloop';
import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import i18n from 'mir/instance-initializers/i18n';
import destroyApp from '../../helpers/destroy-app';

// Stub fastboot service
const fastbootServiceFactory = Service.extend({
  isFastBoot: false,
});

const i18nServiceFactory = Service.extend({
  locale: null,
  locales: ['en', 'ja', 'zh-cn'],
});

module('Unit | Instance Initializer | i18n', function(hooks) {
  setupTest(hooks);

  // Specify the other units that are required for this test.
  // needs: ['service:session'],

  hooks.beforeEach(function() {
    run(() => {
      this.application = Application.create();
      this.appInstance = this.application.buildInstance();
      // Register your mock service (do not  create instance, use factory)
      this.appInstance.register('service:fastboot', fastbootServiceFactory);
      this.appInstance.register('service:i18n', i18nServiceFactory);
    });
  });

  hooks.afterEach(function() {
    run(this.appInstance, 'destroy');
    destroyApp(this.application);
  });

  test('detectLocale correctly returns `en-US`', function(assert) {
    i18n.initialize(this.appInstance);
    let service = this.appInstance.lookup('service:i18n');
    let locale = get(service, 'locale');
    assert.equal(locale, 'en', 'expected en');
  });

  test('detectLocale correctly returns `en-US` in FastBoot', function(assert) {
    const mockRequest = EmberObject.create({
      headers: EmberObject.create({
        'Accept-Language': 'en-US',
      }),
    });
    let fastBoot = this.appInstance.lookup('service:fastboot');
    set(fastBoot, 'request', mockRequest);
    set(fastBoot, 'isFastBoot', 'true');
    i18n.initialize(this.appInstance);

    let i18nService = this.appInstance.lookup('service:i18n');
    let locale = get(i18nService, 'locale');
    assert.equal(locale, 'en');
  });

  test('detectLocale correctly returns `en` in FastBoot for unsupported language', function(assert) {
    const mockRequest = EmberObject.create({
      headers: EmberObject.create({
        'Accept-Language': 'fo-BA',
      }),
    });
    let fastBoot = this.appInstance.lookup('service:fastboot');
    set(fastBoot, 'request', mockRequest);
    set(fastBoot, 'isFastBoot', 'true');
    i18n.initialize(this.appInstance);

    let i18nService = this.appInstance.lookup('service:i18n');
    let locale = get(i18nService, 'locale');
    assert.equal(locale, 'en');
  });
});
