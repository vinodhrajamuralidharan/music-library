import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
	currentHolding: belongsTo('current-holding'),
	monthly: attr('number'),
	annualy: attr('number')
});
