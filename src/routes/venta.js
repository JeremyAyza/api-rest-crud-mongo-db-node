const express = require('express')
ventaSchema=require('../models/venta');

const router=express.Router()



//routes


router.post("/venta",(req,res)=>{
	const today = new Date().toLocaleDateString('en-US');
	const venta=ventaSchema({...req.body,fecha_venta:today})
	venta.save()
	.then(data=>res.json(data))
	.catch(error=>res.json({message:error}))
})


router.get("/venta", (request, res) => {
	ventaSchema.find().populate('id_cliente')
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})



router.get("/venta/:cod", (req, res) => {
	const {cod}=req.params
	ventaSchema.findOne({venta:cod})
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})



router.put("/venta/:cod", (req, res) => {
	const { cod } = req.params
	const newBody={...req.body}
	delete newBody.venta
	ventaSchema.updateOne({venta:cod}, {$set:newBody})
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})


router.delete("/venta/:cod", (req, res) => {
	const { cod } = req.params
	ventaSchema.deleteOne({ venta: cod })
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})





module.exports=router