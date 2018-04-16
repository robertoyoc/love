import Ember from 'ember';
import { inject as service} from "@ember/service";
import firebase from 'firebase'
import {computed } from "@ember/object";


export default Ember.Controller.extend({
	firebaseApp: service(),
	admins: computed(function(){
		return this.store.findAll('admin')
	}),
	actions: {
		showModal(){
			window.$('#logout').popup({
			transition: 'ease-in-out 0.3s',
			vertical: 'top'
			});
		},
		save(admin){
			admin.save()
		},
		reset(admin){
			if(!admin.get('isNew'))
				admin.rollbackAttributes()
		},
		savePhoto(event){
			let model = this.get('model')


			let file = event.target.files[0]


			let storageRef = this.get('firebaseApp').storage().ref();
			var reader = new FileReader();
			reader.readAsArrayBuffer(file)
			

			reader.onload = function(e) {
		    	var data = e.target.result;
		    	var fotoRef = storageRef.child(`/admins/${model.get('id')}/foto.jpg`);
		    	fotoRef.put(data).then(function(snapshot) {
		    		model.set('foto', snapshot.downloadURL)
		    		return model.save().then(()=>{
		    		})
				})
		    }
		},
		updatePass(newpass, current){
			let context =this

			var user = this.get('firebaseApp').auth().currentUser;
			var newPassword = newpass;

			const credential = firebase.auth.EmailAuthProvider.credential(user.email, 
			    current)
			user.reauthenticateWithCredential(credential).then(function() {
			  return user.updatePassword(newPassword).then(function() {
				  // Update successful.
				  context.set('currentPass', undefined)
				  context.set('newPass', undefined)
				  context.set('confirmPass', undefined)
				  alert('Actualizado')
				}).catch(function(error) {
				  // An error happened.
				  console.log(error)
				  alert("Ocurrio un error")
				});
			}).catch(function(error) {
				console.log("Contrasena actual incorrecta")
			  
			});
			

		},
		newAdmin(admin){
			this.get('firebaseApp').auth().createUserWithEmailAndPassword(admin.get('email'), admin.get('pass')).then((usuario)=>{
				admin.set('uid', usuario.uid)
				admin.save().then(()=>{
					alert('Agregado correctamente')
					this.set('newAdmin', this.store.createRecord('admin'))
				})
			})
		}
	}
});
