const path = require('path');
require('dotenv').config(); 
const express = require("express");
const cors = require("cors");

const lecturaRoutes = require('./routes/lecturaRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 10000; 

app.use(cors()); 
app.use(express.json());

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoutes); 
app.use('/items', lecturaRoutes); 

// ruta raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Inicio del servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});