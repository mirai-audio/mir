import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | welcome route test', function(hooks) {
  setup(hooks);

  test('it renders the /welcome route', async function(assert) {
    let { htmlDocument } = await visit('/welcome');
    assert.dom('title', htmlDocument).hasText('mirai.audio');
    assert.dom('div').includesText('Play everything, play everywhere');
  });
});
