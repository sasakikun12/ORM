const { Sequelize } = require("sequelize");
require("dotenv").config();

const dbName = process.env.PGDATABASE; // passar os dados do .env para as constantes
const dbUser = process.env.PGUSER;
const dbHost = process.env.PGHOST;
const dbPassword = process.env.PGPASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  //passar os dados para o sequelize
  dialect: "postgres", //informar o tipo de banco que vamos utilizar
  host: dbHost, //o host, neste caso estamos com um banco local
});

module.exports = sequelize; //exportar
