const express = require("express");
const routes = require("./routes");
const db = require("./db");

const app = express();

app.use(express.json());
app.use(routes);

db.sync(() => console.log(`Banco de dados conectado: ${process.env.PGDATABASE}`));

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
