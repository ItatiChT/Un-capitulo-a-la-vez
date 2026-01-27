const path = require('path');
require('dotenv').config(); // Carga las variables del archivo .env 
const express = require("express");
const cors = require("cors");

// Importar las rutas 
const lecturaRoutes = require('./routes/lecturaRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(cors()); 
app.use(express.json()); // Para manejar errores y solicitudes JSON 
// Carpeta para el frontend opcional 
// Con esto le decimos la ruta exacta de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

/* Ruta de prueba
app.get("/", (req, res) => {
  res.send("API de 'Un capítulo a la vez' funcionando correctamente ");
});*/

// Usar las rutas con sus prefijos correspondientes 
app.use('/users', userRoutes); // POST /users/register y POST /users/login 
app.use('/items', lecturaRoutes); // CRUD de lecturas 

// Inicio del servidor 
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});