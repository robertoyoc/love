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
    horarioInit:  DS.attr('string', {defaultValue: "9:00 AM"}),
  	horarioEnd:  DS.attr('string', {defaultValue: "2:00 PM"}),
  	email: DS.attr('string'),
    pass: "",

  	foto: DS.attr('string'),
    uid: DS.attr('string'),

    Advisers: DS.hasMany('adviser')

});
