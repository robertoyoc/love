import DS from 'ember-data';

export default DS.Model.extend({
	matricula:  DS.attr('string'),
  	nombre: DS.attr('string'),
  	apellidoP:  DS.attr('string'),
  	apellidoM: DS.attr('string'),
  	sexo:  DS.attr('string'),
  	edad: DS.attr('string'),
  	nivel:  DS.attr('string'),
  	calcohol: DS.attr('string'),
  	ctabaco: DS.attr('string'),
  	enfermedad:  DS.attr('string'),
  	apsicologica:  DS.attr('string'),
  	email: DS.attr('string'),
  	pass: "",

  	imgUrl: DS.attr('string')
});
