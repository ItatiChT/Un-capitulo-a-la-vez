const jwt = require('jsonwebtoken');
// Usamos la clave del .env o una por defecto para desarrollo
const secret = process.env.JWT_SECRET || 'mi_clave_secreta_super_pro';

const jwtService = {
    // Función para crear el token (se usa en el Login)
    crearToken: (usuario) => {
        const payload = { 
            id: usuario.id, 
            username: usuario.username 
        };
        return jwt.sign(payload, secret, { expiresIn: '2h' });
    },

    // Función para validar el token (se usa en el Middleware)
    validarToken: (token) => {
        try {
            return jwt.verify(token, secret);
        } catch (error) {
            return null; // Si el token es falso o expiró
        }
    }
};

module.exports = jwtService;