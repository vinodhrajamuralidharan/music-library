import DS from 'ember-data';

export default DS.Model.extend({
	artistName: DS.attr('string'),
	albumName: DS.attr('string'),
	genre: DS.attr('string'),
	albumCover:DS.attr('string'),
	yearOfRelease: DS.attr('string'),
	spotifyLink: DS.attr('string')
});
