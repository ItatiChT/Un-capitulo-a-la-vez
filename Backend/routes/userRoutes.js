// Router para las rutas de usuarios
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para registrar un nuevo usaurio: POST
router.post('/register', userController.register);

// Ruta para iniciar sesión: POST 
router.post('/login', userController.login);

module.exports = router;