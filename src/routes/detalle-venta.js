const express = require('express')
detalleVentaSchema=require('../models/detalleVenta');

const router=express.Router()



//routes


router.post("/detalleVenta",(req,res)=>{
	const detalleVenta=detalleVentaSchema(req.body)
	detalleVenta.save()
	.then(data=>res.json(data))
	.catch(error=>res.json({message:error}))
})


router.get("/detalleVenta", (req, res) => {
	detalleVentaSchema.find().populate('id_venta').populate('id_producto')
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})



router.get("/detalleVenta/:cod", (req, res) => {
	const {cod}=req.params
	detalleVentaSchema.findOne({detalleVenta:cod})
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})



router.put("/detalleVenta/:cod", (req, res) => {
	const { cod } = req.params
	const newBody={...req.body}
	delete newBody.detalleVenta
	detalleVentaSchema.updateOne({detalleVenta:cod}, {$set:newBody})
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})


router.delete("/detalleVenta/:cod", (req, res) => {
	const { cod } = req.params
	detalleVentaSchema.deleteOne({ detalleVenta: cod })
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})





module.exports=router