import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return {
			artistName: null,
			albumName: null,
			genre: null,
			albumCover:null,
			yearOfRelease: null,
			spotifyLink: null
		}
	},
	actions: {
		addAlbum(model) {
			const musicModel = this.store.createRecord('music', model);
			musicModel.save();
			this.transitionTo('musics');
		}
	}
});
