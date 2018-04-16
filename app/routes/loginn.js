import Ember from 'ember';
import {inject as service} from "@ember/service";

export default Ember.Route.extend({
	session: service(),
	beforeModel(){
		return this.get('session').fetch().then(()=>{
			if(this.get('session.currentUser.uid'))
				return this.transitionTo('principal')
		}).catch(()=>{
			if(this.get('session.currentUser.uid'))
				return this.transitionTo('principal')

		})
	}
});
