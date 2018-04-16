import Ember from 'ember';
import AuthenticatedUser from '../mixins/authenticated-user';

export default Ember.Route.extend(AuthenticatedUser, {
	afterModel(model){
		this.set('nombre', model.get('nombre'))
	},
	setupController(controller){
		this._super(...arguments)
		controller.set('newName', this.get('nombre'))
	}
});
