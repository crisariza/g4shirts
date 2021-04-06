const server = require("express").Router();

const { MercadoPagoController } = require("../controllers/mercadopago");

server.post("/", MercadoPagoController);

module.exports = server;
