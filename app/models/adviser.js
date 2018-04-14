import DS from 'ember-data';

export default DS.Model.extend({
	profesion: DS.attr('string'),
  	nomina:  DS.attr('string'),
  	nombre: DS.attr('string'),
  	apellidos:  DS.attr('string'),
  	departamento: DS.attr('string'),
  	lider:  DS.attr('string'),
  	atencion: DS.attr('string'),
  	horainicio:  DS.attr('string'),
  	horafin: DS.attr('string'),
  	telefono: DS.attr('string'),
  	ubicacion:  DS.attr('string'),
  	email: DS.attr('string'),

  	imgUrl: DS.attr('string')

    
});
