const ClientRepository = require("../models/clientsModel");

function findAll(req, res) {
  ClientRepository.findAll()
    .then((result) => res.json(result))
}

function findClient(req, res) {
  ClientRepository.findByPk(req.params.id)
    .then((result) => res.json(result))
}

function addClient(req, res) {
  ClientRepository.create({
    nome: req.body.nome,
    email: req.body.email,
  })
    .then((result) => res.json(result))
    .catch((error) => res.status(500).json({ error: error.message }));
}

async function updateClient(req, res) {
  await ClientRepository.update(
    {
      nome: req.body.nome,
      email: req.body.email,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  ClientRepository.findByPk(req.params.id)
    .then((result) => res.json(result))
    .catch((error) => res.status(500).json({ error: error.message }));
}

async function deleteClient(req, res) {
  await ClientRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  ClientRepository.findAll()
    .then((result) => res.json(result))
    .catch((error) => res.status(500).json({ error: error.message }));
}

module.exports = { findAll, addClient, findClient, updateClient, deleteClient };
