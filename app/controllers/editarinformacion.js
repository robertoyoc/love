import Controller from '@ember/controller';
import {inject as service} from "@ember/service";


export default Controller.extend({
	firebaseApp: service(),
	actions: {
		save(info){
			info.save().then(()=>{
				switch(info.get('area')){
					case "Cuida tu salud":
					 	this.transitionToRoute('cuidatusalud')
					 	break;
					case "Manejo del tiempo":
					 	this.transitionToRoute('manejodeltiempo')
					 	break;
					case "Motivate":
					 	this.transitionToRoute('motivate')
					 	break;
					case "Nutrición":
						this.transitionToRoute('nutricion')
					 	break;
				}
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
		    	var infoRef = storageRef.child(`/infos/${model.get('id')}/foto.jpg`);
		    	infoRef.put(data).then(function(snapshot) {
		    		model.set('imgUrl', snapshot.downloadURL)
				})
		    }
		},
		cancelar(info){
			switch(info.get('area')){
					case "Cuida tu salud":
					 	this.transitionToRoute('cuidatusalud')
					 	break;
					case "Manejo del tiempo":
					 	this.transitionToRoute('manejodeltiempo')
					 	break;
					case "Motivate":
					 	this.transitionToRoute('motivate')
					 	break;
					case "Nutrición":
						this.transitionToRoute('nutricion')
					 	break;
				}

		}
	}
});