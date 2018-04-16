import Controller from '@ember/controller';
import {inject as service} from "@ember/service";

export default Controller.extend({
	firebaseApp: service(),
	actions: {
		save(evento){
			evento.save().then(()=>{
				this.transitionToRoute('calendarioeventos')
			})
		},
		savePhoto(event){
			let model = this.get('model')


			let file = event.target.files[0]


			let storageRef = this.get('firebaseApp').storage().ref();
			var reader = new FileReader();
			reader.readAsArrayBuffer(file)
			

			reader.onload = function(e) {
		    	var data = e.target.result;
		    	var eventRef = storageRef.child(`/events/${model.get('id')}/foto.jpg`);
		    	eventRef.put(data).then(function(snapshot) {
		    		model.set('imgUrl', snapshot.downloadURL)
				})
		    }
		}
	}
});
