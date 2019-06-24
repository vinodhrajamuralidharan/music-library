import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | edit-album', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{edit-album}}`);

    assert.ok(this.element.textContent.trim().indexOf('Artist Name') > -1, 'should render');

  });
});
