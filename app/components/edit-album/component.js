import Component from '@ember/component';
import {and} from '@ember/object/computed';

export default Component.extend({
	enableButton: and('model.artistName', 'model.albumName', 'model.genre', 'model.albumCover', 'model.yearOfRelease', 'model.spotifyLink'),

	actions: {
		editAlbum() {
			this.get('editAlbum')(this.model);
		}
	}
});
