import Component from '@ember/component';

export default Component.extend({
	recommendedProducts: [
		{
			name: 'abc',
			price: {
				annual: 555,
				monthly: 22
			},
			iconPath: 'ajskfji/asdfasdf',
			offer: 'one month free'
		},
		{
			name: 'ab',
			price: {
				annual: 554,
				monthly: 20
			},
			iconPath: 'ajskfji/asdfasdfass',
			offer: 'voucher'
		}
	]
});
