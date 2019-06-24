import Route from '@ember/routing/route';

export default Route.extend({

	model() {
		// const music = this.store.createRecord('music', {
		// 	id: 1,
		// 	artistName: 'vinodh',
		// 	albumName: 'vinodh',
		// 	Genre: 'vinodh',
		// 	albumCover:'vinodh',
		// 	yearOfRelease: 'vinodh',
		// 	spotifyLink: 'vinodh'
		// });
		// music.save();
		//
		// const music1 = this.store.createRecord('music', {
		// 	id: 2,
		// 	artistName: 'raja',
		// 	albumName: 'raja',
		// 	Genre: 'raja',
		// 	albumCover:'raja',
		// 	yearOfRelease: 'raja',
		// 	spotifyLink: 'raja'
		// });
		//
		// music1.save();


		return this.store.findAll('music');
	}
});
