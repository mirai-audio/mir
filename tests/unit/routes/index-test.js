import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { Promise } from 'rsvp';
import Service from '@ember/service';
import { startMirage } from 'mir/initializers/ember-cli-mirage';

module('Unit | Route | index', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    // start mirage manually before a unit test
    this.server = startMirage();
  });

  hooks.afterEach(function() {
    // manually shut down mirage
    this.server.shutdown();
  });

  test('it handles errors properly', function(assert) {
    // mock the `store` service
    let mockStore = Service.extend({
      findAll() {
        return new Promise(resolve => {
          return resolve([]);
        });
      }
    });
    this.owner.register('service:store', mockStore);

    // mock a failed response
    let mockResponse = { errors: ['errors.login.other'] };

    /* eslint-disable ember/use-ember-get-and-set */
    server.get('/users/current', mockResponse, 500);
    /* eslint-enable ember/use-ember-get-and-set */

    let route = this.owner.lookup('route:index');
    assert.expect(2);
    const done = assert.async();

    assert.ok(route);

    route.model().then(result => {
      let expected = 'errors.login.other';
      assert.equal(result.errors[0], expected, 'login error was set');
      done();
    });
  });
});
