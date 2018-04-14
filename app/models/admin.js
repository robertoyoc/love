import DS from 'ember-data';

export default DS.Model.extend({
	 profesion: DS.attr('string'),
  	nomina:  DS.attr('string'),
  	nombre: DS.attr('string'),
  	apellidos:  DS.attr('string'),
  	departamento: DS.attr('string'),
  	lider:  DS.attr('string'),
  	telefono: DS.attr('number'),
  	ubicacion:  DS.attr('string'),
  	email: DS.attr('email'),
    pass: "",

  	foto: DS.attr('image.url'),

    Advisers: DS.hasMany('adviser')

});
