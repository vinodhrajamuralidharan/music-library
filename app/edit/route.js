import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		return this.store.findRecord('music', params.id);
	},
	actions: {
		editAlbum(model) {
			const musicModel = this.modelFor(this.routeName);
			const {	artistName, albumName, genre, albumCover,yearOfRelease,spotifyLink} = model;
			musicModel.setProperties({
				artistName, albumName, genre, albumCover,yearOfRelease,spotifyLink
			});
			musicModel.save();
			this.transitionTo('musics');
		}
	}
});
