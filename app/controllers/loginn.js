import Ember from 'ember';
import {inject as service} from "@ember/service";

export default Ember.Controller.extend({
	session: service(),
	actions: {
		login(email, pass){
			this.get('session').open('firebase', {
			  provider: 'password',
			  email: email,
			  password: pass
			}).then(()=>{
				this.transitionToRoute('principal')
			}).catch((error)=>{

				console.log(error)
				alert("Claves de acceso incorrectas")
			})

		}
	}
});
