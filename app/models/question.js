import DS from 'ember-data';

export default DS.Model.extend({
	pregunta: DS.attr('string'),
	respuesta1: DS.attr('string'),
	respuesta2: DS.attr('string'),
	respuesta3: DS.attr('string'),
	respuesta4: DS.attr('string')
});
