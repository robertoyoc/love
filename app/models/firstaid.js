import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
  	imgUrl: DS.attr('string'),
  	definicion: DS.attr('string'),
  	sintomas:  DS.attr('string'),
  	aviso: DS.attr('string')
});
