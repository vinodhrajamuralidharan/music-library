import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
	name: attr('string'),
	iconPath: attr('string'),
	excess: attr('number'),
	recommended: belongsTo('recommended'),
	currentHolding: belongsTo('current-holding')
});
