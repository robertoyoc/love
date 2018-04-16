import Controller from '@ember/controller';

export default Controller.extend({

	actions: {
		save(model, pregunta, r1, r2, r3, r4){
			model.set('pregunta', pregunta)
			model.set('respuesta1', r1)
			model.set('respuesta2', r2)
			model.set('respuesta3', r3)
			model.set('respuesta4', r4)
			model.save().then(()=>{
				this.set('R1', undefined)
				this.set('R2', undefined)
				this.set('R3', undefined)
				this.set('R4', undefined)
				this.transitionToRoute('cuestionario')
			})
		}
	}
});
