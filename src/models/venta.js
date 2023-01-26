const mongoose = require('mongoose')

const ventaSchema = mongoose.Schema({
	descripcion: {
		type: String,
		require: true
	},
	fecha_venta: {
		type: String,
		require: true
	},
	id_cliente: {
		require: true,
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'cliente',
		
	}


})

module.exports = mongoose.model('venta', ventaSchema)