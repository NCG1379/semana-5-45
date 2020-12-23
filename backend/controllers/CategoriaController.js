const { Categoria } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    list: async (req, res, next) => {
        try {
            const cats = await Categoria.findAll();

            res.status(200).json(cats);
        } catch (err) {
            res.status(500).json({ err: "Error del servidor." });
            next(err);
        }
    },
    add: async (req, res, next) => {
        try {
            const newCat = await Categoria.create(req.body);

            res.status(200).json(newCat);
        } catch (err) {
            res.status(500).json({ err: "Error del servidor." });
            next(err);
        }
    },
    update: async (req, res, next) => {
        const { nombre, descripcion } = req.body;
        try {
            const cat = await Categoria.update(
                {
                    nombre,
                    descripcion
                },
                {
                    where: {
                        id: req.body.id
                    }
                }
            );

            res.status(200).json(cat);
        } catch (err) {
            res.status(500).json({ err: "Error del servidor." });
            next(err);
        }
    },
    activate: async (req, res, next) => {
        try {
            const cat = await Categoria.update(
                {
                    estado: 1
                },
                {
                    where: {
                        id: req.body.id
                    }
                }
            );

            res.status(200).json(cat);
        } catch (err) {
            res.status(500).json({ err: "Error del servidor." });
            next(err);
        }
    },
    deactivate: async (req, res, next) => {
        try {
            const cat = await Categoria.update(
                {
                    estado: 0
                },
                {
                    where: {
                        id: req.body.id
                    }
                }
            );

            res.status(200).json(cat);
        } catch (err) {
            res.status(500).json({ err: "Error del servidor." });
            next(err);
        }
    }
};
