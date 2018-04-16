import Controller from '@ember/controller';
import {inject as service } from "@ember/service"

export default Controller.extend({
	firebaseApp: service(),
	actions: {
		delete(evento){
			let storageRef = this.get('firebaseApp').storage().ref();
			let fileRef = storageRef.child(`/events/${evento.get('id')}/foto.jpg`)
			fileRef.delete().then(()=>{
				evento.destroyRecord().then(()=>{
					this.transitionToRoute('calendarioeventos')
				})
			})


		}
	}
});
