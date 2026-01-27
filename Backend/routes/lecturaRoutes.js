//Importaion de expres y creacion de router para las rutas de lecturas
const express = require('express');
const router = express.Router();
const lecturaController = require('../controllers/lecturaController'); //importa las funciones
const verificarToken = require('../middlewares/authMiddleware'); //importa middleware y valida el token

// Todas las rutas de lecturas requieren Token
router.get('/', verificarToken, lecturaController.getAllLecturas); //devuelve las lecturas
router.post('/', verificarToken, lecturaController.createLectura); //crea una nueva lectura

// Nuevas rutas:
router.put('/:id', verificarToken, lecturaController.updateLectura); // Para editar o actualizar
router.delete('/:id', verificarToken, lecturaController.deleteLectura); // Para borrar

module.exports = router;