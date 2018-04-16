import Ember from 'ember';
import {inject as service} from "@ember/service";


export default Ember.Mixin.create({
	session: service(),
	beforeModel(){
		return this.get('session').fetch().then(()=>{
			if(!this.get('session.currentUser.uid'))
				return this.transitionTo('loginn')
		}).catch(()=>{
			if(!this.get('session.currentUser.uid'))
				return this.transitionTo('loginn')

		})
	}
});
