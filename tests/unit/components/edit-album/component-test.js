import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | edit-album', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let component = this.owner.factoryFor('component:edit-album').create();
    assert.ok(component);
  });

  test('enableButton', function (assert) {
    let component = this.owner.factoryFor('component:edit-album').create({
      model: {
        albumName: 'a',
        genre: 'a',
        albumCover: 'a',
        yearOfRelease: 'a',
        spotifyLink: 'a'
      }
    });
    assert.ok(component.get('enableButton'), 'should return true')

  })
});
