const path = require('path');
require('dotenv').config(); 
const express = require("express");
const cors = require("cors");

const lecturaRoutes = require('./routes/lecturaRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
// Render usa puertos altos, 
const PORT = process.env.PORT || 10000; 

app.use(cors()); 
app.use(express.json());

// Coreccion de ruta: 
app.use(express.static(path.join(__dirname, '../public')));

app.use('/users', userRoutes); 
app.use('/items', lecturaRoutes); 

// PARA RENDER:Agregamos '0.0.0.0' para que el servidor sea visible afuera de Render
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});