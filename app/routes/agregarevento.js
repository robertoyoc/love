import Ember from 'ember';
import AuthenticatedUser from '../mixins/authenticated-user';


export default Ember.Route.extend(AuthenticatedUser, {
	model(){
		return this.store.createRecord('event')
	}
});
