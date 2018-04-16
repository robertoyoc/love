import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('admin', params.admin_id)
	}
});
