const express = require("express");
const clients = require("./controllers/clients.js");

const routes = express.Router();

//CLIENTE
routes.get("/clients", clients.findAll);
routes.post("/clients", clients.addClient);
routes.get("/clients/:id", clients.findClient);
routes.put("/clients/:id", clients.updateClient);
routes.delete("/clients/:id", clients.deleteClient);

module.exports = routes;
