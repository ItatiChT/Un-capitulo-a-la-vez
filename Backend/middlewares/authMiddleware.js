const jwtService = require('../services/jwtService');

const verificarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: "Lo siento, el Token no fue proporcionado" });

    const decoded = jwtService.validarToken(token);
    
    if (!decoded) {
        return res.status(403).json({ message: "lo lamentamos, Token inválido o expirado" });
    }

    req.user = decoded; // Guardamos los datos del usuario en la petición
    next();
};

module.exports = verificarToken;