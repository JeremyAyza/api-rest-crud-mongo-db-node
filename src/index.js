const express=require("express");
const mongoose=require("mongoose")

require('dotenv').config();

const app = express();
const PORT = (process.env.PORT||9000)

//const productoRoutes = require('./routes/producto')
//const usuarioRoutes = require('./routes/usuario')

const clienteRoutes = require('./routes/cliente')
const ventaRoutes = require('./routes/venta')
const detalleVentaeRoutes = require('./routes/detalleVenta')
const productoRoutes = require('./routes/producto')

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to Mongo DB Atlas'))
.catch((err) => console.error(err))




//Middelwares
app.use(express.json())
app.use("/api", ventaRoutes)
app.use("/api", clienteRoutes)
app.use("/api", detalleVentaeRoutes)
app.use("/api", productoRoutes)


app.listen(PORT, () => {
	console.log('Server listening on port ' + PORT);
})