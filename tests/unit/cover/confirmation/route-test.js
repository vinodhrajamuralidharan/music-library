import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cover/confirmation', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cover/confirmation');
    assert.ok(route);
  });
});
