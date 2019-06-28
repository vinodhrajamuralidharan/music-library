import Component from '@ember/component';

export default Component.extend({
	currentHolding: {
		packageName: 'HomeCare Two',
		price: {
			monthly: 33,
			annual: 222
		},
		asv: true,
		products: [
			{
				name: 'a',
				iconPath: 'asdfasdf',
				excess: 0
			},
			{
				name: 'b',
				iconPath: 'asdfasdf',
				excess: 0
			}
		]
	}
});
