import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		showModal(){
			window.$('#logout').popup({
			transition: 'ease-in-out 0.3s',
			vertical: 'top'
			});
		}
	}
});
