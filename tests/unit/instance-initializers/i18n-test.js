import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
import i18n from 'mir/instance-initializers/i18n';
import destroyApp from '../../helpers/destroy-app';

// Stub fastboot service
const fastbootServiceFactory = Ember.Service.extend({
  isFastBoot: false,
});

const i18nServiceFactory = Ember.Service.extend({
  locale: null,
});

moduleFor('instance-initializer:i18n', 'Unit | Instance Initializer | i18n', {
  // Specify the other units that are required for this test.
  // needs: ['service:session'],

  beforeEach() {
    Ember.run(() => {
      this.application = Ember.Application.create();
      this.appInstance = this.application.buildInstance();
      // Register your mock service (do not  create instance, use factory)
      this.appInstance.register('service:fastboot', fastbootServiceFactory);
      this.appInstance.register('service:i18n', i18nServiceFactory);
    });
  },

  afterEach() {
    Ember.run(this.appInstance, 'destroy');
    destroyApp(this.application);
  },
});

test('detectLocale correctly returns `en-US`', function(assert) {
  i18n.initialize(this.appInstance);
  let locale = this.appInstance.lookup('service:i18n').get('locale');
  assert.equal(locale, 'en-US');
});

test('detectLocale correctly returns `en-US` in FastBoot', function(assert) {
  const mockRequest = Ember.Object.create({
    headers: Ember.Object.create({
      'Accept-Language': 'en-US',
    }),
  });
  this.appInstance.lookup('service:fastboot').set('request', mockRequest);
  this.appInstance.lookup('service:fastboot').set('isFastBoot', 'true');
  i18n.initialize(this.appInstance);
  let locale = this.appInstance.lookup('service:i18n').get('locale');
  assert.equal(locale, 'en-US');
});
