const mongoose = require('mongoose')

const detalleVentaSchema = mongoose.Schema({
	cantidad: {
		type: Number,
		require: true
	},
	id_producto: {
		require: true,
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'producto',
	},
	id_venta: {
		require: true,
		type: mongoose.Schema.Types.ObjectId,
		ref: 'venta',
	}


})


module.exports = mongoose.model('detalleVenta', detalleVentaSchema)