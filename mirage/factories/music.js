import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	id(i) {
    return `album-${i}`;
  },
	artistName: faker.name.firstName,
	albumName: faker.commerce.productName,
	Genre: faker.finance.accountName,
	albumCover: faker.name.findName,
	yearOfRelease: faker.date.future,
	spotifyLink: faker.image.imageUrl,
});
