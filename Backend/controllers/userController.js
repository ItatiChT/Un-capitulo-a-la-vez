const bcrypt = require('bcryptjs');//hashea contraseñas
const UserModel = require('../models/userModel'); // Importamos el modelo de usuarios
const jwtService = require('../services/jwtService'); // Importamos el servicio de tokens

//Extrae los datos enviados
const register = (req, res) => {
    const { username, password } = req.body;
    
    // Usamos el modelo para obtener los usuarios
    const users = UserModel.findAll(); //lee user.json y lo convierte de texto a objeto JS

    // Encripta contraseña 
    const hashedPassword = bcrypt.hashSync(password, 10); //hashea contraseña
    
    const newUser = { id: Date.now(), username, password: hashedPassword }; //crea el nuevo usuario, ID generado automaticamente
    
    // Usamos el modelo para guardar
    UserModel.create(newUser); 
    
    res.status(201).json({ message: "Bienvenido a Un capitulo a la vez!, tu usuario fue registrado correctamente :)" }); // Registra un nuevo usuario con contraseña encriptada
};

//extraemos contenido del body, iniciamos sesion
const login = (req, res) => {
    const { username, password } = req.body;
    
    // Usamos el modelo para buscar la lista de usuarios
    const users = UserModel.findAll(); //lee la lista de usuarios
    
    const user = users.find(u => u.username === username); //busca el usuario
    if (user && bcrypt.compareSync(password, user.password)) { //verifica que exista y compara la contraseña

        // Usa el servicio para crear el token
        const token = jwtService.crearToken(user); 
        
        res.json({ token }); //da el token al cliente
    } else {
        res.status(401).json({ message: "Lo lamentamos, parece que hubo un error. Volve revisar si la contraseña o usuario son correctos. Si aun no tenes una cuenta, podes registrate!:)" }); 
    }
};

//exporto funciones
module.exports = { register, login };
