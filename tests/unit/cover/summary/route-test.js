import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cover/summary', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cover/summary');
    assert.ok(route);
  });
});
