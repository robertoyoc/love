import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		save(sintoma, nombre){
			sintoma.set('nombre', nombre)
			this.set('newName', undefined)
			sintoma.save().then(()=>{
				this.transitionToRoute('controldesintomas')
			})
		}
	}
});
