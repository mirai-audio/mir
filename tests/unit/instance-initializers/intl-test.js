import EmberObject from '@ember/object';
import { set } from '@ember/object';
import { run } from '@ember/runloop';
import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import intl from 'mir/instance-initializers/intl';
import destroyApp from 'mir/tests/helpers/destroy-app';
import startApp from 'mir/tests/helpers/start-app';

module('Unit | Instance Initializer | intl', function(hooks) {
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
        'service:intl',
        Service.extend({
          locale: null,
          locales: ['en', 'ja', 'zh-cn'],
          setLocale(locale) {
            set(this, 'locale', locale);
          }
        })
      );
    });
  });

  hooks.afterEach(function() {
    destroyApp(this.appInstance);
    destroyApp(this.application);
  });

  test('detectLocale correctly returns `en`', function(assert) {
    intl.initialize(this.appInstance);
    let service = this.appInstance.lookup('service:intl');
    let locale = service.locale;
    assert.equal(locale, 'en', 'expected en');
  });

  test('detectLocale correctly returns `en` in FastBoot', function(assert) {
    const mockRequest = EmberObject.create({
      headers: EmberObject.create({
        'Accept-Language': 'en-US'
      })
    });
    let fastBoot = this.appInstance.lookup('service:fastboot');
    set(fastBoot, 'request', mockRequest);
    set(fastBoot, 'isFastBoot', 'true');
    intl.initialize(this.appInstance);

    let intlService = this.appInstance.lookup('service:intl');
    let locale = intlService.locale;
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
    intl.initialize(this.appInstance);

    let intlService = this.appInstance.lookup('service:intl');
    let locale = intlService.locale;
    assert.equal(locale, 'en');
  });

  test('detectLocale correctly returns `zh-cn` in FastBoot for Traditional Chinese', function(assert) {
    const mockRequest = EmberObject.create({
      headers: EmberObject.create({
        'Accept-Language': 'zh-CN'
      })
    });
    let fastBoot = this.appInstance.lookup('service:fastboot');
    set(fastBoot, 'request', mockRequest);
    set(fastBoot, 'isFastBoot', 'true');
    intl.initialize(this.appInstance);

    let intlService = this.appInstance.lookup('service:intl');
    let locale = intlService.locale;
    assert.equal(locale, 'zh-cn', 'locale is set to Tradiional Chinese');
  });
});
