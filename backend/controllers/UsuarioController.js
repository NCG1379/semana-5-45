const { Usuario } = require("../models");
const bcrypt = require("bcryptjs");
const servicioToken = require("../services/token");

module.exports = {
    register: async (req, res, next) => {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        try {
            const newUser = await Usuario.create(req.body);

            res.status(200).json(newUser);
            next();
        } catch (err) {
            res.status(500).send("Error del servidor.");
            next(err);
        }
    },
    login: async (req, res, next) => {
        const { email, password } = req.body;
        try {
            // Verificar existencia de usuario
            const user = await Usuario.findOne({
                where: {
                    email
                }
            });

            if (user) {
                // Verificar contraseña
                const auth = await bcrypt.compare(password, user.password);

                if (auth) {
                    // Generar token
                    const { id, username, email, rol, edad } = user;
                    const tokenReturn = await servicioToken.encode(id, rol);

                    res.status(200).json({
                        user: {
                            id,
                            username,
                            email,
                            rol,
                            edad
                        },
                        tokenReturn
                    });
                    next();
                } else {
                    res.status(401).json({
                        auth: false,
                        tokenReturn: null,
                        error: "Contraseña inválida."
                    });
                }
            } else {
                res.status(404).json({
                    error: "Usuario no registrado."
                });
            }
        } catch (err) {
            res.status(500).send("Error del servidor.");
            next(err);
        }
    },
    list: async (req, res, next) => {
        try {
            const users = await Usuario.findAll();

            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ err: "Error del servidor." });
            next();
        }
    },
    update: async (req, res, next) => {
        const { id, nombre, password, estado, rol, email } = req.body;

        const usuario = await Usuario.findOne({ where: { email } });
        const passwordDB = usuario.password;

        const valid = await bcrypt.compare(password, usuario.password);

        let updatedUser;

        if (valid) {
            let newPassword = req.body.newPassword || null;

            if (newPassword) {
                newPassword = await bcrypt.hash(newPassword, 10);

                updatedUser = await Usuario.update(
                    {
                        nombre,
                        password: newPassword,
                        estado,
                        rol
                    },
                    {
                        where: { id }
                    }
                );
            } else {
                updatedUser = await Usuario.update(
                    {
                        nombre,
                        estado,
                        rol
                    },
                    {
                        where: { id }
                    }
                );
            }

            res.status(200).json(updatedUser);
        } else {
            res.status(401).send;
        }
    }
};
