import DS from 'ember-data';
const { Model, hasMany, belongsTo, attr } = DS;

export default Model.extend({
	products: hasMany('product'),
	price: belongsTo('price'),
	offer: attr('string'),
	recommendedProduct: belongsTo('recommended-product')
});
