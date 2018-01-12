import EmberObject from '@ember/object';
import { get, set } from '@ember/object';
import { run } from '@ember/runloop';
import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import i18n from 'mir/instance-initializers/i18n';
import destroyApp from 'mir/tests/helpers/destroy-app';
import startApp from 'mir/tests/helpers/start-app';

module('Unit | Instance Initializer | i18n', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    run(() => {
      this.application = startApp();
      this.appInstance = this.application.buildInstance();
      // Register your mock service (do not  create instance, use factory)
      this.appInstance.register(
        'service:fastboot',
        Service.extend({
          isFastBoot: false
        })
      );
      this.appInstance.register(
        'service:i18n',
        Service.extend({
          locale: null,
          locales: ['en', 'ja', 'zh-cn']
        })
      );
    });
  });

  hooks.afterEach(function() {
    destroyApp(this.appInstance);
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
        'Accept-Language': 'en-US'
      })
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
        'Accept-Language': 'fo-BA'
      })
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
