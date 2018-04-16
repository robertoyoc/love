import Controller from '@ember/controller';
import {computed} from "@ember/object";
import {inject as service } from "@ember/service"


export default Controller.extend({
	firebaseApp: service(),
	informacion: computed(function(){
		return this.store.findAll('information')

	}),
	publicaciones: computed('informacion.@each.area', function(){
		let array = []
		this.get('informacion').forEach((publicacion)=>{
			if(publicacion.get('area')=="Manejo del tiempo")
				array.push(publicacion)
		})


		return array
	}),
	actions: {
		delete(info){
			let storageRef = this.get('firebaseApp').storage().ref();
			let fileRef = storageRef.child(`/infos/${info.get('id')}/foto.jpg`)
			fileRef.delete().then(()=>{
				info.destroyRecord()
			})

		}
	}
});
