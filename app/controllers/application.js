import Ember from 'ember';
import {inject as service} from "@ember/service";
import {get, computed} from "@ember/object"
import DS from 'ember-data';


export default Ember.Controller.extend({
	session: service(),
	userPromise: computed('session.currentUser.uid',function(){
		return DS.PromiseObject.create({
			promise: this.store.query('admin', {
				orderBy: 'uid',
				equalTo: this.get('session.currentUser.uid'),
				limitToLast: 1
			}).then((account) => {
				let _account = account.get('firstObject');
				return _account;
			})
		})
		
	}),
	currentUser: computed('userPromise._result', function(){
		return this.get('userPromise')
	}),
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
			window.location.reload()
			
		}
	}
});
