import Application from '@ember/application';
import { run } from '@ember/runloop';
import { initialize } from 'mir/instance-initializers/service-worker';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Instance Initializer | service worker', function(hooks) {
  hooks.beforeEach(function() {
    run(() => {
      this.application = Application.create();
      this.appInstance = this.application.buildInstance();
    });
  });

  hooks.afterEach(function() {
    run(this.appInstance, 'destroy');
    destroyApp(this.application);
  });

  // Replace this with your real tests.
  test('it works', function itWorks(assert) {
    initialize(this.appInstance);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
