const express = require('express')
clienteSchema=require('../models/cliente');

const router=express.Router()



//routes


router.post("/cliente",(req,res)=>{
	const cliente=clienteSchema(req.body)
	cliente.save()
	.then(data=>res.json(data))
	.catch(error=>res.json({message:error}))
})


router.get("/cliente", (req, res) => {
	clienteSchema.find()
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})



router.get("/cliente/:cod", (req, res) => {
	const {cod}=req.params
	clienteSchema.findOne({cliente:cod})
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})



router.put("/cliente/:cod", (req, res) => {
	const { cod } = req.params
	const newBody={...req.body}
	delete newBody.cliente
	clienteSchema.updateOne({cliente:cod}, {$set:newBody})
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})


router.delete("/cliente/:cod", (req, res) => {
	const { cod } = req.params
	clienteSchema.deleteOne({ cliente: cod })
		.then(data => res.json(data))
		.catch(error => res.json({ message: error }))
})





module.exports=router