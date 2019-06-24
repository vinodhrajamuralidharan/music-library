import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | music-collection', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{music-collection}}`);

    assert.ok(this.element.textContent.trim().indexOf('Welcome to the Music Collection') > -1, 'should render');
  });
});
