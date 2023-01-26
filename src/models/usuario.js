const mongoose=require('mongoose')

const usuarioSchema=mongoose.Schema({
	username:{
		type:String,
		require:true
	},
	password: {
		type: String,
		require: true
	},
	nombre: {
		type: String,
		require: true
	},
	apellido: {
		type: String,
		require: true
	},
	dni: {
		type: String,
		require: true
	},
	rpta: {
		type: Boolean,
		default:true
	},
	ventas:[{type:Schema.Types.ObjectId,ref:'venta'}]




})


module.exports=mongoose.model('usuario',usuarioSchema)