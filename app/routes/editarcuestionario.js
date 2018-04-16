import Ember from 'ember';
import AuthenticatedUser from '../mixins/authenticated-user';

export default Ember.Route.extend(AuthenticatedUser, {
	afterModel(model){
		this.set('pregunta', model)
	},

	setupController(controller){
		this._super(...arguments)
		controller.set('newPregunta', this.get('pregunta.pregunta'))
	}
});
