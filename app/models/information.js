import DS from 'ember-data';

export default DS.Model.extend({
	area: DS.attr('string', {defaultValue:"Cuida tu salud"}),
  	nombre:  DS.attr('string'),
  	inicio: DS.attr('string'),
  	fin:  DS.attr('string'),
  	imgUrl: DS.attr('string')
});
