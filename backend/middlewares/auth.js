// Middleware de autenticación
const tokenService = require("../services/token");

module.exports = {
    verifyUsuario: async (req, res, next) => {
        try {
            if (!req.headers.token) {
                return res.status(404).send({
                    message: "No token"
                });
            }
            const response = await tokenService.decode(req.headers.token);
            if (
                response.rol == "Administrador" ||
                response.rol == "Vendedor" ||
                response.rol == "Almacenero"
            ) {
                next();
            } else {
                return res.status(403).send({
                    message: "No autorizado"
                });
            }
        } catch (err) {
            return res.status(500).send({
                message: "Error interno del servidor"
            });
        }
    },
    verifyAdmin: async (req, res, next) => {
        try {
            if (!req.headers.token) {
                return res.status(404).send({
                    message: "No token"
                });
            }
            const response = await tokenService.decode(req.headers.token);
            if (response.rol == "Administrador") {
                next();
            } else {
                return res.status(403).send({
                    message: "No autorizado"
                });
            }
        } catch (err) {
            return res.status(500).send({
                message: "Error interno del servidor"
            });
        }
    }
};
