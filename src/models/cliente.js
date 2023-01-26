const mongoose=require('mongoose')

const clienteSchema=mongoose.Schema({
	
	nombres: {
		type: String,
		require: true
	},
	apellidos: {
		type: String,
		require: true
	},
	dni: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	},
	fecha_creacion: {
		type: String,
		require: true
	},
	celular: {
		type: String,
		require: true
	}

})


module.exports=mongoose.model('cliente',clienteSchema)