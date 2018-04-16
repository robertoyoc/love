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
  this.route('detalleeventos');
  this.route('editarevento');
  this.route('editarinformacion');
  this.route('graficasalumnos');
  this.route('manejodeltiempo');
  this.route('motivate');
  this.route('nutricion');
  this.route('perfil');
  this.route('perfilalumno');
  this.route('perfilasesor', {path: "/asesor/admin_id"});
  this.route('principal');
  this.route('tablaalumnos');
  this.route('tablaasesores');
  this.route('controldesintomas');
  this.route('cuestionario');
  this.route('editarcuestionario');
  this.route('editarsintoma');
  this.route('editarprimerosauxilios');
  this.route('primerosauxilios');
});

export default Router;
