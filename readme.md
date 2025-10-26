<h1 align="center">🛒 Inventory Management API</h1>
<p align="center">RESTful API backend for inventory management system with MongoDB integration</p>

<p align="center">
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-18-green?logo=node.js" /></a>
  <a href="https://expressjs.com"><img src="https://img.shields.io/badge/Express-4.x-lightgrey?logo=express" /></a>
  <a href="https://mongodb.com"><img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb" /></a>
  <a href="https://mongoosejs.com"><img src="https://img.shields.io/badge/Mongoose-ODM-red?logo=mongodb" /></a>
</p>

<p align="center">
  <a href="#-installation">⚙️ Installation</a> •
  <a href="#-api-endpoints">🔗 API Endpoints</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-tech-stack">📦 Tech Stack</a>
</p>

---

## 📸 Project Overview

This is a comprehensive RESTful API built with Node.js and Express.js for managing inventory, customers, products, and sales. The API provides full CRUD operations for all entities with MongoDB as the database backend.

> **Note:** This was one of my first backend projects, demonstrating fundamental API development skills and database integration.

---

### 📦 Tech Stack

| Technology        | Description                          |
|------------------|--------------------------------------|
| ![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js) | JavaScript runtime environment |
| ![Express](https://img.shields.io/badge/Express-4.x-lightgrey?logo=express) | Web application framework |
| ![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb) | NoSQL document database |
| ![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red?logo=mongodb) | MongoDB object modeling tool |
| ![dotenv](https://img.shields.io/badge/dotenv-Environment-blue) | Environment variable management |
| ![Nodemon](https://img.shields.io/badge/Nodemon-Development-orange) | Development server with auto-restart |

---

### ✨ Features

- 🏪 **Complete Inventory Management**: Products with codes, descriptions, prices, and images
- 👥 **Customer Management**: Full customer database with contact information
- 🛒 **Sales System**: Sales tracking with customer relationships
- 📊 **Sales Details**: Detailed breakdown of products sold per transaction
- 👤 **User Authentication**: Basic user login system
- 🔗 **RESTful API**: Standard HTTP methods (GET, POST, PUT, DELETE)
- 📝 **Data Validation**: Schema validation with Mongoose
- 🔄 **Database Relationships**: Proper references between collections

---

### 🗂️ Database Schema

#### **Products** (`producto`)
- `codigo`: Unique product code
- `nombre`: Product name
- `descripcion`: Product description
- `marca`: Brand
- `precio_venta`: Selling price
- `precio_compra`: Purchase price
- `url_img`: Product image URL
- `fecha_creacion`: Creation date

#### **Customers** (`cliente`)
- `nombres`: First name
- `apellidos`: Last name
- `dni`: National ID
- `email`: Email address
- `celular`: Phone number
- `fecha_creacion`: Creation date

#### **Sales** (`venta`)
- `descripcion`: Sale description
- `fecha_venta`: Sale date
- `id_cliente`: Reference to customer

#### **Sales Details** (`detalleVenta`)
- `cantidad`: Quantity sold
- `id_producto`: Reference to product
- `id_venta`: Reference to sale

#### **Users** (`usuario`)
- `username`: Username
- `password`: Password
- `nombre`: First name
- `apellido`: Last name
- `dni`: National ID
- `rpta`: Active status
- `ventas`: Array of sales references

---

### 🔗 API Endpoints

#### **Products** (`/api/producto`)
- `GET /api/producto` - Get all products
- `GET /api/producto/:cod` - Get product by code
- `POST /api/producto` - Create new product
- `PUT /api/producto/:cod` - Update product by code
- `DELETE /api/producto/:cod` - Delete product by code

#### **Customers** (`/api/cliente`)
- `GET /api/cliente` - Get all customers
- `GET /api/cliente/:cod` - Get customer by code
- `POST /api/cliente` - Create new customer
- `PUT /api/cliente/:cod` - Update customer by code
- `DELETE /api/cliente/:cod` - Delete customer by code

#### **Sales** (`/api/venta`)
- `GET /api/venta` - Get all sales (with customer data)
- `GET /api/venta/:cod` - Get sale by code
- `POST /api/venta` - Create new sale
- `PUT /api/venta/:cod` - Update sale by code
- `DELETE /api/venta/:cod` - Delete sale by code

#### **Sales Details** (`/api/detalleVenta`)
- `GET /api/detalleVenta` - Get all sale details (with product data)
- `GET /api/detalleVenta/:cod` - Get sale detail by code
- `POST /api/detalleVenta` - Create new sale detail
- `PUT /api/detalleVenta/:cod` - Update sale detail by code
- `DELETE /api/detalleVenta/:cod` - Delete sale detail by code

#### **Users** (`/api/usuario`)
- `GET /api/usuario` - Get all users
- `GET /api/usuario/:cod` - Get user by username
- `POST /api/usuario` - Create new user
- `POST /api/login` - User authentication
- `PUT /api/usuario/:cod` - Update user by username
- `DELETE /api/usuario/:cod` - Delete user by username

---

### ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/inventory-management-api
cd inventory-management-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
```bash
# Create .env file
cp .env.example .env

# Add your MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/inventory_db
# or for MongoDB Atlas:
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/inventory_db
```

4. **Start the server**
```bash
# Development mode (with nodemon)
npm start

# The server will run on http://localhost:9000
```

---

### 🚀 Usage Examples

#### **Create a Product**
```bash
curl -X POST http://localhost:9000/api/producto \
  -H "Content-Type: application/json" \
  -d '{
    "codigo": "PROD001",
    "nombre": "Laptop Dell",
    "descripcion": "Laptop Dell Inspiron 15",
    "marca": "Dell",
    "precio_venta": 1200,
    "precio_compra": 1000,
    "url_img": "https://example.com/laptop.jpg"
  }'
```

#### **Get All Products**
```bash
curl http://localhost:9000/api/producto
```

#### **Create a Customer**
```bash
curl -X POST http://localhost:9000/api/cliente \
  -H "Content-Type: application/json" \
  -d '{
    "nombres": "Juan",
    "apellidos": "Pérez",
    "dni": "12345678",
    "email": "juan@email.com",
    "celular": "987654321"
  }'
```

#### **User Login**
```bash
curl -X POST http://localhost:9000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "password123"
  }'
```

---

### 🎯 Project Highlights

- **RESTful Design**: Follows REST API conventions
- **Database Relationships**: Proper MongoDB references and population
- **Modular Structure**: Clean separation of models, routes, and main app
- **Error Handling**: Basic error handling with try-catch blocks
- **Data Validation**: Mongoose schema validation
- **Environment Configuration**: Secure environment variable management

---

### 🔧 Development Notes

This project demonstrates:
- ✅ Basic Express.js server setup
- ✅ MongoDB integration with Mongoose
- ✅ RESTful API design patterns
- ✅ Database schema design
- ✅ CRUD operations implementation
- ✅ Environment configuration
- ✅ Modular code organization

---

### 📝 License

This project is licensed under the ISC License.

---

### 👨‍💻 Author

**Jeremy** - *Full Stack Developer*

> This was one of my first backend projects, showcasing fundamental API development skills and database integration with MongoDB.
