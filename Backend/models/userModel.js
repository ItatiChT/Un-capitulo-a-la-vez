const fs = require('fs'); //lee y escribe archivos
const path = require('path'); //construye rutas seguras

// Ruta al archivo de datos de usuarios
const filePath = path.join(__dirname, '../data/users.json');

const UserModel = {
    // Función para obtener todos los usuarios
    findAll: () => {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    },
    
    // Función para guardar un nuevo usuario
    create: (newUser) => {
        const users = UserModel.findAll();
        users.push(newUser);
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    }
};


