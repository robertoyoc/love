import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('loginn');
  this.route('agregarasesor');
  this.route('agregarevento');
  this.route('agregarinformacion');
  this.route('calendarioeventos');
  this.route('cuidatusalud');
  this.route('detalleeventos', {path: "/evento/:event_id"});
  this.route('editarevento', {path: "/editar/:event_id"});
  this.route('editarinformacion', {path: "/informacion/:information_id"});
  this.route('graficasalumnos');
  this.route('manejodeltiempo');
  this.route('motivate');
  this.route('nutricion');
  this.route('perfil');
  this.route('perfilalumno', {path: "/alumno/:student_id"});
  this.route('perfilasesor', {path: "/asesor/:adviser_id"});
  this.route('principal');
  this.route('tablaalumnos');
  this.route('tablaasesores');
  this.route('controldesintomas');
  this.route('cuestionario');
  this.route('editarcuestionario',  {path: "/pregunta/:question_id"});
  this.route('editarsintoma', {path: "/sintoma/:symptom_id"});
  this.route('editarprimerosauxilios', {path: "/pr/:firstaid_id"});
  this.route('primerosauxilios');
});

export default Router;
