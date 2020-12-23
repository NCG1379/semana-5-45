const { Articulo } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    list: async (req, res, next) => {
        try {
            const arts = await Articulo.findAll();

            res.status(200).json(arts);
        } catch (err) {
            res.status(500).json({ err: "Error del servidor." });
            next(err);
        }
    },
    add: async (req, res, next) => {
        try {
            const newArt = await Articulo.create(req.body);

            res.status(200).json(newArt);
        } catch (err) {
            res.status(500).json({ err: "Error del servidor." });
            next(err);
        }
    },
    update: async (req, res, next) => {
        const { codigo, nombre, descripcion, categoriaId } = req.body;
        try {
            const art = await Articulo.update(
                {
                    codigo,
                    nombre,
                    descripcion,
                    categoriaId
                },
                {
                    where: {
                        id: req.body.id
                    }
                }
            );

            res.status(200).json(art);
        } catch (err) {
            res.status(500).json({ err: "Error del servidor." });
            next(err);
        }
    },
    activate: async (req, res, next) => {
        try {
            const art = await Articulo.update(
                {
                    estado: 1
                },
                {
                    where: {
                        id: req.body.id
                    }
                }
            );

            res.status(200).json(art);
        } catch (err) {
            res.status(500).json({ err: "Error del servidor." });
            next(err);
        }
    },
    deactivate: async (req, res, next) => {
        try {
            const art = await Articulo.update(
                {
                    estado: 0
                },
                {
                    where: {
                        id: req.body.id
                    }
                }
            );

            res.status(200).json(art);
        } catch (err) {
            res.status(500).json({ err: "Error del servidor." });
            next(err);
        }
    }
};
