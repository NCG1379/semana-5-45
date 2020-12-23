var jwt = require("jsonwebtoken");
const models = require("../models");

module.exports = {
    //generar el token
    encode: async (id, rol) => {
        try {
            const token = jwt.sign(
                {
                    id,
                    rol
                },
                "mipalabrasecreta",
                {
                    expiresIn: 1800
                }
            );

            return token;
        } catch (err) {
            return null;
        }
    },
    //permite decodificar el token
    decode: async token => {
        try {
            const { id } = await jwt.verify(token, "mipalabrasecreta");
            const user = await models.Usuario.findOne({ where: { id: id } });

            if (user) {
                return user;
            } else {
                return false;
            }
        } catch (err) {
            console.log(err);
            return null;
        }
    }
};
