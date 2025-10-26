const mongoose=require('mongoose')

const productoSchema=mongoose.Schema({
	codigo:{
		type:String,
		unique:true,
		require:true
	},
	nombre: {
		type: String,
		require: true
	},
	descripcion: {
		type: String,
		require: true
	},
	fecha_creacion:{
		type: String,
		require: true
	},
	marca: {
		type: String,
		require: true
	},
	precio_venta:{
		type: Number,
		require: true
	},
	precio_compra: {
		type: Number,
		require: true
	},
	url_img:{
		type: String,
		default:"https://cdn-icons-png.flaticon.com/512/756/756940.png"
	}

})


module.exports=mongoose.model('producto',productoSchema)