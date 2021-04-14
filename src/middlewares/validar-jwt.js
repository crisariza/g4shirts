const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = process.env;
const Usuario = require("../models/usuario");

const validarJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "There is not token.",
    });
  }

  try {
    const { uid } = jwt.verify(token, PRIVATE_KEY);

    // leer el usuario que corresponde al uid
    const usuario = await Usuario.findById(uid);

    if (!usuario) {
      return res.status(401).json({
        msg: "Token invalid.",
      });
    }

    // Verificar si el uid tiene estado true
    if (!usuario.estado) {
      return res.status(401).json({
        msg: "Token invalid. The user status is false.",
      });
    }

    req.usuario = usuario;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token invalid.",
    });
  }
};

module.exports = {
  validarJWT,
};
