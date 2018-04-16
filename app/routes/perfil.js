import Ember from 'ember';
import AuthenticatedUser from '../mixins/authenticated-user';

export default Ember.Route.extend(AuthenticatedUser, {
	model(){
		return this.store.query('admin', {
			orderBy: 'uid',
			equalTo: this.get('session.currentUser.uid'),
			limitToLast: 1
		}).then((account) => {
			let _account = account.get('firstObject');
			return _account;
		});
	},
	setupController(controller){
		this._super(...arguments)
		controller.set('newAdmin', this.store.createRecord('admin'))
	}

});
