import DS from 'ember-data';

export default DS.Model.extend({
	area: DS.attr('string'),
  	nombre:  DS.attr('string'),
  	inicio: DS.attr('date'),
  	fin:  DS.attr('date'),
  	imgUrl: DS.attr('string')
});
