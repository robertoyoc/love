import Ember from 'ember';
import { inject as service} from "@ember/service";

export default Ember.Controller.extend({
	firebaseApp: service(),
	actions: {
		save(firstaid, nombre, definicion, sintomas, aviso){
			firstaid.set('nombre', nombre)
			firstaid.set('sintomas', sintomas)
			firstaid.set('definicion', definicion)
			firstaid.set('aviso', aviso)
			firstaid.save().then(()=>{
				this.set('newName', undefined)
				this.set('newDescription', undefined)
				this.set('newSintomas', undefined)
				this.set('newAviso', undefined)
				this.transitionToRoute('primerosauxilios')
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
		    	var fotoRef = storageRef.child(`/prs/${model.get('id')}/foto.jpg`);
		    	fotoRef.put(data).then(function(snapshot) {
		    		model.set('imgUrl', snapshot.downloadURL)
		    		return model.save().then(()=>{
		    		})
				})
		    }
		}
	}
});
