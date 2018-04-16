import Ember from 'ember';
import {inject as service} from "@ember/service";


export default Ember.Controller.extend({
	session: service(),
	actions: {
		showModal(){
			window.$('#logout').popup({
			transition: 'ease-in-out 0.3s',
			vertical: 'top'
			});
		},
		logout(){
			$('#logout').popup('hide');
			this.get('session').close()
			this.transitionToRoute('loginn')
		}
	}
});
