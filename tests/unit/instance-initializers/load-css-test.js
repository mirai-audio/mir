import Application from '@ember/application';
import { run, later } from '@ember/runloop';
import { initialize } from 'mir/instance-initializers/load-css';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Instance Initializer | load css', function(hooks) {
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

    let done = assert.async();
    later(this, () => {
      // you would normally confirm the results of the initializer here
      assert.notEqual(window.document.head.innerHTML.indexOf('/assets/vendor.css'), -1);
      assert.notEqual(window.document.head.innerHTML.indexOf('/assets/mir.css'), -1);
      done();
    });
  });
});
