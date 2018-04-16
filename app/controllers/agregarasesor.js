import Ember from 'ember';
import { inject as service} from "@ember/service";

export default Ember.Controller.extend({
	firebaseApp: service(),
	actions: {
		save(asesor){
			asesor.save().then(()=>{
				this.transitionToRoute('tablaasesores')
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
		    	var fotoRef = storageRef.child(`/advisors/${model.get('id')}/foto.jpg`);
		    	fotoRef.put(data).then(function(snapshot) {
		    		model.set('foto', snapshot.downloadURL)
		    		return model.save().then(()=>{
		    		})
				})
		    }
		}
	}
});
