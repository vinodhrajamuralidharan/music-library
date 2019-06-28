import DS from 'ember-data';
const { Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({
	packageName: attr('string'),
	price: belongsTo('price'),
	asv: attr('boolean'),
	products: hasMany('product')
});
